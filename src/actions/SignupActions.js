import { 
  EMAIL_CREATE,
  PASSWORD_CREATE,
  NAME_CREATE
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