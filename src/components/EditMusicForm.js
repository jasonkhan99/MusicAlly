import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { FirebaseReducer, useFirestore } from 'react-redux-firebase';

function EditMusicForm (props) {

  const firestore = useFirestore();

  const { music } = props;

  function handleEditMusicFormSubmission(event) {
    event.preventDefault();
    props.onEditMusic();
    const propertiesToUpdate = {
      trackName: event.target.trackName.value,
      editName: event.target.editName.value,
      actName: event.target.actName.value,
      featureNames: event.target.featureNames.value,
      artistNames: event.target.artistNames.value,
      releaseName: event.target.releaseName.value,
      releaseYear: event.target.releaseYear.value,
      labelName: event.target.labelName.value,
      labelNumber: event.target.labelNumber.value,
      trackLengthMinutes: event.target.trackLengthMinutes.value,
      trackLengthSeconds: event.target.trackLengthSeconds.value,
      bpm: event.target.bpm.value,
      format: event.target.format.value,
      genre: event.target.genre.value,
      styles: event.target.styles.value,
      descriptionTags: event.target.descriptionTags.value, 
      id: music.id,
      userId: music.userId
    }
    return firestore.update({collection: 'musics', doc: music.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditMusicFormSubmission}
        buttonText="Update Music" />
    </React.Fragment>
  );
}

EditMusicForm.propTypes = {
  onEditMusic: PropTypes.func
};

export default EditMusicForm;