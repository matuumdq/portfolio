import { TypeAnimation } from 'react-type-animation'
import perfilImg from '../assets/perfil.png'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const Main = () => {
  return (
    <div id='main' className=''>
        <div className='w-full h-screen top-0 left-0 '>
            <div className='max-w-[1024px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start'>
                <div className='flex flex-col gap-20 lg:flex-row-reverse items-center md:ml-24 '>
                    <img src={perfilImg} alt="/" className='shadow rounded-full w-[400px] h-auto align-middle border-none mt-10 md:mt-0'/>
                    
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='sm:text-5xl text-4xl text-[#4091c9]'>I am  <span className='font-bold text-[#274b91]'>Mateo Salinas</span></h1>
                        <div>
                            <article className='sm:text-3xl text-2xl pt-5'>
                            <TypeAnimation
                                sequence={[
                                    "Developer",
                                    2000, 
                                    "Frontend Developer"
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={0}
                                style={{ fontSize: '1em', paddingLeft: '6px', color: '#4091c9', fontWeight: 'bold'}}
                                />
                            </article>
                        </div>
                        <div className='mt-6 mx-auto pt-6 max-w-[250px] w-full lg:max-w-[350px] '>
                            <div className='flex justify-between '>
                                <a href="https://github.com/matuumdq" target={'_blank'}>
                                    <FaGithub className='cursor-pointer text-[#4091c9] hover:text-[#1b2845] hover:scale-125 ease-in duration-300'  size={24}/>
                                </a>
                                <a href="https://www.linkedin.com/in/mateosalinas/" target={'_blank'}>
                                    <FaLinkedinIn className='cursor-pointer text-[#4091c9] hover:text-[#1b2845] hover:scale-125 ease-in duration-300'  size={24}/>
                                </a>
                                    <a 
                                        href="https://drive.google.com/file/d/1Rd_SNlfpsM2YVkv6tMYLTbk1wBDOhiGH/view?usp=share_link" 
                                        target={'_blank'} 
                                        className='flex gap-2 cursor-pointer text-[#4091c9] hover:text-[#1b2845] hover:scale-125 ease-in duration-300' >
                                    <AiOutlineCloudDownload  size={24}/>
                                    <p className='font-bold'>CV</p>
                                    </a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main