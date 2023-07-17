import axios from 'axios'

export const fetchFilms = (method, url) => {
    return axios({
        method,
        url
    }).then(function (response) {
        return response.data
    })
}
