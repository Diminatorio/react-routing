import useCustomNavigate from "../../common/hooks/useCustomNavigate";
import {useNavigate, useParams} from "react-router-dom";
import useEditUser from "../hooks/useEditUser";
import {Field, Form, Formik} from "formik";
import userCreationSchema from "../validation/userCreationSchema";

export default function UserEditPage() {
    const history = useNavigate();

    const {id} = useParams();

    const {user, handleSubmit, onDeleteUser} = useEditUser(id);

    const navigate = useCustomNavigate()
    const onBackButtonClick = () => {
        navigate.back();
    }

    const buttonEditFunction = (values) => {
        handleSubmit(values);
        history('/users/')
    }

    const buttonDeleteFunction = () => {
        onDeleteUser();
        history('/users/')
    }

    return (
        <>
            <h2>User Edit Page</h2>
            <Formik initialValues={user} onSubmit={buttonEditFunction} validationSchema={userCreationSchema}>
                {() => {
                    return (
                        <Form>
                            <Field name='name' placeholder='Type name'/>
                            <Field name='username' placeholder='Type username'/>
                            <Field name='email' placeholder='Type email'/>
                            <button>Edit</button>
                        </Form>
                    )
                }}
            </Formik>

            <button onClick={onBackButtonClick}>Go Back</button>
            <button onClick={buttonDeleteFunction}>DELETE USER</button>
        </>
    )
}
