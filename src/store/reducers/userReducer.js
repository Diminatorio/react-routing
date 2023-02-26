import {ACTION_ADD_USER, ACTION_DELETE_USER, ACTION_EDIT_USER, ACTION_SET_USER} from "../actions/userActions";

const initialState = []

export const userReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ACTION_EDIT_USER:
            return state.map(user => user.id === payload.id ? {...user, ...payload}: user)
        case ACTION_DELETE_USER:
            return state.filter(user => String(user.id) !== payload)
        case ACTION_ADD_USER:
            return [...state, payload]
        case ACTION_SET_USER:
            return payload
        default:
            return state
    }
}