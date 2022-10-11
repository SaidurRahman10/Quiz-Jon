import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({questions}) => {

    const {question,correctAnswer,options} = questions;
    
    const notify = () => {
        toast.success(`Answer is: ${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            draggable: false
        });
    }

    const rightAnswer = (id) => {
        if (id === correctAnswer) {
            toast.success(" Your Answer is Correct!", {
                position: "top-center",
                autoClose: 2000,
                draggable: false
            });
        } else {
            toast.error("Your Answer is Wrong", {
                position: "top-center",
                autoClose: 2000,
                draggable: false,

            });
        }

    }
 
    
   
   
    return (
        <div className='text-center flex flex-col justify-center items-center shadow-lg p-10 pb-10 rounded-3xl '>
            
            <h1 className='text-2xl  w-1/2 my-10 font-bold text-orange-600'>Quiz:  {question}</h1>
            <button type="button" onClick={notify} className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"><EyeIcon className="h-6 w-6 text-blue-500"/></button>

            <div className=" grid grid-cols-2 gap-5 ">
                {/* <button className='p-10 border-orange-300 border rounded-2xl font-bold'>{options[0]} </button> */}

                {
                    options.map(option => <section key={option}>

                     <div className=''>
                            <button type="button" id='button' onClick={() => { rightAnswer(option) }} className="p-10 border-orange-300 border rounded-2xl font-bold">{option}</button>
                            <ToastContainer
                            />
                        </div>
                    </section>)
                }
              
               
            </div>
        </div>
    );
};

export default Questions;