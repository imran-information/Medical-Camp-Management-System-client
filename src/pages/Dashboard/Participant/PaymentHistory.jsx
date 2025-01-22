import React from 'react';
import Heading from '../../../components/Shared/Heading';
import PaymentsHistoryTable from '../../../components/Dashboard/Participant/PaymentsHistory/PaymentsHistoryTable';
import useRegisteredCamps from '../../../hooks/useRegisteredCamps';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [registeredCamps, isLoading, refetch] = useRegisteredCamps()

    return (
        <div data-aos="fade-left" data-aos-duration="2000">
            <Helmet>
                <title> Payment History | Medical Camp Management System</title>
            </Helmet>
            <Heading center={true} title={"Camp Payment History"} subtitle={""} />
            <PaymentsHistoryTable registeredCamps={registeredCamps} isLoading={isLoading} refetch={refetch} />
        </div>
    );
};

export default PaymentHistory;