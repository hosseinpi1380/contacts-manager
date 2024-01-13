import * as yup from 'yup';
const yupValidation=yup.object().shape({
    title:yup.string().required('وارد کردن عنوان واجب است'),
    content:yup.string().required('وارد کردن محتوا واجب است'),
    // author:yup.string().required('وارد کردن نویسنده الزامی است.')
});
export default yupValidation;