import {ACTION_SET_PHOTOS} from "../actions/photosActions";

const initialState = []

export const photosReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ACTION_SET_PHOTOS:
            return payload
        default:
            return state
    }
}