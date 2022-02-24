import React, { useState } from 'react'
//Install EmailJS dependency

import emailjs, { init } from 'emailjs-com'
init('user_id')

const Contact = () => {

    //Setting state for the form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {

        if (name && email & message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message,
            }


            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error))

            setEmail('');
            setEmail('')
            setMessage('')
            setEmailSent(true)
        } else {
            alert('Please fill out all fields')
        }
    }

    return (
        <div className='contact-form'>
            <form>
                <label> Your Name </label>
                <br />
                <br />
                <input
                    type="text"
                    placeholder="your name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <br />
                <br />
                <label> Your Email </label>
                <br />
                <br />
                <input
                    type="email"
                    placeholder="your e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <br />
                <br />
                <label> Your Message </label>
                <br />
                <br />
                <textarea
                    placeholder='Your message'
                    value={message}
                    onChange={event => setMessage(event.target.value)}>
                </textarea>
                <br />
                <br />
                <button onClick={submit}>Inquire</button>
                <br />
                <span className={emailSent ? 'visible' : null}>Thank you for reaching out!!!</span>
            </form>
        </div>
    )
}

export default Contact