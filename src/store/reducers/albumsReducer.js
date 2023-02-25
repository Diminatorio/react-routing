import {ACTION_SET_ALBUMS} from "../actions/albumsActions";

const initialState = []

export const albumsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ACTION_SET_ALBUMS:
            return payload
        default:
            return state
    }
}