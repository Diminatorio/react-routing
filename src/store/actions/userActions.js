import {deleteUserById, getUsersList, postUser, putUser} from "../../modules/users/services/usersService";

export const ACTION_EDIT_USER = 'ACTION_EDIT_USER'

export const editUser = (personData) => dispatch => {
    putUser(personData).then(data => dispatch({type:ACTION_EDIT_USER, payload:data}))
}

export const ACTION_DELETE_USER = 'ACTION_DELETE_USER'

export const deleteUser = (id) => dispatch => {
    deleteUserById(id)
    dispatch({type:ACTION_DELETE_USER, payload:id})
}

export const ACTION_ADD_USER = 'ACTION_ADD_USER'

export const addUser = (personData) => dispatch => {
    postUser(personData).then(data => dispatch({type:ACTION_ADD_USER, payload:data}))
}

export const ACTION_SET_USER = 'ACTION_SET_USER'

export const setUsers = () => dispatch => {
    getUsersList().then(data => dispatch({type:ACTION_SET_USER, payload:data}))
}

