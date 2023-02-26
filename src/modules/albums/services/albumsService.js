import api from '../../../api'

export const getAlbumsList = (id) => {
    if (id) {
        return api.get('albums',
            {params: {userId:id}})
            .then(resp => resp.data)
    } else {
        return api.get('albums').then(resp => resp.data)
    }
}

export const getPhotos = (id) => api.get(`photos`,
    {params:
        {albumId:id}
        })
    .then(resp => resp.data)
