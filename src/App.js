import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import MyProjects from "./components/MyProjects"
import Contact from "./components/Contact"


import "./App.css"

const App = () => (
  <div className="portfolio-website-container">
    <Navbar />
    <div className="scroll-content">
      <Home />
      <AboutMe />
      <Projects />
      <MyProjects />
      <Contact/>
      <div className="main-footer">
        <p className="developed-text">Developed by Sreekanth</p>
      </div>
    </div>
  </div>
)

export default App
