import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Projects from "./components/project/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Hobbies from "./components/Hobbies"
import Extracurricular from "./components/Extracurricular"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="bg-slate-100 px-3 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <Extracurricular />
        <Contact />
      </div>
    </div>
  )
}

export default App
