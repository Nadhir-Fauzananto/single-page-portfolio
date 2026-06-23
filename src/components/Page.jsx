import { useTranslation } from "react-i18next"
import ContactForm from "./ContactForm"
const photoImg = import.meta.env.BASE_URL + 'images/photo-fauzananto.png'
const digitalBankImg = import.meta.env.BASE_URL + 'images/digital-bank-frontpage.png'
const spaceTravelImg = import.meta.env.BASE_URL + 'images/space-travel-frontpage.png'
const pricingComponentImg = import.meta.env.BASE_URL + 'images/pricing-with-toggle.png'
const ticketGeneratorImg = import.meta.env.BASE_URL + 'images/ticket-generator.png'

export default function Page() {
    const {t} = useTranslation()
    function contactMeLink(e) {
        e.preventDefault()
        document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'})
    }

    return (
        <main>
            <section className="intro-section">
                <div className="intro-text-container">
                    <h1>{t('greeting')}<span>M. Nadhir Fauzananto</span>.</h1>   
                    <p>{t('intro')}</p>
                    <a className="contact-me-link link" onClick={contactMeLink} href="#">{t('contact')}</a>
                </div>
                <div className="intro-img-container">
                    <img className="photo-img" src={photoImg} alt="a photo of M. Nadhir Fauzananto"></img>
                </div>
            </section>
            <section className="expertise-section">
                <div className="expertise-container">
                    <div className="html-expertise tool-expertise">
                        <h2 className="expertise-name">HTML</h2>
                        <p className="expertise-time">{t('expertise-time')}</p>
                    </div>
                    <div className="css-expertise tool-expertise">
                        <h2 className="expertise-name">CSS</h2>
                        <p className="expertise-time">{t('expertise-time')}</p>
                    </div>
                    <div className="javascript-expertise tool-expertise">
                        <h2 className="expertise-name">JavaScript</h2>
                        <p className="expertise-time">{t('expertise-time')}</p>
                    </div>
                    <div className="react-expertise tool-expertise">
                        <h2 className="expertise-name">React</h2>
                        <p className="expertise-time">{t('expertise-time')}</p>
                    </div>
                </div>
                <div className="certificate-container">
                    <div className="certificate">
                        <h2>{t('frontend-development-certificate-name')}</h2>
                        <p>{t('frontend-development-certificate-org')}</p>
                        <p>{t('frontend-development-certificate-date')}</p>
                        <a 
                        className="certificate-link"
                        href="https://www.coursera.org/account/accomplishments/specialization/7WEQ6E59OXR1"
                        target="_blank" 
                        rel="noopener noreferrer">{t('view-certificate')}</a>
                    </div>
                    <div className="certificate">
                        <h2>{t('ui-design-certificate-name')}</h2>
                        <p>{t('ui-design-certificate-org')}</p>
                        <p>{t('ui-design-certificate-date')}</p>
                        <a 
                        className="certificate-link"
                        href="https://www.coursera.org/account/accomplishments/specialization/RHC8A99IGHZO"
                        target="_blank" 
                        rel="noopener noreferrer">{t('view-certificate')}</a>
                    </div>
                </div>
            </section>
            <section className="projects-section">
                <h2>{t('projects')}</h2>
                <div className="projects-list-container">
                    <div className="projects-container">
                        <img className="project-img" src={digitalBankImg} alt="digital bank frontpage project screenshot"></img>
                        <h3 className="project-name">{t('project-digitalbank')}</h3>
                        <p className="project-tools">HTML | CSS | JavaScript</p>
                        <div className="project-link-container">
                            <a 
                            href="https://github.com/Nadhir-Fauzananto/digital-bank-landing-page" 
                            className="showcode"
                            target="_blank" 
                            rel="noopener noreferrer">{t('show-code')}</a>
                            <a
                            href="https://nadhir-fauzananto.github.io/digital-bank-landing-page/" 
                            className="livedemo"
                            target="_blank" 
                            rel="noopener noreferrer">{t('live-demo')}</a>
                        </div>
                    </div>
                    <div className="projects-container">
                        <img className="project-img" src={spaceTravelImg} alt="space travel multipage project screenshot"></img>
                        <h3 className="project-name">{t('project-space-travel')}</h3>
                        <p className="project-tools">HTML | CSS | React</p>
                        <div className="project-link-container">
                        <a 
                            href="https://github.com/Nadhir-Fauzananto/space-tourism-pages" 
                            className="showcode"
                            target="_blank" 
                            rel="noopener noreferrer">{t('show-code')}</a>
                            <a
                            href="https://nadhir-fauzananto.github.io/space-tourism-pages/" 
                            className="livedemo"
                            target="_blank" 
                            rel="noopener noreferrer">{t('live-demo')}</a>
                        </div>
                    </div>
                    <div className="projects-container">
                        <img className="project-img" src={pricingComponentImg} alt="pricing component project screenshot"></img>
                        <h3 className="project-name">{t('project-pricing')}</h3>
                        <p className="project-tools">HTML | CSS | JavaScript</p>
                        <div className="project-link-container">
                            <a                    
                            href="https://github.com/Nadhir-Fauzananto/pricing-component-with-toggle" 
                            className="showcode"
                            target="_blank" 
                            rel="noopener noreferrer">{t('show-code')}</a>
                            <a
                            href="https://nadhir-fauzananto.github.io/pricing-component-with-toggle/" 
                            className="livedemo"
                            target="_blank" 
                            rel="noopener noreferrer">{t('live-demo')}</a>
                        </div>
                    </div>
                    <div className="projects-container">
                        <img className="project-img" src={ticketGeneratorImg} alt="ticket generator project screenshot"></img>
                        <h3 className="project-name">{t('project-ticket')}</h3>
                        <p className="project-tools">HTML | CSS | React</p>
                        <div className="project-link-container">
                            <a 
                            href="https://github.com/Nadhir-Fauzananto/conference-ticket-generator" 
                            className="showcode"
                            target="_blank" 
                            rel="noopener noreferrer">{t('show-code')}</a>
                            <a 
                            href="https://nadhir-fauzananto.github.io/conference-ticket-generator/" 
                            className="livedemo"
                            target="_blank" 
                            rel="noopener noreferrer">{t('live-demo')}</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section" id="contact-section">
                <div className="contact-text-container">
                    <h2>{t('contact')}</h2>
                    <p>{t('outro')}</p>
                </div>
                <ContactForm />
            </section>
        </main>

    )
}