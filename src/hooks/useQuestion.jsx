import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useQuestion = () => {
    const { data: questions, isPending, isError, data, error,isLoading } = useQuery({
        queryKey: ['question'],
        queryFn: async () => {
            const res = await axios.get('https://test-your-iq-server.vercel.app/api/v1/getQuestion')
            return res?.data
        }
    })
    return [questions, isLoading]
};

export default useQuestion;