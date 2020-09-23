import React from "react";
import PropTypes from "prop-types";

function Music(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMusicClicked(props.id)}>
        <h3>{props.trackName}</h3>
        <h3>{props.editName}</h3>
        <h3>{props.actName}</h3>
        <h3>{props.artistNames}</h3>
        <h3>{props.featureNames}</h3>
        <h3>{props.releaseName}</h3>
        <h3>{props.releaseYear}</h3>
        <h3>{props.labeName}</h3>
        <h3>{props.labelNumber}</h3>
        <h3>{props.trackLength}</h3>
        <h3>{props.bpm}</h3>
        <h3>{props.format}</h3>
        <h3>{props.genre}</h3>
        <h3>{props.styles}</h3>
        <h3>{props.descriptionTags}</h3>

      </div>
      <hr/>
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