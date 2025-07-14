import Header from "./components/Header"
import AboutMe from "./components/AboutMe"

function App() {

  return (
    <div className="bg-slate-100 px-3 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header />
        <AboutMe />
      </div>
    </div>
  )
}

export default App
