import {combineReducers} from 'redux';

import cvReducers from './cvReducers';
import paragraphReducers from './paragraphReducers';

export default combineReducers({
  cv: cvReducers,
  paragraphs: paragraphReducers,
});
