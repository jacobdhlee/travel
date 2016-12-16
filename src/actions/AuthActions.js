import { 
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
} from './type';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChange = ( text ) => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  }
}

export const passwordChange = ( text ) => {
  return {
    type: PASSWORD_CHANGE,
    payload: text
  }
}


export const logInUser = (email, password) => {
  return () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( () => {
        Actions.tabbar({type: 'reset'})
      })
      .catch( ( err ) => {
        console.error(err)
      })
  }
}
