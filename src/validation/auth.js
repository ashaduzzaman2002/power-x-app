import * as Yup from 'yup';

export const signinSchema = Yup.object({
    phone: Yup.number().required('Please enter your phone number!'),
    password: Yup.string().required('Please enter your password!'),
})
