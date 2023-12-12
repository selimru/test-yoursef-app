import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useQuestion from "../hooks/useQuestion";
import useAnswer from "../hooks/useAnswer";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const PageTen = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [questions, isLoading] = useQuestion()
    console.log(questions);
    const [answers, refetch] = useAnswer()
    console.log(answers);
    const answer = answers?.find(answer => answer?.actualAnswer
        === 'India')
    console.log(answer);
    const [checked, setChecked] = useState(false)
    // const [answer, setAnswer] = useState('')
    console.log(checked);
    // console.log(answer)

    if (isLoading)
        return <p>loading</p>

    const handleCheckboxChange = (option) => {
        setChecked(option);
    };
    const handleSubmit = async () => {
        if (!checked) {
            alert('Select an option first')
            return;
        }
        const actualAnswer = questions[9]?.option2
        let result;
        let currentAnswer;
        if (checked === questions[9]?.option1
            ||
            questions[9]?.option2
            ||
            questions[9]?.option3
            ||
            questions[9]?.option4) {
            currentAnswer = checked;
        }
        if (checked === questions[9]?.option2) {
            result = 'correct'
        }
        else {
            result = 'incorrect';
        }
        // setAnswer(currentAnswer);

        const info = {
            email: user.email,
            actualAnswer: actualAnswer,
            currentAnswer: currentAnswer,
            result: result
        }
        const res = await axios.post('https://test-your-iq-server.vercel.app/api/v1/answerCreate', info)
        console.log(res.data);
        if (res.data?.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Answered successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/result')
        }
        refetch()
    }
    return (
        <div className=" h-screen max-w-6xl mx-auto bg-gray-400">
            <p className=" text-end mr-5 text-white">10/{questions?.length}</p>
            <p className=" text-2xl font-semibold py-10 text-center">{questions[9].question}</p>
            <div className=" flex justify-center">
                <div>
                    <div className=" flex items-center gap-5  my-10">
                        {answer && answer.currentAnswer === questions[9]?.option1 ?

                            <input disabled checked onChange={() => handleCheckboxChange(questions[9].option1)} type="checkbox" name="check" id="" />
                            :
                            answer ?
                                <input disabled onChange={() => handleCheckboxChange(questions[9].option1)} type="checkbox" name="check" id="" />
                                :
                                <input onChange={() => handleCheckboxChange(questions[9].option1)} type="checkbox" name="check" id="" />
                        }
                        <p >{questions[9].option1}</p>
                    </div>
                    <div className=" flex items-center gap-5 my-10">
                        {answer && answer.currentAnswer === questions[9].option2 ?

                            <input disabled checked onChange={() => handleCheckboxChange(questions[9].option2)} type="checkbox" name="check" id="" />
                            :
                            answer ?
                                <input disabled onChange={() => handleCheckboxChange(questions[9].option2)} type="checkbox" name="check" id="" />
                                :
                                <input onChange={() => handleCheckboxChange(questions[9].option2)} type="checkbox" name="check" id="" />
                        }
                        <p >{questions[9].option2}</p>
                    </div>
                    <div className=" flex items-center gap-5 my-10">
                        {answer && answer.currentAnswer === questions[9].option3 ?

                            <input disabled checked onChange={() => handleCheckboxChange(questions[9].option3)} type="checkbox" name="check" id="" />
                            :
                            answer ?
                                <input disabled onChange={() => handleCheckboxChange(questions[9].option3)} type="checkbox" name="check" id="" />
                                :
                                <input onChange={() => handleCheckboxChange(questions[9].option3)} type="checkbox" name="check" id="" />
                        }
                        <p >{questions[9].option3}</p>
                    </div>
                    <div className=" flex items-center gap-5 my-10">
                        {answer && answer.currentAnswer === questions[9].option4 ?

                            <input disabled checked onChange={() => handleCheckboxChange(questions[9].option4)} type="checkbox" name="check" id="" />
                            :
                            answer ?
                                <input disabled onChange={() => handleCheckboxChange(questions[9].option4)} type="checkbox" name="check" id="" />
                                :
                                <input onChange={() => handleCheckboxChange(questions[9].option4)} type="checkbox" name="check" id="" />
                        }
                        <p >{questions[9].option4}</p>
                    </div>
                </div>
            </div>
            <div className=" flex items-center gap-5 justify-center ">
                <button className=" hover:bg-gray-800 hover:text-white bg-gray-600 px-4 py-3 rounded-md"><Link to='/pageNine'>Previous</Link></button>
                {answer ?
                    < button title="submited" disabled className=" bg-gray-600 px-4 py-3 rounded-md" onClick={handleSubmit}>Submit</button>
                    :
                    <button className="hover:bg-gray-800 hover:text-white bg-gray-600 px-4 py-3 rounded-md" onClick={handleSubmit}>Submit</button>
                }
                {answer ?
                    <button className="hover:bg-gray-800 hover:text-white bg-gray-600 px-4 py-3 rounded-md"><Link to='/result'>Next</Link></button>
                    :
                    <button className="hover:bg-gray-800 hover:text-white bg-gray-600 px-4 py-3 rounded-md">Next</button>
                }
            </div>
        </div >
    );
};

export default PageTen;