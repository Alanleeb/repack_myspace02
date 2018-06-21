import axios from 'axios';

export const getProfiles = () => {
  return (dispatch) => {
    axios.get('/api/apps')
      .then( res => dispatch({ type: 'APPS', apps: res.data }) )
  }
}

export const addProfile = (app) => {
  return (dispatch) => {
    axios.post('/api/profiles', { app } )
     .then( res => dispatch({ type: 'ADD_PROFILE', app: res.data }) )
  }
}

export const updateProfile = (app) => {
  return (dispatch) => {
    axios.put(`/api/profiles/${profile.id}`, { app } )
      .then( res => dispatch({ type: 'UPDATE_PROFILE', app: res.data }) )
  }
}

export const deleteProfile = (id) => {
  return (dispatch) => {
    axios.delete(`/api/profiles/${id}`)
      .then( () => dispatch({ type: 'DELETE_PROFILE', id }) )
  }
}