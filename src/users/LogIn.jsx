import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import img from '../assets/key.png'
import { FaGoogle } from "react-icons/fa6";

const LogIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { logIn, loginWithGoogle } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        logIn(data.email, data.password)
            .then(res => {
                console.log(res.user);
                const loggedUser = res.user
                if (loggedUser) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have logged in successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    };
    return (
        <div className="max-w-6xl mx-auto my-10 px-3">
            <h3 className=" text-3xl text-center font-semibold my-5">Please Log in to Your Account</h3>
            <div className=" flex flex-col md:flex-row items-center gap-8">
                <div className=" w-full lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className=" w-full lg:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="email2" value="Your email" >Your email</label>
                            </div>
                            <input {...register("email", { required: true })} id="email2" type="email" placeholder="Your email" className=" border px-5 rounded-md py-3 w-full" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="password" value="Your password" >Your password</label>
                            </div>
                            <input {...register("password", { required: true })} id="password" type="password" placeholder="Your password" className=" border rounded-md px-5 py-3 w-full" required shadow />
                        </div>
                        <button type='submit' className="btn btn-primary">LogIn</button>
                        {/* <Button disabled={disable} type="submit">LogIn</Button>
                        <Button onClick={handleGoogleLogin} className=" uppercase" outline gradientDuoTone="pinkToOrange">
                            <FaGoogle className=" mr-2" /> JoinwithGoole
                        </Button> */}
                    </form>
                    <h4 className=" text-center my-5">New here ? <Link to='/signup'><span className=" text-blue-600 underline">Please SignUp</span></Link></h4>
                </div>
            </div>
        </div>
    );
};

export default LogIn;