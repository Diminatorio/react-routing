import {useState} from "react";
import {addUser} from "../../../store/actions/userActions";
import {useDispatch} from "react-redux";

export default function CreateForm() {
    const dispatch = useDispatch()

    const [data, setData] = useState({name: '', username: '', email: ''})

    const handleInputChange = event => {
        const {name, value} = event.target
        setData(
            {...data, [name]:value}
        )
    };

    const submitCreation = () => {
        const isEmpty = Object.values(data).some(el => el === '');
        if (!isEmpty) {
            if (data.email.includes('@') && data.email.includes('.')) {
                const personData = {...data, id: Date.now()}
                dispatch(addUser(personData))
                setData({name: '', username: '', email: ''})
            }
        }
    }

    return (
        <>
            <input type="text"
                   name='name'
                   value={data.name}
                   placeholder='Name'
                   onChange={handleInputChange}/>
            <input type="text"
                   name='username'
                   value={data.username}
                   placeholder='username'
                   onChange={handleInputChange}/>
            <input type="text"
                   name='email'
                   value={data.email}
                   placeholder='email'
                   onChange={handleInputChange}/>
            <button onClick={submitCreation}>Create</button>
        </>
    )
}