import React from 'react';
import header from '../../img/header.jpg'





const Home = () => {
    
    return (
        <div className='grid grid-cols-2' style={{margin:'0px 5rem'}}>

          <div className="">
            <h1 className='text-6xl mt-32 font-bold  leading tracking-wide opacity-82 mb-20'>The Smarter <br /> Way to Learn is<br />  <span className=' text-6xl text-orange-400'> Practicing QUIZ.</span></h1>

         </div>
           
        
          
          <div className="">
          <img src={header} alt="" />
          </div>
         
  
        </div>
    );
};

export default Home;