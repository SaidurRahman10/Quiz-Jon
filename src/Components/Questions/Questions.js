import React from 'react';

const Questions = ({questions}) => {

    const {question,correctAnswer,options} = questions;
    console.log(questions);
 
    
   
   
    return (
        <div className='text-center flex flex-col justify-center items-center shadow-lg p-10 pb-10 rounded-3xl'>
            
            <h1 className='text-2xl  w-1/2 my-10 font-bold text-orange-600'>Quiz:  {question}</h1>

            <div className=" grid grid-cols-2 gap-5 ">
                <button className='p-10 border-orange-300 border rounded-2xl font-bold'>{options[0]} </button>
                <button className='p-10 border-orange-300 border rounded-2xl font-bold'>{options[1]} </button>
                <button className='p-10 border-orange-300 border rounded-2xl font-bold'>{options[2]} </button>
                <button className='p-10 border-orange-300 border rounded-2xl font-bold'>{options[3]} </button>
               
            </div>
        </div>
    );
};

export default Questions;