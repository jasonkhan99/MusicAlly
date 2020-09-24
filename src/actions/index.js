import * as c from './../actions/ActionTypes';

export const deleteMusic = id => ({
  type: c.DELETE_MUSIC,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});