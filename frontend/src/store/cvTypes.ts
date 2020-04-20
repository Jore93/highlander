import {SET_EDUCATIONS, SET_LANGUAGES, SET_POSITIONS, SET_WORKHISTORY, SET_INITIALIZED} from "../actions/actionTypes";

export interface Education {
  id: number
  name: string
  place: string
  duration: string
}

export interface Language {
  id: number
  language: string
  level: string
}

export interface Position {
  id: number
  position: string
  duration: string
  organisation: string
}

export interface Workhistory {
  id: number
  position: string
  employer: string
  duration: string
}

export interface cvReducer {
  isInitialized: boolean
  education: Array<Education>
  languages: Array<Language>
  positions: Array<Position>
  workhistory: Array<Workhistory>
}

interface SetEducationAction {
  type: typeof SET_EDUCATIONS
  payload: Array<Education>
}

interface SetLanguageAction {
  type: typeof SET_LANGUAGES
  payload: Array<Language>
}

interface SetPositionAction {
  type: typeof SET_POSITIONS
  payload: Array<Position>
}

interface SetWorkhistoryAction {
  type: typeof SET_WORKHISTORY
  payload: Array<Workhistory>
}

interface SetInitializedAction {
  type: typeof SET_INITIALIZED
  payload: boolean
}

export type cvActionTypes = SetEducationAction | SetLanguageAction | SetPositionAction | SetWorkhistoryAction | SetInitializedAction;
