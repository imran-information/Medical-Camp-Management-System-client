import Heading from '../../../components/Shared/Heading';
import RegisteredCampsTable from '../../../components/Dashboard/Participant/RegisteredCamps/RegisteredCampsTable';
import useRegisteredCamps from '../../../hooks/useRegisteredCamps';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const RegisteredCamps = () => {
    const [registeredCamps, isLoading, refetch] = useRegisteredCamps();

    if (isLoading) return <LoadingSpinner />;
    console.log(registeredCamps);
    return (
        <div>
            <Heading center={true} title='Registered Camps' subtitle={" Manage Your Registered Camps"} />
            <RegisteredCampsTable registeredCamps={registeredCamps} refetch={refetch} />
        </div>
    );
};

export default RegisteredCamps;