import {
  TAKING_PHOTOS,
  GET_PHOTO,
  RECORDING_VIDEO
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

export const recordingVideo = ( data ) => {
  return {
    type: RECORDING_VIDEO,
    payload: data
  }
}