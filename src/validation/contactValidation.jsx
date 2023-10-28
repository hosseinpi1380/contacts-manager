import * as Yup from 'yup';
const contactSchema = Yup.object().shape({
    name: Yup.string().required('Enter name is required'),
    email: Yup.string().email('Enter email is required').required(),
    password:Yup.string().required('password is required'),
});
export default contactSchema;