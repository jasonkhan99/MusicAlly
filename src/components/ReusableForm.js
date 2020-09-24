import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='trackName'
          placeholder='Song/Track Title' />
        <input
          type='text'
          name='editName'
          placeholder='Edit/Remix Title' />
        <input
          type='text'
          name='actName'
          placeholder='Band/Act Name' />
        <input
          type='text'
          name='artistNames'
          placeholder='Band Members/Artist Name' />
        <input
          type='text'
          name='featureNames'
          placeholder='Featuring' />
        <input
          type='text'
          name='releaseName'
          placeholder='Album/Release Name' />
        <input
          type='number'
          name='releaseYear'
          placeholder='Year' />
        <input
          type='text'
          name='labelName'
          placeholder='Label Name' />
        <input
          type='text'
          name='labelNumber'
          placeholder='Label Number' />
        <input
          type='number'
          name='trackLengthMinutes'
          placeholder='Minutes' />
        <input
          type='number'
          name='trackLengthSeconds'
          placeholder='Seconds' />
        <input
          type='number'
          name='bpm'
          placeholder='Beats per Minute' />
        <input
          type='text'
          name='format'
          placeholder='Formats' />
        <input
          type='text'
          name='genre'
          placeholder='Genre' />
        <input
          type='text'
          name='styles'
          placeholder='Styles' />
        <input
          type='text'
          name='descriptionTags'
          placeholder='Description Tags' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;