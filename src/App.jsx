import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Skills from './components/Skills'



function App() {

  return (
    <div>
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
        <Sidenav />
        <Main/>
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
