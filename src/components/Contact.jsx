import { SiGmail } from 'react-icons/si'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>

        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact me</h1>

        <div className='flex gap-4 justify-center m-4'>
            <div className='text-[#274b91] hover:text-[#4091c9] ease-in duration-200 m-4'>
                <a href="mailto:salinasmateo@outlook.com">
                    <SiGmail className='cursor-pointer text-[#274b91] hover:text-[#4091c9] hover:scale-125 ease-in duration-300'  size={40}/>
                </a>
            </div>

            <div className='text-[#274b91] hover:text-[#4091c9] ease-in duration-200 m-4'>
                <a href="https://www.linkedin.com/in/mateosalinas/" target={'_blank'}>
                    <FaLinkedinIn className='cursor-pointer text-[#274b91] hover:text-[#4091c9] hover:scale-125 ease-in duration-300'  size={40}/>
                </a>
            </div>

            <div className='text-[#274b91] hover:text-[#4091c9] ease-in duration-200 m-4'>
                <a href="https://github.com/matuumdq" target={'_blank'}>
                    <FaGithub className='cursor-pointer text-[#274b91] hover:text-[#4091c9] hover:scale-125 ease-in duration-300'  size={40}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact