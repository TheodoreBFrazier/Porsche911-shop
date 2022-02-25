import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'
//Install EmailJS dependency//
//import emailjs, { init } from 'emailjs-com'
//init('user_id')


const Contact = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("");

    //Error handling
    const [errorMessages, setErrorMessages] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    // ---- Errors 

    let errors = []

    const formValid = () => {

        //initialize errorMessage as an empty array 
        setErrorMessages([])

        //Check if name, massage and form is valid
        //if name doesn't equal string
        const isNameValid = (name !== "");
        const isMessageValid = (message !== "");

        if (!isNameValid) {
            //If name not valid push Name not valid into the array
            errors.push("Name not valid.")
        }

        if (!isMessageValid) {
            errors.push("Message is not valid")
        }

        //If the length of the errors array is greater than one (meaning there is an error)
        if (errors.length > 0) {
            //Show errors is true because there is an error
            setShowErrors({ showErrors: true });
            //set error messages to the errors in the array we accumalted and show below
            setErrorMessages(errors)
        }
        else {
            setShowErrors({ showErrors: false });
            alert("Your Message has been sent we will contact you shortly!")
        }
    }


    return (

        <div className='contact-form'>
            <h1>Inquire</h1>

            {/* <TextField
                label="note-title"
                /> */}

            <br />
            <br />
            <form>
                <TextField
                    label="Your Name"
                    type="text"
                    onChange={event => setName({ name: event.target.value })}
                />
                <br />
                <br />
                <TextField
                    label="Your Message"
                    type="text"
                    onChange={event => setMessage({ message: event.target.value })}
                />
                <br />
                <br />
                {showErrors ? errorMessages.map((item, index) => {
                    return <ul key={index}>{item}</ul>;
                }) : null
                }

                < Button color="primary" type="button" onClick={formValid}> Submit!!</Button>
                {/* <br />
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
                <span className={emailSent ? 'visible' : null}>Thank you for reaching out!!!</span> */}
            </form>
        </div >
    )
}

export default Contact