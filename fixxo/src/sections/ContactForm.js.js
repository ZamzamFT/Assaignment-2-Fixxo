import React, { useState } from 'react'
import { submitData, validate } from './FormValidation'

const NewContactForm = () => {
    window.top.document.title = 'Contact | Fixxo.'

    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [comments, setComments] = useState ('')
    const [errors, setErrors] = useState ('')
    const [submitted, setSubmitted] = useState (false)
    const [failedSubmit, setFaildSubmit] = useState (false)

    const handleChange = (e) => {
        const {id, value} = e.target

        switch(id) {
            case 'name':
                setName(value)
                break

            case 'email': 
                 setEmail(value)
                 break
            
            case 'comments':
                setComments(value)
                 break
        }

        setErrors({...errors, [id]: validate(e)})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFaildSubmit(false)
        setSubmitted(false)

        setErrors(validate(e, {name, email, comments}))

        if (errors.name === null && errors.email === null && errors.comments === null) {

            let json = JSON.stringify({ name, email, comments})

            setName ('')
            setComments ('')
            setEmail ('')
            setErrors ('')

            if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json,)) {
                setSubmitted(true)
                setFaildSubmit(false)
            } else {
                setSubmitted(false)
                setFaildSubmit(true)
            }
        } else {
            setSubmitted(false)
        }
    }


  return (
    <section className='contact-form'> 
        <div className='container'>

                {
                    submitted ? (
                        <div className='alert alert-success text-center' role='alert'>
                                    <h3>Thank you for your comment!</h3>
                                    <p>We Will Reach out to you as soon as possible.</p>
                        </div> ) : (<></>)
                }

                {
                    failedSubmit ? (
                        <div className='alert alert-danger text-center' role="alert"> 
                        <h3>Somthing Went Wrong!</h3>
                        <p>We couldnt submit your comment right now.</p>
                        </div>) : (<></>)
                }

                <h2>Come in Contact with us</h2>
                <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <input id='name' className={(errors.name ? 'error': '')}   type='text' value={name} onChange={handleChange}  placeholder='Your Name' />
                            <div className='errorMessage'>{errors.name}</div>

                        </div>
                        <div>
                            <input id='email'  type='email' placeholder='Your Mail' className={(errors.email ? 'error': '')}   value={email} onChange={handleChange}/>
                            <div className='errorMessage'>{errors.email}</div>

                        </div>
                        <div className='textarea'>
                            <textarea id="comments"  placeholder='Comments' className={(errors.comments ? 'error': '')}  value={comments} style={(errors.comments ? {border: '1px solid #ff7373'}: {} )} onChange={handleChange}></textarea>
                            <div className='errorMessage'>{errors.comments}</div>

                        </div>
                        <div className='form-btn'>
                            <button type='submit' className='btn-theme'>Post Comments</button>
                        </div>
                   </form>
        </div>
    </section>
  )
}

export default NewContactForm