import formVisibleReducer from './form-visible-reducer';
import musicListReducer from './music-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterMusicList: musicListReducer,
  firestore: firestoreReducer
});

export default rootReducer;