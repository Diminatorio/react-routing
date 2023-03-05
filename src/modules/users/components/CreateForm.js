import {useState} from "react";
import {addUser} from "../../../store/actions/userActions";
import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import userCreationSchema from "../validation/userCreationSchema";

export default function CreateForm() {
    const dispatch = useDispatch()

    const [data] = useState({name: '', username: '', email: ''})

    const onSubmit = (values, {resetForm}) => {
        const personData = {...values, id: Date.now()}
        dispatch(addUser(personData))
        resetForm({name: '', username: '', email: ''})
    }

    return (
        <Formik initialValues={data} onSubmit={onSubmit} validationSchema={userCreationSchema}>
            {(formik) => {
                return (
                    <Form>
                        <Field name='name' placeholder='Type name'/>
                        <ErrorMessage name='name'/>
                        <br/>
                        <Field name='username' placeholder='Type username'/>
                        <ErrorMessage name='username'/>
                        <br/>
                        <Field name='email' placeholder='Type email'/>
                        <ErrorMessage name='email'/>
                        <br/>
                        <button>Create</button>
                    </Form>
                )
            }}
        </Formik>
    )
}