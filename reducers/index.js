import formVisibleReducer from './form-visible-reducer';
import musicListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterMusicList: musicListReducer
});

export default rootReducer;