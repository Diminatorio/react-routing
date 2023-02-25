import api from '../../../api'

export const getAlbumsList = () => api.get('albums').then(resp => resp.data)

export const getPhotos = (id) => api.get(`photos`,
    {params:
        {albumId:id}
        })
    .then(resp => resp.data)
console.log(getAlbumsList())
console.log(getPhotos())