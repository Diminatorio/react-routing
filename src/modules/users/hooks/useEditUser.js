import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, editUser} from "../../../store/actions/userActions";

export default function useEditUser (id) {
    const {users} = useSelector(state => ({
        users:state.users
    }))
    const user = users.find(user => String(user.id) === id)
    const dispatch = useDispatch()

    // const handleInputChange = event => {
    //     const {name, value} = event.target
    //     setData(
    //         {...data, [name]:value}
    //     )
    // };

    const handleSubmit = (values) => {
        console.log(values)
        dispatch(editUser(values))
    };

    const onDeleteUser = () => {
        dispatch(deleteUser(id))
    }

    return{user, handleSubmit, onDeleteUser}
}