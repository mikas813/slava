import {useState, useEffect} from 'react'
import emailjs from 'emailjs-com/source/index'

const useForm = (callback, validate) => {
  const [values, setValues] = useState( {email: '', message: ''} )
  const [errors, setErrors] = useState( {} )
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = event => {
    const {name, value} = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = event => {
    console.log( 'Submitted successfully' )

    event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  (function() {
    emailjs.init("user_6kF8PuUV9DnxMYrXMZFF8");
  })();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }

  }, [errors])




  return {
    handleChange,
    handleSubmit,
    setValues,
    values,
    errors
  }
}

export default useForm