import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useUsers = () => {
    const { data: users, isPending, isError, data, error, isLoading, refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await axios.get(`https://test-your-iq-server.vercel.app/api/v1/getUsers`)
            console.log(res?.data);
            return res?.data
        }
    })
    return [users, refetch, isLoading]

};

export default useUsers;