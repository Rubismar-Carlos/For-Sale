import "./Footer.css"

// Icons
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {

    const name = "Rubismar Carlos "

    const urlGit = "https://github.com/Rubismar-Carlos"

    const urlLinkedin = "https://www.linkedin.com/in/rubismar-carlos-09a912246/"

  return (
    <footer id="footer">
        <div id="icons">
            <a href={urlLinkedin} target={"_blank"} rel="noreferrer">< BsLinkedin /></a>
            <a href={urlGit} target={"_blank"} rel="noreferrer">< BsGithub /></a>
        </div>
        <p>Desenvolvido por {name}</p>
    </footer>
  )
}

export default Footer