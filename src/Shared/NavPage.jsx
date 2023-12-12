import { Link } from "react-router-dom";
import logo from '../assets/test.png'
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const NavPage = () => {
    const [isAdmin, isLoading] = useAdmin()
    console.log(isAdmin);
    const { user, logOut, loading } = useAuth()

    const handleLogOut = () => {
        logOut()
    }

    if (loading)
        return <p>Loading</p>

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4">
                        <Link to='/'><li>Home</li></Link>
                        {isAdmin &&
                            <Link to='/addquiz'><li>Add Quiz</li></Link>
                        }
                        {isAdmin &&
                            <Link to='/users'><li>Users</li></Link>
                        }
                    </ul>
                </div>
                <div className=" flex gap-5 items-center">
                    <img className="w-[60px] h-[60px]" src={logo} alt="" />
                    <h3 className=" text-base md:text-2xl font-bold text-center text-gray-600">Test <span className=" text-red-600 text-xl md:text-3xl">Yourself</span></h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <Link to='/'><li>Home</li></Link>
                    {isAdmin &&
                        <Link to='/addquiz'><li>Add Quiz</li></Link>
                    }
                    {isAdmin &&
                        <Link to='/users'><li>Users</li></Link>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className=" flex flex-col md:flex-row lg:flex-row gap-1 mr-2">
                    <p className=" text-xs md:text-base ">{user?.displayName}</p>
                    <img className=" w-[30px] h-[30px] rounded-full" src={user?.photoURL} alt="" />
                </div>
                {user ?
                    <button onClick={handleLogOut} className="  btn btn-outline-primary">Log Out</button>
                    :
                    <button className="  btn btn-outline-primary "><Link to='login'>LogIn</Link></button>
                }
            </div>
        </div>
    );
};

export default NavPage;