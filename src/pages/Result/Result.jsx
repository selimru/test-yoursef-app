import useAnswer from "../../hooks/useAnswer";

const Result = () => {
    const [answers, refetch] = useAnswer()
    const corrects = answers.filter(correct => correct.result === 'correct')
    const inCorrects = answers.filter(correct => correct.result === 'incorrect')
    console.log(corrects.length);
    console.log(inCorrects.length);
    return (
        <div className=" max-w-6xl mx-auto bg-gray-400 h-screen">
            <div>
                <img className=" w-[300px] pt-5 mx-auto" src="https://i.ibb.co/w46xqpD/Result-510x310-removebg-preview.png" alt="" />
                <div className="text-center w-[300px] h-[300px] mx-auto border rounded-full">
                    <h3 className=" text-lg md:text-xl mt-24 md:mt-24">Thanks For Your Participation</h3>
                    <p className=" md:text-2xl text-red-600">Correct answer : <span className=" text-white md:text-2xl">{corrects.length}</span></p>
                    <p className=" md:text-2xl text-red-600">Incorrect answer : <span className=" text-white md:text-2xl">{inCorrects.length}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Result;