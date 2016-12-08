import {
  TAKING_PHOTOS,
  GET_PHOTO,
} from './type';


export const takingPhotos = ( data ) => {
  return {
    type: TAKING_PHOTOS,
    payload: data
  }
}

export const fetchPhoto = ( ) => {
  return {
    type: GET_PHOTO,
    payload: null,
  }
}