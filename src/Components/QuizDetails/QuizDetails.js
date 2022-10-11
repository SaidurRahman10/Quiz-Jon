import React from 'react';
import { useLoaderData } from 'react-router';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quizData = useLoaderData();
    const quiz = quizData.data;

    const {name} = quiz;

    const quizQuestions = quizData.data.questions;
   

    
    return (
        <div className=' md:mx-24 lg:mx-36 my-10  '>
            <h1 className='text-center text-4xl font-bold text-orange-400 mb-10'>Quiz of {name} </h1>
        

       <div className="">
        {
            quizQuestions.map(question => <Questions key={question.id} questions={question}></Questions> )
        }

       </div>

        </div>
    );
};

export default QuizDetails;