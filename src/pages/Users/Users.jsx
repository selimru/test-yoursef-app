import axios from "axios";
import useUsers from "../../hooks/useUsers";


const Users = () => {
    const [users, refetch, isLoading] = useUsers()
    console.log(users);

    if (isLoading)
        return <p>Loading...</p>


    const handleMakeAdmin = (id) => {
        axios.patch(`https://test-your-iq-server.vercel.app/api/v1/makeAdmin/${id}`)
        refetch()
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => <tr key={user._id} className="bg-base-200">
                        <th>1</th>
                        <td><img className=" w-[1oopx] h-[100px] rounded-full" src={user.image} alt="" /></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        {
                            user.role === 'admin' ?
                                <td>
                                    {user.role}

                                </td>
                                :
                                <td>
                                    <button onClick={() => handleMakeAdmin(user._id)}>user</button>
                                </td>
                        }
                    </tr>)
                    }

                </tbody>
            </table>
        </div >
    );
};

export default Users;