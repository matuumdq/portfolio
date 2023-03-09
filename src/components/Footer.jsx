import {AiOutlineCopyright} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex gap-3 w-full max-h-[50px] justify-center items-center text-center text-[#274b91] font-semibold font-mono bg-[#4091c9] bg-opacity-50 cursor-default m-auto md:pl-20 p-4 py-6'>
        <p>Created by Mateo Salinas</p>
        <AiOutlineCopyright />
        {new Date().getFullYear()}
    </div>
  )
}

export default Footer