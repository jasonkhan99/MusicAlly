import * as c from './../actions/ActionTypes';

export const deleteMusic = id => ({
  type: c.DELETE_MUSIC,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addMusic = (music) => {
  const { trackName, editName, actName, featureNames, artistNames, releaseName, releaseYear, labelName, labelNumber, trackLengthMinutes, trackLengthSeconds, bpm, format, genre, styles, descriptionTags, id } = music;
  return {
    type: c.ADD_MUSIC,
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
}