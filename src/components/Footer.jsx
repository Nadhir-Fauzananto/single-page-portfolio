const githubIcon = import.meta.env.BASE_URL + 'images/icon-github.svg'
const frontendMentorIcon = import.meta.env.BASE_URL + 'images/icon-frontend-mentor.svg'

export default function Footer() {
    return (
        <footer>
            <p>nadhir.fauzananto</p>
            <div className="footer-icons">
                <a 
                href="https://github.com/Nadhir-Fauzananto"
                target="_blank" 
                rel="noopener noreferrer">
                    <img className="github-icon icon" src={githubIcon} alt="to github profile"></img>
                </a>
                <a 
                href="https://www.frontendmentor.io/profile/Nadhir-Fauzananto"
                target="_blank" 
                rel="noopener noreferrer">
                    <img className="frontend-mentor-icon icon" src={frontendMentorIcon} alt="to frontend mentor profile"></img>
                </a>
            </div>
        </footer>
    )
}