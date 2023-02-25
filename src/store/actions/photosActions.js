import {getPhotos} from "../../modules/albums/services/albumsService";

export const ACTION_SET_PHOTOS = 'ACTION_SET_PHOTOS'

export const setPhotos = (id) => dispatch => {
    getPhotos(id).then(data => dispatch({type:ACTION_SET_PHOTOS, payload:data}))
}