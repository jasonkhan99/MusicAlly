import React from "react";
import PropTypes from "prop-types";

function Music(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMusicClicked(props.id)}>
        <h3>{props.trackName} - {props.editName}</h3>
        <p><em>{props.actName}</em></p>
        <p><em>{props.releaseName} - {props.releaseYear}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Music.propTypes = {
  trackName: PropTypes.string,
  editName: PropTypes.string,
  actName: PropTypes.string,
  artistNames: PropTypes.string,
  releaseName: PropTypes.string,
  releaseYear: PropTypes.string,
  labelName: PropTypes.string,
  labelNumber: PropTypes.string,
  trackLength: PropTypes.string,
  bpm: PropTypes.string,
  format: PropTypes.string,
  genre: PropTypes.string,
  styles: PropTypes.string,
  descriptionTags: PropTypes.string,
  id: PropTypes.string,
  whenMusicClicked: PropTypes.func
};

export default Music;