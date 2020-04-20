import axios from 'axios';
import {Dispatch} from 'redux';

import dotenv from 'dotenv';
import {Education, Language, Position, Workhistory} from '../store/cvTypes';
import {SET_EDUCATIONS, SET_LANGUAGES, SET_POSITIONS, SET_WORKHISTORY, SET_INITIALIZED} from './actionTypes';
dotenv.config();

export const setInitialisation = (status: boolean) => {
  return {type: SET_INITIALIZED, payload: status}
}

export const setEducations = (data: Array<Education>) => {
  return {type: SET_EDUCATIONS, payload: data};
}

export const fetchEducations = () => {
  return async (dispatch: Dispatch<any>) => {
    const params = {
      headers: {
        'api-key': process.env.REACT_APP_API_KEY,
      }
    }
    const res = await axios.get(`${process.env.REACT_APP_API}/education`, params)
    if (res.data.data) {
      return dispatch(setEducations(res.data.data));
    }
  }
}

export const setLanguages = (data: Array<Language>) => {
  return {type: SET_LANGUAGES, payload: data};
}

export const fetchLanguages = () => {
  return async (dispatch: Dispatch<any>) => {
    const params = {
      headers: {
        'api-key': process.env.REACT_APP_API_KEY,
      }
    }
    const res = await axios.get(`${process.env.REACT_APP_API}/languages`, params);
    if (res.data.data) {
      return dispatch(setLanguages(res.data.data));
    }
  }
}

export const setPositions = (data: Array<Position>) => {
  return {type: SET_POSITIONS, payload: data};
}

export const fetchPositions = () => {
  return async (dispatch: Dispatch<any>) => {
    const params = {
      headers: {
        'api-key': process.env.REACT_APP_API_KEY,
      }
    }
    const res = await axios.get(`${process.env.REACT_APP_API}/positions`, params);
    if (res.data.data) {
      return dispatch(setPositions(res.data.data));
    }
  }
}

export const setWorkhistory = (data: Array<Workhistory>) => {
  return {type: SET_WORKHISTORY, payload: data};
}

export const fetchWorkhistory = () => {
  return async (dispatch: Dispatch<any>) => {
    const params = {
      headers: {
        'api-key': process.env.REACT_APP_API_KEY,
      }
    }
    const res = await axios.get(`${process.env.REACT_APP_API}/workhistory`, params);
    if (res.data.data) {
      return dispatch(setWorkhistory(res.data.data));
    }
  }
}
