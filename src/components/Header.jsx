import { useState } from 'react'
import { useTranslation } from 'react-i18next'
const githubIcon = import.meta.env.BASE_URL + 'images/icon-github.svg'
const frontendMentorIcon = import.meta.env.BASE_URL + 'images/icon-frontend-mentor.svg'
const languageIcon = import.meta.env.BASE_URL + 'images/language-icon.svg'
const englishFlag = import.meta.env.BASE_URL + 'images/english-flag.svg'
const germanFlag = import.meta.env.BASE_URL + 'images/german-flag.svg'
const indonesiaFlag = import.meta.env.BASE_URL + 'images/indonesia-flag.svg'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const {i18n} = useTranslation()
    return (
        <header>
            <p>nadhir.fauzananto</p>
            <div className="header-icons">
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
                <div className="language-selector-container">
                    <button className="language-selector-btn" 
                    onClick={() => setIsOpen(!isOpen)}
                    onKeyDown={(e) => { 
                        if (e.key === 'Escape') setIsOpen(false)
                        }}>
                        <img className="language-selector-icon" src={languageIcon} alt="language selector icon"></img>
                        <span className="sr-only">select language</span>
                    </button>
                    {isOpen && (<ul className="language-flag-container">
                        <li>
                            <button onClick={() => { i18n.changeLanguage('en'); setIsOpen(false) }}>
                                <img className="english-language flag" src={englishFlag} alt="select english language"></img>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { i18n.changeLanguage('de'); setIsOpen(false) }}>
                                <img className="german-language flag" src={germanFlag} alt="select german language"></img>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { i18n.changeLanguage('id'); setIsOpen(false) }}>
                                <img className="indonesian-language flag" src={indonesiaFlag} alt="select indonesian language"></img>
                            </button>
                        </li>
                    </ul>
                )}
                </div>
            </div>
        </header>
    )
}