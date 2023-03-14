import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiMongodb, DiMysql } from 'react-icons/di'
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiPrisma, SiFirebase, SiSupabase, SiMobx, SiMui } from 'react-icons/si'
import { TbBrandReactNative, TbBrandNextjs, TbBrandVercel } from 'react-icons/tb'

const Skills = () => {
  return (
    <div id='skills' className="max-w-[1040px] m-auto md:pl-20 p-4 py-6">
        <h1 className="text-4xl font-bold text-center text-[#274b91]">Skills</h1>
        <div className="my-14 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center ">
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
                <AiFillHtml5 size={50}/>
                <p className="hidden sm:block">
                    HTML
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <DiCss3 size={50}/>
                <p className="hidden sm:block">
                    CSS
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <SiTailwindcss size={50}/>
                <p className="hidden sm:block">
                    Tailwindcss
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <SiMui size={50}/>
                <p className="hidden sm:block">
                    Material UI
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <SiJavascript size={50}/>
                <p className="hidden sm:block">
                    JavaScript
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <FaReact size={50}/>
                <p className="hidden sm:block">
                    ReactJs
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <TbBrandNextjs size={50}/>
                <p className="hidden sm:block">
                    NextJS
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <FaNodeJs size={50}/>
                <p className="hidden sm:block">
                    NodeJs
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <DiMongodb size={50}/>
                <p className="hidden sm:block">
                    MongoDB
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <SiPrisma size={50}/>
                <p className="hidden sm:block">
                    Prisma
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <SiMobx size={50}/>
                <p className="hidden sm:block">
                    Mobx
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <TbBrandReactNative size={50}/>
                <p className="hidden sm:block">
                    React Native
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <SiFirebase size={50}/>
                <p className="hidden sm:block">
                    Firebase
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <SiSupabase size={50}/>
                <p className="hidden sm:block">
                    Supabase
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <DiMysql size={50}/>
                <p className="hidden sm:block">
                    MySQL
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <TbBrandVercel size={50}/>
                <p className="hidden sm:block">
                    Vercel
                </p>
            </div>
            <div className="flex items-center gap-3 font-bold text-[#274b91] hover:scale-110 hover:cursor-default hover:text-[#4091c9] ease-in duration-300">
            <FaGithub size={50}/>
                <p className="hidden sm:block">
                    Github
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skills