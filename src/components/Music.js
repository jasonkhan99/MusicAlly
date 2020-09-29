import React from "react";
import PropTypes from "prop-types";

function Music(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMusicClicked(props.id)}>
        <h3>{props.trackName}</h3>
        <h3>{props.editName}</h3>
        <h3>{props.actName}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Music.propTypes = {
  trackName: PropTypes.string,
  editName: PropTypes.string,
  actName: PropTypes.string,
  featureNames: PropTypes.string,
  artistNames: PropTypes.string,
  releaseName: PropTypes.string,
  releaseYear: PropTypes.number,
  labelName: PropTypes.string,
  labelNumber: PropTypes.string,
  trackLengthMinutes: PropTypes.number,
  trackLengthSeconds: PropTypes.number,
  bpm: PropTypes.number,
  format: PropTypes.string,
  genre: PropTypes.string,
  styles: PropTypes.string,
  descriptionTags: PropTypes.string,
  id: PropTypes.string,
  userId: PropTypes.string,
  whenMusicClicked: PropTypes.func
};

export default Music;