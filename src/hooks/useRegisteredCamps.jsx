import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const useRegisteredCamps = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: registeredCamps = [], isLoading, refetch } = useQuery({
        queryKey: ['registeredCamps', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/registered-camps/${user?.email}`);
            return data;
        }
    });

    return [registeredCamps, isLoading, refetch];
};

export default useRegisteredCamps;