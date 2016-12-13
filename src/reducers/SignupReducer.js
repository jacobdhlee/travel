import {
  EMAIL_CREATE,
  PASSWORD_CREATE,
  NAME_CREATE,
  SIGNUP_USER,
} from '../actions/type'

const INITIAL_STATE = {
  email:'',
  password: '',
  name: '',
}

export default (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
    case EMAIL_CREATE: 
      return {  ...state, email: action.payload}

    case PASSWORD_CREATE: 
      return { ...state, password: action.payload}

    case NAME_CREATE: 
      return { ...state, name: action.payload}

    case SIGNUP_USER:
      return { ...state }  

    default: 
      return state
  }

}