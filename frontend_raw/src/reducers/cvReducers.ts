import {
  SET_LANGUAGES, SET_EDUCATIONS, SET_POSITIONS, SET_WORKHISTORIES, SET_INITIALIZED
} from '../actions/actionTypes';
import {cvReducer, cvActionTypes} from '../store/cvTypes';

const initialState: cvReducer = {
  isInitialized: false,
  education: [],
  languages: [],
  positions: [],
  workhistory: [],
}

export default (state = initialState, action: cvActionTypes) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {...state, isInitialized: action.payload}
    case SET_EDUCATIONS:
      return {...state, education: action.payload}
    case SET_LANGUAGES:
      return {...state, languages: action.payload}
    case SET_POSITIONS:
      return {...state, positions: action.payload}
    case SET_WORKHISTORIES:
      return {...state, workhistory: action.payload}
    default:
      return state;
  }
}
