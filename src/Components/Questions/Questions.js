import React from 'react';

const Questions = ({questions}) => {

    console.log(questions);
    const {question,correctAnswer,options} = questions;
   
    return (
        <div className='text-center flex flex-col justify-center items-center shadow-lg pb-10 rounded-3xl'>
            
            <h1 className='text-2xl  w-1/2 my-10 font-bold text-orange-600'>Quiz:  {question}</h1>

            <div className=" grid grid-cols-2 gap-5 ">
                <h2 className='p-10 border-orange-300 border rounded-2xl font-bold'> {options[0]} </h2>
                <h2 className='p-10 border-orange-300 border rounded-2xl font-bold'> {options[1]} </h2>
                <h2 className='p-10 border-orange-300 border rounded-2xl font-bold'> {options[2]} </h2>
                <h2 className='p-10 border-orange-300 border rounded-2xl font-bold'> {correctAnswer}</h2>
            </div>
        </div>
    );
};

export default Questions;