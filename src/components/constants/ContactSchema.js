import * as yup from 'yup';
export const contactShecema = yup.object().shape({
    fullname: yup.string().required('full name is required'),
    email: yup.string().email('email is not valid').required('email is required'),
    subject: yup.string().required('subject is required'),
    message: yup.string().required('message is required'),
})