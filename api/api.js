import axios from 'axios'

export const fetchFilms = (method, url) => {
  return axios({
    method,
    url
  }).then(function(response) {
    return response.data
  })
}

export const fetchMyListFilms = (method, url, token) => {
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    return response.data
  })
}

export const userAuth = (method, url, body) => {
  console.log(body)
  return axios({
    method,
    url,
    data: body
  }).then(function(response) {
    return response.data
  }).catch(function(e) {
    throw new Error(e)
  })
}

export const checkUserAuth = (method, url, token) => {
  console.log(token)
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    console.log('X-Token', response.data)
    return response.data
  }).catch(function(e) {
    throw new Error(e)
  })
}
