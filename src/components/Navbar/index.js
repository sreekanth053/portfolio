import { Component } from "react"
import "./index.css"

class Navbar extends Component {
  state = { selectedName: "home" }

  elementClicked = (name) => {
    // const {selectedName} = this.state
    this.setState({ selectedName: name })
  }

  render() {
    const { selectedName } = this.state

    return (
      <nav className="header-container">
        <h1 className="name">T Sreekanth</h1>
        <div className="header-list-items">
          {/* <div>
            <a
              href="#home"
              className={
                selectedName === "home" ? "list-item active" : "list-item"
              }
              onClick={() => this.elementClicked("home")}
            >
              Home
            </a>
            <div
              className={selectedName === "home" ? "under-line" : "no-display"}
            ></div>
          </div> */}

          <div>
            <a
              href="#aboutMe"
              className={
                selectedName === "aboutMe" ? "list-item active" : "list-item"
              }
              onClick={() => this.elementClicked("aboutMe")}
            >
              About
            </a>
            <div
              className={
                selectedName === "aboutMe" ? "under-line" : "no-display"
              }
            ></div>
          
          </div>

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


          <div>
            <a
              href="#contact"
              className={
                selectedName === "contact" ? "list-item active" : "list-item"
              }
              onClick={() => this.elementClicked("contact")}
            >
              Contact
            </a>
            <div
              className={selectedName === "contact" ? "under-line" : "no-display"}
            ></div>
          </div> 
        </div>
      </nav>
    )
  }
}

export default Navbar
