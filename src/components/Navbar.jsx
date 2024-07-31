import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';




const Navbar = () => {
  return <nav className='mb-2 flex items-center justify-between py-6 border-b-2 border-neutral-500 '>
    <div className='flex flex-shrink-0 items-center  '>
    <h1 className='text-5xl'>P.P</h1>
    </div>
    <div className='flex items-center justify-center gap-4 p-2 m-8 text-2xl' >
       <a href='https://github.com/Priyanshu-pandey123' target="_blank" className='hover:bg-gray-400 rounded-lg'><FaGithub /></a> 
       <a href='https://www.linkedin.com/in/priyanshu-pandey-945b95249/ ' target="_blank" className='hover:'> <FaLinkedin/> </a> 
        <FaSquareXTwitter/>
        <FaInstagram/>
    </div>    
  </nav>
}

export default Navbar
