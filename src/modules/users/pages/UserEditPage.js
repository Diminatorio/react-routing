import useCustomNavigate from "../../common/hooks/useCustomNavigate";
import {useHistory, useParams} from "react-router-dom";
import useEditUser from "../hooks/useEditUser";

export default function UserEditPage() {
    const history = useHistory();

    const {id} = useParams();

    const {data, handleInputChange, handleSubmit, onDeleteUser} = useEditUser(id);

    const navigate = useCustomNavigate()
    const onBackButtonClick = () => {
        navigate.back();
    }

    const buttonEditFunction = () => {
        handleSubmit();
        history.push('/users/')
    }

    const buttonDeleteFunction = () => {
        onDeleteUser();
        history.push('/users/')
    }

    return (
        <>
            <h2>User Edit Page</h2>
            <input type="text"
                   name='name'
                   value={data.name || "" }
                   className='place-input'
                   placeholder="Type here your name..."
                   onChange={handleInputChange}
            />
            <input type="text"
                   name='username'
                   value={data.username || "" }
                   className='place-input'
                   placeholder="Type here your username..."
                   onChange={handleInputChange}
            />
            <input type="text"
                   name="email"
                   value={data.email || "" }
                   className='place-input'
                   placeholder="Type here your email..."
                   onChange={handleInputChange}
            />
            <button onClick={buttonEditFunction}>Edit</button>
            <button onClick={onBackButtonClick}>Go Back</button>
            <button onClick={buttonDeleteFunction}>DELETE USER</button>
        </>
    )
}
