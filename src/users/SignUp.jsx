import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useForm } from "react-hook-form";
import img from '../assets/key.png'
import { FaGoogle } from "react-icons/fa6";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const SignUp = () => {
    const { createUser, profileUpdate, loginWithGoogle } = useAuth()
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res.user);
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL
                }
                axios.post('https://test-your-iq-server.vercel.app/api/v1/createUser', userInfo)
                    .then(res => {
                        // console.log(res.data);
                        const loggedUser = res.data.insertedId
                        if (loggedUser) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User created successfully",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/')
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${error.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
            })
    }
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        const image = res.data.data.display_url
        // console.log(res.data);
        if (res.data.success) {
            // console.log(data);
            createUser(data.email, data.password)
                .then(res => {
                    console.log(res.user);
                    profileUpdate(data.name, image)
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        image: image
                    }
                    axios.post('https://test-your-iq-server.vercel.app/api/v1/createUser', userInfo)
                        .then(res => {
                            const loggedUser = res.data.insertedId
                            if (loggedUser) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "User created successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate('/')
                            }
                        })
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${error.message}`,
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                })
        }
    }
    return (
        <div className="max-w-6xl mx-auto my-10 px-3">
            <h3 className=" text-3xl text-center font-semibold my-5">Please Sign up Your Account</h3>
            <div className=" flex flex-col md:flex-row items-center gap-8">
                <div className=" w-full lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className=" w-full lg:w-1/2">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="name" value="Your name" >Your name</label>
                                </div>
                                <input {...register("name", { required: true })} id="name" type="text" placeholder="Your name" className=" border rounded-md px-5 py-3 w-full" shadow />
                                {errors.name && <span className=" text-red-500" >Name is required</span>
                                }
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="phone" value="Your phone" >Your phone</label>
                                </div>
                                <input {...register("phone", { required: true })} id="phone" type="text" placeholder="Your phone" className=" border rounded-md px-5 py-3 w-full" shadow />
                                {errors.name && <span className=" text-red-500" >Name is required</span>
                                }
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="Image url" value="Your image" >Your image</label>
                                </div>
                                <input {...register("image", { required: true })} id="image"
                                    type="file" shadow />
                                {errors.image_url && <span className=" text-red-500" >Image is required</span>
                                }

                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="email2" value="Your email" >Your email</label>
                                </div>
                                <input {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} id="email2" type="email" placeholder="Your email" className=" border rounded-md px-5 py-3 w-full" shadow />
                                {errors.email?.type === "required" && <span className=" text-red-500" >Email is required</span>
                                }
                                {errors.email?.type === "pattern" && (
                                    <span className=" text-red-500" >Valid email is required</span>
                                )}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="password2" value="Your password" >Your password</label>
                                </div>
                                <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /[A-Z](?=.*?[#?!@$%^&*-])[a-z]/ })} id="password2" type="password" placeholder="Your password" className=" border rounded-md px-5 py-3 w-full" shadow />
                                {errors.password?.type === "required" && (
                                    <span className=" text-red-500" >Password is required</span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className=" text-red-500" >Password length is at least 6 characters required</span>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <span className=" text-red-500" >Password should have at least one uppercase ,one lowercase and one special characters</span>
                                )}
                            </div>
                            {/* <div className="flex items-center gap-2">
                            <Checkbox name="check" {...register("check", { required: true })} id="agree" />
                            <label htmlFor="agree" className="flex">
                                I agree with the&nbsp;
                                <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    terms and conditions
                                </Link>
                            </label>
                        </div> */}
                            {/* {errors.check && <span className=" text-red-500" >Check is required</span>} */}
                            <button type='submit' className="btn ">SignUp</button>
                        </form>
                        <div className=" md:w-[450px] py-5">
                            <button onClick={handleGoogleLogin} className=" w-full btn  uppercase">
                                <FaGoogle className=" mr-2" /> JoinwithGoole
                            </button>
                        </div>
                    </div>
                    <h4 className=" text-center my-5 ">Already have an account? <Link to='/login'><span className=" text-blue-600 underline">Please LogIn</span></Link></h4>
                </div>
            </div>
        </div>
    );
};

export default SignUp;