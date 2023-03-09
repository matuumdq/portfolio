import pcguy from '../assets/R.png'

const Aboutme = () => {
  return (
    <div id='aboutme' className='lg:w-[1000px] sm:m-auto '>
        <h3 className="text-4xl font-bold text-center text-[#001b5e] my-16">About Me</h3>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 p-5 rounded-md mb-[150px] sm:ml-20 sm:mr-10'>
            <div className='w-[300px] md:mr-10 flex flex-col m-auto'>
                <p className='mb-5 font-thin'>I specialize in using React and Tailwind to build modern, simple and responsive user interfaces.</p>
                <p className='mb-5 font-thin'>I am passionate about creating intuitive and engaging user experiences.</p>
                <p className='mb-5 font-thin'>I am always looking to expand my knowledge and stay up-to-date with the latest web technologies and trends.</p>
            </div>
            <img src={pcguy} width='300px' height='auto' className='rounded-full w-[400px]'/>
        </div>
    </div>
  )
}

export default Aboutme