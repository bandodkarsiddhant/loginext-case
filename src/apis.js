import axios from 'axios'

let URL = 'http://localhost:5000/profiles';

export const deleteProfile = async (id) =>  {
    await axios.delete(`${URL}/${id}`)
    window.location.assign('/')
}

export const editProfile = async (payload) => {
    await axios.put(`${URL}/${payload.id}`, payload)
    window.location.assign('/')
}

