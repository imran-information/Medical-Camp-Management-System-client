import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Dashboard/Participant/CheckoutForm/CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PayRegisteredCamps = ({ isPaying, setIsPaying, camp, refetch }) => {
    const handleClose = () => {
        setIsPaying(false);
    }

    return (
        <>
            <Dialog open={isPaying} onClose={() => handleClose()} fullWidth maxWidth="sm">
                <DialogTitle align='center'>Pay Camp Name: {camp?.campData?.name} </DialogTitle>
                <DialogContent>
                    <div className="">
                        {camp?.campData?.image && (
                            <Avatar
                                src={camp?.campData?.image}
                                alt="Preview"
                                sx={{ width: 120, height: 120 }}
                                className="mx-auto"
                            />
                        )}
                        <h2 className='text-center text-xl my-5'>Camp Fees: ${camp?.campData?.fees}</h2>
                    </div>

                    <Elements stripe={stripePromise}>
                        {/* <CheckoutForm /> */}
                        <CheckoutForm handleClose={handleClose} camp={camp} refetch={refetch} />
                    </Elements>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={() => handleClose()} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handlePay} variant="contained" color="primary">
                        Pay
                    </Button>
                </DialogActions> */}
            </Dialog>
        </>
    );
};

export default PayRegisteredCamps;