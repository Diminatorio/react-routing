import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {userReducer} from "./reducers/userReducer";
import {albumsReducer} from "./reducers/albumsReducer";
import {photosReducer} from "./reducers/photosReducer";

const rootReducer = combineReducers({
    users: userReducer,
    albums: albumsReducer,
    photos: photosReducer
})

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store