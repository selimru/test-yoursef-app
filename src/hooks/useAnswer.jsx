import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './useAuth';


const useAnswer = () => {
    const { user } = useAuth()
    const { data: answers, isPending, isError, data, error, isLoading, refetch } = useQuery({
        queryKey: ['answer', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://test-your-iq-server.vercel.app/api/v1/getAnswer/${user?.email}`)
            console.log(res?.data);
            return res?.data
        }
    })
    return [answers, refetch]
};

export default useAnswer;