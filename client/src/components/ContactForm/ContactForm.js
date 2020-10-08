import React from 'react'
import './ContactForm.scss'
import emailjs from 'emailjs-com'
import useForm from '../../hooks/useForm'
import validate from '../../hooks/validateForm'

export const ContactForm = () => {

  const {handleSubmit, handleChange, values, setValues, errors} = useForm( submit, validate )

  function submit() {
    console.log( values )
    emailjs.send( 'service_smiip2h', 'template_sculhuq', values)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });

    if (errors) {
      setValues( {
        ...values,
        email: '',
        message: ''
      } )
    }
    console.log( 'Submitted successfully' )
  }

  return (
    <div className="contact_form">
      <form onSubmit={handleSubmit}>

        <div className="contact_form-email">
          <label htmlFor="email">Enter your email</label>

          {
            errors.email && <p className="error">{errors.email}</p>
          }

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}/>
        </div>

        <div className="contact_form-message">
          <label htmlFor="message">Enter message</label>

        {errors.message && <p className="error">{errors.message}</p>}

          <textarea
            name="message"
            id="message"
            cols="25"
            rows="10"
            value={values.message}
            onChange={handleChange}/>
        </div>

        <button type="submit" className="contact_form-button">Send</button>

      </form>
    </div>
  )
}