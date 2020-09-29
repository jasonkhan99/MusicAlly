import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';
import firebase from 'firebase/app';

function NewMusicForm(props){

  const firestore = useFirestore();

  function addMusicToFirestore(event) {
    event.preventDefault();
    props.onNewMusicCreation();
    return firestore.collection('musics').add(
      {
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
        userId: firebase.auth().currentUser.uid,
        descriptionTags: event.target.descriptionTags.value,
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addMusicToFirestore}
        buttonText="Add Music" />
    </React.Fragment>
  );
}

NewMusicForm.propTypes = {
  onNewMusicCreation: PropTypes.func
};

export default NewMusicForm;