import api from '../../../api'

export const getUsersList = () => api.get('users').then(resp => resp.data)

export const getUserDetail = (id) => api.get(`users/${id}`).then(resp => resp.data)

export const putUser = (data) => api.put(`users/${data.id}`,
    {...data, name: data.name, username: data.username, email: data.email})
    .then(resp => resp.data)

export const deleteUserById = id => api.delete(`users/${id}`)