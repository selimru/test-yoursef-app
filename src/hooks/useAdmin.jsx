import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";


const useAdmin = () => {
    const { user } = useAuth()
    const { data: isAdmin, isPending, isError, data, error, isLoading, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://test-your-iq-server.vercel.app/api/v1/getIsAdmin/${user?.email}`)
            console.log(res?.data);
            return res?.data?.admin
        }
    })
    return [isAdmin, refetch, isLoading]
};

export default useAdmin;