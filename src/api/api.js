import axios from 'axios'

export const login = params => {
  return axios.post('/login', params)
}

export const logout = params => {
  return axios.post('/logout', params)
}

export const addMember = params => {
  return axios.post('/team/addMember', params)
}

export const getProjectList = params => {
  return axios.get('/projects/list', {params: params})
}

export const getProject = params => {
  return axios.get('/projects/detail', {params: params})
}

export const getDepartments = params => {
  return axios.get('/team/departments', {params: params})
}

export const getMembers = params => {
  return axios.get('/team/members', {params: params})
}
