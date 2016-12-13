import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  EMAIL_CREATE,
  PASSWORD_CREATE,
  NAME_CREATE,
  SIGNUP_USER,
} from './type';


export const emailCreate = ( text ) => {
  return {
    type: EMAIL_CREATE,
    payload: text
  }
}

export const passwordCreate = ( text ) => {
  return {
    type: PASSWORD_CREATE,
    payload: text
  }
}

export const nameCreate = ( text ) => {
  return {
    type: NAME_CREATE,
    payload: text
  }
}


export const signUpUser = ({ email, password, name }) => {
  return () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const { currentUser } = firebase.auth()
        firebase.database().ref(`/${currentUser.uid}/profile`)
          .set({
            username: name,
            email: email
          })
        Actions.tabbar({type: 'reset'})
      })
      .catch( err => console.error(err))
  }
}