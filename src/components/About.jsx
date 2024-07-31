import React from 'react'
import {ABOUT_TEXT}  from "../constants/index";
import about from '../assets/about.jpg';
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <h1 className='my-20 text-center text-4xl'> About ME</h1>
      <span className='text-neutral-500'></span>
      <div className='flex flex-wrap '>
            <motion.div 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8 '
            >
              <div className='flex items-center justify-center '>
              <img src={about} className='rounded-2xl'/>
              </div>
            </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2 '>
        <div className='flex justify-center  lg:justify-start lg:mt-14 '>
         <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
        </div>
          
      </motion.div>

      </div>





    </div>
  )
}

export default About;
