import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { trackName, editName, actName, artistNames, releaseName, releaseYear, labelName, labelNumber, trackLength, bpm, format, id } = action;
  switch (action.type) {
  case c.ADD_MUSIC:
    return Object.assign({}, state, {
      [id]: {
        trackName: trackName,
        editName: editName,
        actName: actName,
        artistNames: artistNames,
        releaseName: releaseName,
        releaseYear: releaseYear,
        labelName: labelName,
        labelNumber: labelNumber,
        trackLength: trackLength,
        bpm: bpm,
        format: format,
        id: id
      }
    });
  case c.DELETE_MUSIC:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};