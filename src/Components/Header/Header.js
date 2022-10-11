

import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div  className="shadow-md px-16">
          <nav  className=' w-full'>
            <div onClick={()=>setOpen(!open)} className="h-10 w-10 text-black-500 md:hidden">
            {
             open ?  <XMarkIcon/> : <Bars3Icon/>
            }
            </div>
               
            <ul className={`md:flex p-5 justify-between  md:static absolute ${open ? 'top-100' : 'top-[-220px]'} duration-500 ease-in }`}>
            
           

            <div className=" hidden lg:block">
            <a className="w-full font-bold text-xl sm:text-3xl block ">
              <span className="text-orange-300"> Quiz. </span> Jon
            </a>
          </div>

            <div className=" flex  flex-col md:flex-row gap-6">
                <Link className='text-xl text-orange-400' to='/'>Home</Link>
            
                <Link className='text-xl text-orange-400' to='/statistics'>Statistics</Link>
                <Link className='text-xl text-orange-400' to='/blog'>Blog</Link>   
            </div>



              
               
         </ul>
        </nav>
        </div>
    );


    
};

export default Header;