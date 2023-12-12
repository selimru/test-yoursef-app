import axios from "axios";
import { useForm } from "react-hook-form";


const AddQuiz = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        reset()
        console.log(data);
        const info = {
            question: data.question,
            option1: data.option1,
            option2: data.option2,
            option3: data.option3,
            option4: data.option4
        }
        const res = await axios.post('https://test-your-iq-server.vercel.app/api/v1/questionCreate', info)
        if (res.data?.insertedId) {
            alert('Answered successfully')
        }
    };
    return (
        <div className=" py-10">
            <form onSubmit={handleSubmit(onSubmit)} className=" flex justify-center">
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Question</span>
                        </div>
                        <input {...register("question", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Option</span>
                        </div>
                        <input {...register("option1", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs my-3" />
                        <input {...register("option2", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs my-3" />
                        <input {...register("option3", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs my-3" />
                        <input {...register("option4", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs my-3" />
                        <input type="submit" value="Add Quiz" className=" bg-gray-950 text-white px-4 py-3 rounded-md" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default AddQuiz;