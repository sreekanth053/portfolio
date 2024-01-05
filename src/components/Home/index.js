// import { BiDownload } from "react-icons/bi"
import { Component } from "react"
import "./index.css"

class Home extends Component {
  // const downloadClick = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1P5o-mCdKAVcrYY9wClQ8Zwjk8G7HH8j9/view?usp=share_link",
  //     "_blank"
  //   )
  // }
  state = { selectedName: "home" }

  elementClicked = (name) => {
    // const {selectedName} = this.state
    this.setState({ selectedName: name })
  }

  render(){
    const { selectedName } = this.state
  return(
    <div className="home-container" id="home">
      <h3 class="designation">Full Stack Developer</h3>
      <h1 className="home">Hello, my name is <span className="home-name"></span>
        <span className="span-name">Sreekanth Tirunagaram</span>
      </h1>
      <p className="home-job-role">An aspiring MERN stack developer. Core strengths include Coding, JavaScript, Python, ReactJs, etc. 
      I'm a quick learner and I have very good problem-solving skills.</p>
      <button className="projects-button">
      <div>
            <a
              href="#myProjects"
              className={
                selectedName === "myProjects" ? "list-item active" : "list-item"
              }
              onClick={() => this.elementClicked("myProjects")}
            >
              Projects
            </a>
            <div
              className={
                selectedName === "myProjects" ? "under-line" : "no-display"
              }
            ></div>
          </div>
      </button>
        {/* <button className="download-btn" onClick={downloadClick}>
          Download CV
          <BiDownload className="download-icon" size="17" />
        </button> */}
    </div>
  )
      }
}

export default Home
