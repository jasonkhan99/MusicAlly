import * as c from './ActionTypes';

export const deleteMusic = id => ({
  type: c.DELETE_MUSIC,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addMusic = (music) => {
  const { trackName, editName, actName, artistNames, releaseName, releaseYear, labelName, labelNumber, trackLength, bpm, format, genre, styles, descriptionTags, id } = music;
  return {
    type: c.ADD_MUSIC,
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
    genre: genre,
    styles: styles,
    descriptionTags: descriptionTags,
    id: id
  }
}