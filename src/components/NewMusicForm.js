import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewMusicForm(props){

  function handleNewMusicFormSubmission(event) {
    event.preventDefault();
    props.onNewMusicCreation({
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
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewMusicFormSubmission}
        buttonText="Add Music" />
    </React.Fragment>
  );
}

NewMusicForm.propTypes = {
  onNewMusicCreation: PropTypes.func
};

export default NewMusicForm;