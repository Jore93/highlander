import {Dispatch} from 'redux';

import BackendAPI from '../axios/backendApi';
import {Education, Language, Paragraph, Position, User, Workhistory} from '../store/apiTypes';
import {SET_EDUCATIONS, SET_LANGUAGES, SET_POSITIONS, SET_WORKHISTORIES, SET_INITIALIZED} from './actionTypes';

const api = new BackendAPI();
type readResponseType = {
  ok: boolean,
  data: Education[] | Language[] | Paragraph[] | Position[] | User[] | Workhistory[] | string
};
export const setInitialisation = (status: boolean) => {
  return {type: SET_INITIALIZED, payload: status}
}

//*****************
//    EDUCATION
//*****************
export const setEducations = (data: Education[]) => {
  return {type: SET_EDUCATIONS, payload: data};
}

export const createEducation = () => {};
export const readEducation = () => {};
export const readEducations = () => {
  return async (dispatch: Dispatch<any>) => {
    const readAll = true;
    const res: any = await api.read('education', {readAll})
        if (res?.data) {
      return dispatch(setEducations(res?.data || []));
    }
  }
}
export const updateEducation = () => {};
export const deleteEducation = () => {};

//*****************
//    LANGUAGE
//*****************
export const setLanguages = (data: Language[]) => {
  return {type: SET_LANGUAGES, payload: data};
}

export const createLanguage = () => {};
export const readLanguage = () => {};
export const readLanguages = () => {
  return async (dispatch: Dispatch<any>) => {
    const readAll = true;
    const res: any = await api.read('language', {readAll})
        if (res?.data) {
      return dispatch(setLanguages(res?.data || []));
    }
  }
};
export const updateLanguage = () => {};
export const deleteLanguage = () => {};

//*****************
//    PARAGRAPH
//*****************
export const setParagraphs = (data: Paragraph[]) => {};
export const createParagraph = () => {};
export const readParagraph = () => {};
export const readParagraphs = () => {
  return async (dispatch: Dispatch<any>) => {
    const readAll = true;
    const res: any = await api.read('paragraph', {readAll})
        if (res?.data) {
      return dispatch(setParagraphs(res?.data || []));
    }
  }
}
export const updateParagraph = () => {};
export const deleteParagraph = () => {};
//*****************
//    POSITION
//*****************

export const setPositions = (data: Position[]) => {
  return {type: SET_POSITIONS, payload: data};
}

export const createPosition = () => {};
export const readPosition = () => {};
export const readPositions = () => {
  return async (dispatch: Dispatch<any>) => {
    const readAll = true;
    const res: any = await api.read('position', {readAll})
        if (res?.data) {
      return dispatch(setPositions(res?.data || []));
    }
  }
}
export const updatePosition = () => {};
export const deletePosition = () => {};

//*****************
//      USER
//*****************
export const setUsers = (data: User[]) => {};
export const createUser = () => {};
export const readUser = () => {};
export const readUsers = () => {};
export const updateUser = () => {};
export const deleteUser = () => {};

//*****************
//   WORKHISTORY
//*****************
export const setWorkhistories = (data: Workhistory[]) => {
  return {type: SET_WORKHISTORIES, payload: data};
}

export const createWorkhistory = () => {};
export const readWorkhistory = () => {};
export const readWorkhistories = () => {
  return async (dispatch: Dispatch<any>) => {
    const readAll = true;
    const res: any = await api.read('workhistory', {readAll})
        if (res?.data) {
      return dispatch(setWorkhistories(res?.data || []));
    }
  }
}
export const updateWorkhistory = () => {};
export const deleteWorkhistory = () => {};
