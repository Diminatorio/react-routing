import {useEffect, useState} from "react";
import {getUserDetail, putUser} from "../services/usersService";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, editUser} from "../../../store/actions/userActions";

export default function useEditUser (id) {
    const {users} = useSelector(state => ({
        users:state.users
    }))
    const user = users.find(user => String(user.id) === id)

    const dispatch = useDispatch()

    const [data, setData] = useState(user)
    const handleInputChange = event => {
        const {name, value} = event.target
        setData(
            {...data, [name]:value}
        )
    };

    const handleSubmit = () => {
        dispatch(editUser(data))
    };

    const onDeleteUser = () => {
        dispatch(deleteUser(id))
    }

    return{data, handleInputChange, handleSubmit, onDeleteUser}
}