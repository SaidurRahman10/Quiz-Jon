import React from 'react';
import { useNavigate } from 'react-router';

const Quiz = ({quiz}) => {
    const  {id,logo,name}  = quiz;
    
    const navigate = useNavigate();

    const handelClick = () =>{

        navigate(`home/${id}`)
        navigate(`/home/${id}`)
    }

    return (
        <div className=' p-5 shadow-xl  rounded-xl'>
            <img className='h-2/3 bg-slate-200 rounded-2xl ml-7 md:ml-0' src={logo} alt="" />

            <div className="flex flex-col   p-2 mt-6  ">
                <h2 className='text-orange-600 md:mt-2 my-5 font-bold text-center'>{name}</h2>
                <button onClick={handelClick} className='px-3 py-2 bg-orange-400 rounded-full text-sm text-white'>Start Quiz</button>
            </div>
            
        </div>
    );
};

export default Quiz;