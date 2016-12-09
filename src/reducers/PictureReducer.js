import {
  TAKING_PHOTOS,
  GET_PHOTO,
  RECORDING_VIDEO,
} from '../actions/type'

const INITIAL_STATE = {
  taking_image: null,
  recording_video: null,
}

export default (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
    case TAKING_PHOTOS: 
      return {  ...state, taking_image: action.payload }
      
    case GET_PHOTO: 
      action.payload = state.taking_image
      return action.payload

    case RECORDING_VIDEO: 
      return { ...state, recording_video: action.payload }

    default: 
      return state
  }

}