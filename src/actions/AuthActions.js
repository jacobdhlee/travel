import { 
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
} from './type';

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