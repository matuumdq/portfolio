import ProjectsItem from "./ProjectsItem"
import charactersImg from '../assets/characters.png'
import criptocotImg from '../assets/cripto.png'
import crmImg from '../assets/crm.png'
import guitarImg from '../assets/guitar.png'
import linktreeImg from '../assets/linkt.png'
import planificadorImg from '../assets/planif.png'
import quioscoImg from '../assets/cofffe.png'
import todoImg from '../assets/todo.png'
import youtubeImg from '../assets/youtube.png'
import weatherImg from '../assets/weather.png'
import wordleImg from '../assets/wordle.png'

const Projects = () => {

  return (
    <div id='projects' className="max-w-[1080px] m-auto md:pl-20 p-4 py-16">
        <div className="flex flex-col gap-y-4 mb-10">
            <h3 className="text-4xl font-bold text-center text-[#001b5e] mb-5">Projects</h3>
                <p className="max-w-[400px] m-auto font-medium text-[#001b5e]">
                    I had the opportunity to work on a variety of projects, ranging from small websites to complex web applications.
                </p>
                <p className="max-w-[400px] m-auto font-medium text-[#001b5e]">
                    I take pride in creating projects that are visually appealing, responsive, and easy to use. 
                    I always strive to use the latest web technologies and best practices to create maintainable and scalable code.
                </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProjectsItem img={quioscoImg} title='Quiosco app' deploy='https://quiosco-production.up.railway.app/' github='https://github.com/matuumdq/quiosco'/>
            <ProjectsItem img={todoImg} title='ToDo app' deploy='https://todoauth-ashen.vercel.app/' github='https://github.com/matuumdq/autenticationFirebase'/>
            <ProjectsItem img={youtubeImg} title='Youtube Clone' deploy='https://youtubeclone-iota.vercel.app/' github='https://github.com/matuumdq/youtubeclone'/>
            <ProjectsItem img={wordleImg} title='Wordle app' deploy='https://wordle-game-nu.vercel.app' github='https://github.com/matuumdq/wordleGame'/>
            <ProjectsItem img={linktreeImg} title='Linktree app' deploy='https://linktreeclone-blue.vercel.app' github='https://github.com/matuumdq/linktreeclone'/>
            <ProjectsItem img={weatherImg} title='Clima app'  deploy='https://weather-zeta-azure.vercel.app/' github='https://github.com/matuumdq/weather'/>
            <ProjectsItem img={charactersImg} title='Counter app' deploy='https://charactercounter-delta.vercel.app' github='https://github.com/matuumdq/charactercounter'/>
            <ProjectsItem img={criptocotImg} title='Cripto app' deploy='https://cripto-react-omega.vercel.app' github='https://github.com/matuumdq/criptoReact'/>
            <ProjectsItem img={guitarImg} title='Guitar app' deploy='https://guitar-next-nine.vercel.app/' github='https://github.com/matuumdq/guitarNext-'/>
            <ProjectsItem img={planificadorImg} title='Planificador app' deploy='https://quoter-seven.vercel.app/' github='https://github.com/matuumdq/quoter'/>
        </div>
    </div>
  )
}

export default Projects