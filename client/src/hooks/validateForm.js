export default function validate(values) {
    let errors = {};
    //email
    //the string to be more than 0 chars
    //the string to be an email
    if (!values.email) {
        errors.email = 'Email address is required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid!';
    }
    //password
    //the string to be more than 0 chars
    //the string to be more than 10 chars
    if (!values.message) {
        errors.message = 'Message is required!';
    } else if (values.message.length < 10) {
        errors.message = 'Message needs to be more than 10 chars!';
    }
    return errors;
}
