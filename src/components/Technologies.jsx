
 import React from 'react'
 import { RiReactjsLine } from 'react-icons/ri';
 import { RiNodejsLine } from 'react-icons/ri';
 import { RiJavascriptLine } from 'react-icons/ri';
 import { BiLogoPostgresql } from 'react-icons/bi';
 import { BiLogoTailwindCss } from 'react-icons/bi';
 import Progress from './Progress';
 import {animate, motion} from 'framer-motion';

 const iconVariants=(duration)=>({
  initial:{x:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },

  },

 });
 
 const Technologies = () => {
   return (
     <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        
        className='flex flex-wrap items-center justify-center gap-4 '>

          < motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
             <RiReactjsLine className='text-7xl text-blue-400'/>
             <Progress per={70}/>
            </motion.div>


            <motion.div
              variants={iconVariants(1)}
              initial="initial"
              animate="animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
               <RiNodejsLine className='text-7xl text-green-800'/>
               <Progress per={70}/>
               
            </motion.div>


            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptLine className='text-7xl text-yellow-600'/>
                <Progress per={80}/>
            </motion.div>


            <motion.div 
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-7xl text-yellow-600'/>
                <Progress per={70}/>
            </motion.div>


            <motion.div 
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoTailwindCss className='text-7xl text-cyan-300'/>
                <Progress per={70}/>
            </motion.div>


        </motion.div>
       
     </div>
   )
 }
 
 export default Technologies
 