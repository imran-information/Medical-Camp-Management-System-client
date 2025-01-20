
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import './CheckoutForm.css';
import { Button, DialogActions } from '@mui/material';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ handleClose, camp, refetch }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [clientSecret, setClientSecret] = useState('')
    const [pending, setPending] = useState(false)


    useEffect(() => {
        getPaymentIntent()
    }, [camp])

    const getPaymentIntent = async () => {
        try {
            const { data } = await axiosSecure.post('/create-payment-intent', { campId: camp?.campId })
            setClientSecret(data.client_secret)
        } catch (err) {
            console.log(err);
        }
    }

    console.log(clientSecret);
    const handleSubmit = async (event) => {
        // Block native form submission.
        setPending(true)
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            setPending(false)
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
        if (card == null) {
            setPending(false)
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setPending(false)
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        console.log(camp);

        const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: camp?.participantName,
                    name: camp?.participantEmail,
                },
            },
        })
        if (paymentIntent?.status === 'succeeded') {
            console.log(paymentIntent);
            const { data } = await axiosSecure.patch(`/registered-camp-status`, { campId: camp?.campId })
            if (data?.modifiedCount > 0) {
                handleClose()
                Swal.fire({
                    title: "Payment Succeeded",
                    text: `Payment transaction ID: ${paymentIntent?.id}`,
                    icon: "success",
                    draggable: true
                });
                setPending(false)
                refetch()
                navigate("/dashboard/payment-history")
            }


        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {/* <button type="submit" disabled={!stripe}>
                Pay
            </button> */}
            <DialogActions>
                <Button onClick={() => handleClose()} color="secondary">
                    Cancel
                </Button>
                <Button type="submit" disabled={!stripe || !clientSecret || pending} variant="contained" color="primary">
                    Pay  ${camp?.campData?.fees}
                </Button>
            </DialogActions>
        </form>
    );
};

export default CheckoutForm;