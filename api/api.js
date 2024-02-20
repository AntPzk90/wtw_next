import axios from 'axios'

export const fetchFilms = (method, url, token) => {
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    return response.data
  })
}

export const fetchFilm = (method, url, token) => {
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    return response.data
  })
}

export const fetchFilmComments = (method, url, token) => {
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    return response.data
  })
}

export const fetchPromoFilm = (method, url, token) => {
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
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

export const userUnAuth = (method, url, token) => {
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    return response.data
  }).catch(function(e) {
    throw new Error(e)
  })
}

export const checkUserAuth = (method, url, token) => {
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    return response.data
  }).catch(function(e) {
    // throw new Error(e)
    console.error(e)
  })
}

export const changeFavoriteStatus = (method, url, token) => {
  return axios({
    method,
    url,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    return response.data
  }).catch(function(e) {
    throw new Error(e)
  })
}

export const sendReview = (method, url, token, body) => {
  return axios({
    method,
    url,
    data: body,
    headers: { 'X-Token': `${token}` }
  }).then(function(response) {
    return response.data
  })
}
