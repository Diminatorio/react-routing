import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required()
        .max(20, 'max length 20')
        .min(3, 'min length 3')
        .label('Name'),
    username: yup.string()
        .required()
        .max(20, 'max length 20')
        .min(3, 'min length 3')
        .label('Username'),
    email: yup.string()
        .email('This should be email')
        .required()
        .label('Email')
})