const profiles = (state = [], action ) => {
  switch(action.type) {
    case 'PROFILES':
      return action.profiles
    case 'ADD_PROFILE':
      return [action.profile, ...state]
    case 'UPDATE_PROFILE':
      return state.map( a => {
        if (a.id === action.profile.id)
          return action.profile
        return a
      })
    case 'DELETE_PROFILE':
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default profiles;