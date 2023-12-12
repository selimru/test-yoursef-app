import { Link } from "react-router-dom";
import img from '../assets/test.png'
import { FaArrowDownLong } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
// import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Home = () => {
    const { user } = useAuth()
    return (
        <div className=" h-screen max-w-6xl mx-auto bg-gray-400">
            <h3 className=" text-center text-sm md:text-2xl font-semibold pt-10">Lets's play with quiz</h3>
            {/* <h3 className=" text-3xl font-bold text-center text-white mt-5">Test <span className=" text-red-600 text-4xl">Yourself</span></h3> */}
            <Canvas id="t">
                <Suspense fallback={null}>
                    <ambientLight args={['#ffffff', 1]}></ambientLight>
                </Suspense>
            </Canvas>

            <img className=" w-[300px] mx-auto" src={img} alt="" />
            <FaArrowDownLong className=" mx-auto text-white animate-bounce text-center text-3xl" />
            {user ?
                <Link to='/pageOne'><h3 className=" text-red-600 text-4xl text-center">Start</h3></Link>
                :
                <h3 className=" text-red-600 text-4xl text-center"><Link to='login'>Start</Link></h3>
            }
        </div>
    );
};

export default Home;

