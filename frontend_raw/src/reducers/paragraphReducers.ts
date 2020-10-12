import {
  SET_LANGUAGES,
} from '../actions/actionTypes';

const initialState = {
  pastParagraph: '',
}

interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export default (state = initialState, action: Action<string, string>) => {
  switch (action.type) {
    case SET_LANGUAGES:
      return {
        ...state, languages: action.payload
      };
    default:
      return state;
  }
}
