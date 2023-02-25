import {getAlbumsList} from "../../modules/albums/services/albumsService";

export const ACTION_SET_ALBUMS = 'ACTION_SET_ALBUMS'

export const setAlbums = () => dispatch => {
    getAlbumsList().then(data => dispatch({type:ACTION_SET_ALBUMS, payload:data}))
}