import "./index.css";

const Contact=()=>(
    <>
    <div className="heading-container" id="contact">
        <h1 className="heading-contact left-padding">Contact</h1>
    </div>
    <div className="social-link-container">
          <div className="social-img-container">
            <a
              href="https://www.linkedin.com/in/tirunagaram-sreekanth-t28s12051998/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dboknlydw/image/upload/v1672755097/Linkedin-img_voycln.png"
                alt="Linkedin"
                className="social-img"
              />
            </a>
            <a
              href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S654965427%3A1704452230267037&theme=glif"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://png.pngitem.com/pimgs/s/118-1186475_phone-icon-circle-ltblue-blue-mail-icon-png.png"
                alt="Gmail"
                className="mail-img"
              />
            </a>
          </div>

          <div>
            <p className="contact-text">Contact Me</p>
            <p className="email-txt">sreekanth.t053@gmail.com</p>
          </div>
        </div>
        <footer className="footer-section">
          Copyright @ 2024. All rights reserved
        </footer>
    </>
)

export default Contact
