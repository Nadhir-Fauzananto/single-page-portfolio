import React from "react"
import { useTranslation } from "react-i18next"

export default function ContactForm() {
    const {t} = useTranslation()    

    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        message: ''
    })

    const [error, setError] = React.useState({})
    const [submitStatus, setSubmitStatus] = React.useState('')
    const [isFormValid, setIsFormValid] = React.useState(false)

    function validateForm() {
        const errors={}

        if (formData.fullName.trim().length < 1) {
            errors.fullName = t('name-validation-error')
        }
        if (formData.email.trim().length < 1 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = t('email-validation-error')
        }
        if (formData.message.trim().length < 1) {
            errors.message = t('message-validation-error')
        }

        return errors
    }

    function handleInputChange(e) {
        const {name, value} = e.target
        
        setFormData(prevData => ({...prevData, [name]: value}))
        
        if (error[name]) {
            setError(prevError => ({...prevError, [name]: ''}))
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const error = validateForm()

        if (Object.keys(error).length > 0 ) {
            setError(error)
            setIsFormValid(false)
            setSubmitStatus('error')
        } else {
            const data = {
                fullName: formData.fullName,
                email: formData.email,
                message: formData.message
            }
            setIsFormValid(true)
            setSubmitStatus('success')
            setFormData({
                fullName: '',
                email: '',
                message: ''
            })
        }
    }

    return (
        <div className="contact-form-container">
            <div className="contact-message-container">
                {submitStatus ==='success' ? <p className="message-sent-success">{t('message-sent')}</p> : 
                submitStatus === 'error' ? <p>{t('message-error')}</p> : null}
            </div>
            {!isFormValid ? 
            (<form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input 
                    className="input"
                    type="text" 
                    placeholder={t('placeholder-name')} 
                    id="name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    aria-describedby="name-error-message"></input>
                    {error.fullName ? <p className="error-message" id="name-error-message">{error.fullName}</p> : null}
                </div>

                <div className="input-container">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                    className="input"
                    type="email" 
                    placeholder={t('placeholder-email')} 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-describedby="email-error-message"></input>
                    {error.email ? <p className="error-message" id="email-error-message">{error.email}</p> : null}
                </div>

                <div className="input-container">
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea 
                    className="text-input"
                    placeholder={t('placeholder-message')} 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-describedby="message-error-message"></textarea>
                    {error.message ? <p className="error-message" id="message-error-message">{error.message}</p> : null}
                </div>

                <div className="submit-btn-container">
                    <button
                    type="submit"
                    className="submit-btn"
                    >{t('submit-button')}</button>
                </div>

            </form>) : null }
        </div>
        
    )
}