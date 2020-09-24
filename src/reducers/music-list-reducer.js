import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { trackName, editName, actName, featureNames, artistNames, releaseName, releaseYear, labelName, labelNumber, trackLengthMinutes, trackLengthSeconds, bpm, format, genre, styles, descriptionTags, id } = action;
  switch (action.type) {
  case c.ADD_MUSIC:
    return Object.assign({}, state, {
      [id]: {
        trackName: trackName,
        editName: editName,
        actName: actName,
        featureNames: featureNames,
        artistNames: artistNames,
        releaseName: releaseName,
        releaseYear: releaseYear,
        labelName: labelName,
        labelNumber: labelNumber,
        trackLengthMinutes: trackLengthMinutes,
        trackLengthSeconds: trackLengthSeconds,
        bpm: bpm,
        format: format,
        genre: genre,
        styles: styles,
        descriptionTags: descriptionTags,
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