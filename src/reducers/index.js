import formVisibleReducer from './form-visible-reducer';
import musicListReducer from './music-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterMusicList: musicListReducer
});

export default rootReducer;