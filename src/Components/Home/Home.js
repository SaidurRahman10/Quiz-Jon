import React from 'react';
import { useLoaderData } from 'react-router';
import header from '../../img/header3.jpg'
import Quiz from '../Quiz/Quiz';





const Home = () => {
    const allQuiz = useLoaderData();
     const quizTopics = allQuiz.data;
    
    
    return (
        <div  className="px-8 md:px-12">


        <div className='grid grid-cols-1 md:grid-cols-2' >

           <div className="px-10">
            <h1 className='text-4xl md:text-6xl mt-32 font-bold  leading tracking-wide opacity-82 mb-20'>The Smarter <br /> Way to Learn is<br />  <span className=' md:text-6xl text-5xl text-orange-400'> Practicing QUIZ.</span></h1>

         </div>
           
        
          
          <div className="mt-10 ">
          <img className=' rounded-lg' src={header} alt="" />
          </div>
    </div>


            <div className="quiz grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mt-32 gap-10">
                {
                    quizTopics.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>



        </div>
    );
};

export default Home;