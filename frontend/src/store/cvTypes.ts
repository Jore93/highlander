import {SET_EDUCATIONS, SET_LANGUAGES, SET_POSITIONS, SET_WORKHISTORIES, SET_INITIALIZED} from "../actions/actionTypes";
import {Education, Language, Position, Workhistory} from './apiTypes';

export interface cvReducer {
  isInitialized: boolean;
  education: Education[];
  languages: Language[];
  positions: Position[];
  workhistory: Workhistory[];
};

interface SetEducationAction {
  type: typeof SET_EDUCATIONS;
  payload: Education[];
};

interface SetLanguageAction {
  type: typeof SET_LANGUAGES;
  payload: Language[];
};

interface SetPositionAction {
  type: typeof SET_POSITIONS;
  payload: Position[];
};

interface SetWorkhistoryAction {
  type: typeof SET_WORKHISTORIES;
  payload: Workhistory[];
};

interface SetInitializedAction {
  type: typeof SET_INITIALIZED;
  payload: boolean;
};

export type cvActionTypes = SetEducationAction | SetLanguageAction | SetPositionAction | SetWorkhistoryAction | SetInitializedAction;
