import { useRef, useState } from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail, AiOutlineAppstoreAdd, AiOutlineClose} from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs";
import { SiGmail } from 'react-icons/si'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Sidenav = () => {

    const [nav, setNave] = useState(false)
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const handleNav = () => {
        setTimeout(() => {
            setNave(!nav)
        }, 150);
    }



  return (
    <div className=''>
        {!nav && <a href="#main"><img src={Logo} alt="logo" width={100} className='ml-10 mt-1 fixed'/></a>}
        <div className='fixed flex justify-between w-full z-50 h-12 md:hidden'>
            {nav 
                ?   <AiOutlineClose 
                        onClick={handleNav}
                        className='fixed block top-1 right-1 cursor-pointer rounded-md p-2 md:hidden hover:scale-110 ease-in-out duration-300 bg-black/60'
                        color='#4091c9'
                        size={40}
                    />
                :   <AiOutlineMenu 
                        onClick={handleNav}
                        className='fixed block top-1 right-1 cursor-pointer rounded-md p-2 md:hidden hover:scale-110 ease-in-out duration-300 bg-black/60'
                        color='#4091c9'
                        size={40}
                    />
            }
            
        </div>


        {/* Sidenav in phone */}
        <div className={nav 
            ? 'md:hidden fixed left-0 top-0 w-full h-[100vh] bg-black/50 z-40' 
            : ''
        }>
            <div className={nav 
                ? 'fixed left-0 top-0 w-[80%] sm:w-[60%] md:[45%] h-screen bg-[#abd9fc] p-10 ease-in-out duration-300' 
                : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#93c4e9] p-10 ease-in duration-300'
            }>
                <div className='flex w-full items-center justify-between'>
                    <img src={Logo} alt="logo" />
                    <div onClick={handleNav} className='rounded-full shadow-lg hover:bg-[#4091c9] shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'>
                        <AiOutlineClose color='#000' size={18}/>
                    </div>
                </div>

                <div className='py-4 flex flex-col justify-between h-full'>
                    <ul className='flex flex-col justify-start sm:m-5 sm:p-5 gap-2'>
                        <a
                                onClick={handleNav} 
                                href='#main' 
                                className='w-[70%] flex items-center hover:text-white rounded shadow-lg bg-[#93c4e9] hover:bg-[#1b669c] shadow-gray-800 mb-4 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'
                            >
                                    <AiOutlineHome size={24}  className=''/>
                                    <li className='pl-4 font-bold'>Home</li>
                        </a>    
                        <a
                                onClick={handleNav} 
                                href='#aboutme' 
                                className='w-[70%] flex items-center hover:text-white rounded shadow-lg bg-[#93c4e9] hover:bg-[#1b669c] shadow-gray-800 mb-4 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'
                            >
                                    <BsFillPersonFill size={24} />
                                    <li className='pl-4 font-bold'>About me</li>
                        </a>
                        <a
                                onClick={handleNav} 
                                href='#skills' 
                                className='w-[70%] flex items-center hover:text-white rounded shadow-lg bg-[#93c4e9] hover:bg-[#1b669c] shadow-gray-800 mb-4 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'
                            >
                                    <AiOutlineProject size={24} />
                                    <li className='pl-4 font-bold'>Skills</li>
                        </a>
                        <a
                                onClick={handleNav} 
                                href='#projects' 
                                className='w-[70%] flex items-center hover:text-white rounded shadow-lg bg-[#93c4e9] hover:bg-[#1b669c] shadow-gray-800 mb-4 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'
                            >
                                    <AiOutlineAppstoreAdd size={24} />
                                    <li className='pl-4 font-bold'>Projects</li>
                        </a>
                        <a
                                onClick={handleNav} 
                                href='#contact' 
                                className='w-[70%] flex items-center hover:text-white rounded shadow-lg bg-[#93c4e9] hover:bg-[#1b669c] shadow-gray-800 mb-4 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300'
                            >
                                    <AiOutlineMail size={24} />
                                    <li className='pl-4 font-bold'>Contact me</li>
                        </a>
                    </ul>

                    <div className='mb-20'>
                        <p className='tracking-widest font-semibold'>Social Media:</p>
                        <div className=' flex items-center justify-center my-4 w-full'>
                            <div className='rounded-full shadow-lg shadow-gray-600 p-3 m-4 cursor-pointer hover:scale-110 hover:bg-[#4091c9] ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-600 p-3 m-4 cursor-pointer hover:scale-110 hover:bg-[#4091c9] ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-600 p-3 m-4 cursor-pointer hover:scale-110 hover:bg-[#4091c9] ease-in duration-300'>
                                <SiGmail />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

         {/* Sidenav in md */}
         <div className='md:block md:ml-4 hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col text-[#e8f1f2] text-center'>
                        <a 
                            onMouseEnter={()=>setHovered(true)}
                            onMouseLeave={()=>setHovered(false)}
                            href="#main" 
                            className='rounded-full flex shadow-lg bg-[#4091c9] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineHome size={20} color='#e8f1f2'/>
                            <div 
                                style={{width : hovered ? ref.current?.offsetWidth || 0 : 0 }}
                                className='overflow-x-hidden transition-all duration-200 ease-out'
                            >
                                <span ref={ref} className='px-1.5'>Home</span>
                            </div>
                        </a>
                        <a 
                            onMouseEnter={()=>setHovered(true)}
                            onMouseLeave={()=>setHovered(false)}
                            href="#aboutme" 
                            className='rounded-full flex shadow-lg bg-[#4091c9] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonFill size={20} color='#e8f1f2'/>
                            <div 
                                style={{width : hovered ? ref.current?.offsetWidth || 0 : 0 }}
                                className='overflow-x-hidden transition-all duration-200 ease-out'
                            >
                                <span ref={ref} className='px-1.5'>Me</span>
                            </div>
                        </a>
                        <a 
                            onMouseEnter={()=>setHovered(true)}
                            onMouseLeave={()=>setHovered(false)}
                            href="#skills" 
                            className='rounded-full flex shadow-lg bg-[#4091c9] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineProject size={20} color='#e8f1f2'/>
                            <div 
                                style={{width : hovered ? ref.current?.offsetWidth || 0 : 0 }}
                                className='overflow-x-hidden transition-all duration-200 ease-out'
                            >
                                <span ref={ref} className='px-1.5'>Skills</span>
                            </div>
                        </a>
                        <a 
                            onMouseEnter={()=>setHovered(true)}
                            onMouseLeave={()=>setHovered(false)}
                            href="#projects" 
                            className='rounded-full flex shadow-lg bg-[#4091c9] shadow-gray-400 m-2 p-4 cursor-pointer ease-in duration-300'>
                            <AiOutlineAppstoreAdd size={20} color='#e8f1f2'/>
                            <div 
                                style={{width : hovered ? ref.current?.offsetWidth || 0 : 0 }}
                                className='overflow-x-hidden transition-all duration-200 ease-out'
                            >
                                <span ref={ref} className='px-1.5'>Projects </span>
                            </div>
                        </a>
                        <a 
                            onMouseEnter={()=>setHovered(true)}
                            onMouseLeave={()=>setHovered(false)}
                            href="#contact" 
                            className='rounded-full flex shadow-lg bg-[#4091c9] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={20} color='#e8f1f2'/>
                            <div 
                                style={{width : hovered ? ref.current?.offsetWidth || 0 : 0 }}
                                className='overflow-x-hidden transition-all duration-200 ease-out'
                            >
                                <span ref={ref} className='px-1.5'>Contact</span>
                            </div>
                        </a>
                    </div>
        </div>
    </div>
  )
}

export default Sidenav