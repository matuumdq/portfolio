import { RxRocket } from 'react-icons/rx'
import { DiMongodb, DiMysql } from 'react-icons/di'
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiPrisma, SiFirebase, SiSupabase, SiMobx, SiMui } from 'react-icons/si'
import { TbBrandReactNative, TbBrandNextjs, TbBrandVercel } from 'react-icons/tb'

const ProjectsItem = ({img, title, deploy, github}) => {
  return (
    <div className="relative flex items-center justify-center group cursor-default mb-5 sm:ml-5">
        <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 ease-in duration-300 h-auto w-auto shadow-lg shadow-gray-800"/>
        <div className="hidden h-auto w-auto p-5 group-hover:block rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-[#001b5e] text-center ">
                {title}
            </h3>
            <h4 className="pb-4 pt-2 text-[#001b5e] text-center">Used technology:</h4>
                    {title === 'Quiosco app' ?
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <TbBrandNextjs size={30} />
                            <SiTailwindcss size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                            <SiPrisma size={30} />
                            <DiMysql size={30} />
                            <FaGithub size={30} />
                        </div> 
                    : title === 'ToDo app' ?
                    <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                        <FaReact size={30} />
                        <SiTailwindcss size={30} />
                        <SiFirebase size={30} />
                        <TbBrandVercel size={30} />
                        <FaGithub size={30} />
                    </div> 
                    : title === 'Youtube Clone' ?
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <FaReact size={30} />
                            <SiMui size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div> 
                    : title === 'Wordle app' ?
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <FaReact size={30} />
                            <SiTailwindcss size={30} />
                            <SiMobx size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div> 
                    : title === 'Linktree app' ?
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <FaReact size={30} />
                            <SiTailwindcss size={30} />
                            <SiSupabase size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div> 
                        : title === 'Clima app' ? 
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <TbBrandNextjs size={30} />
                            <SiTailwindcss size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div> 

                        : title === 'Counter app' ?
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <FaReact size={30} />
                            <SiTailwindcss size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div>

                        : title === 'Cripto app' ?
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <FaReact size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div>
                        : title === 'Cripto app' ?
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <FaReact size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div>
                        : title === 'CRM app' ?
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <SiTailwindcss size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div>
                        : title === 'Planificador app' &&
                        <div className='flex gap-3 w-full flex-wrap justify-center mb-5 text-[#001b5e] hover:scale-110 ease-in duration-200'>
                            <FaReact size={30} />
                            <TbBrandVercel size={30} />
                            <FaGithub size={30} />
                        </div>
                        
                    }
            <div className="flex gap-4 justify-center">
                <a href={deploy} target={'_blank'}>
                    <div className='flex gap-2 content-center items-center p-3 mb-2 rounded-2xl bg-[#4091c9] text-white hover:scale-105 ease-in duration-200 font-bold cursor-pointer text-lg hover:bg-[#001b5e]'>
                    <RxRocket />
                        <p className="">Deploy</p>
                    </div>
                </a>
                <a href={github} target={'_blank'}>
                    <div className='flex gap-2 content-center items-center p-3 mb-2 rounded-2xl bg-[#4091c9] text-white hover:scale-105 ease-in duration-200 font-bold cursor-pointer text-lg hover:bg-[#001b5e]'>
                        <FaGithub />
                        <p className="">GitHub</p>
                    </div>
                </a>
            </div>

        </div>
    </div>
  )
}

export default ProjectsItem