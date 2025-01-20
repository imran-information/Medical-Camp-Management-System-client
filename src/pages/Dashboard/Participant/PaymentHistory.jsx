import React from 'react';
import Heading from '../../../components/Shared/Heading';
import PaymentsHistoryTable from '../../../components/Dashboard/Participant/PaymentsHistory/PaymentsHistoryTable';
import useRegisteredCamps from '../../../hooks/useRegisteredCamps';

const PaymentHistory = () => {
    const [registeredCamps, isLoading, refetch] = useRegisteredCamps()

    return (
        <div>
            <Heading center={true} title={"Camp Payment History"} subtitle={""} />
            <PaymentsHistoryTable registeredCamps={registeredCamps} isLoading={isLoading} refetch={refetch} />
        </div>
    );
};

export default PaymentHistory;