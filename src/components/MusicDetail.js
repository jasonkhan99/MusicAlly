import React from "react";
import PropTypes from "prop-types";

function MusicDetail(props){
  const { music, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Music Detail</h1>
      <h3>{music.trackName}</h3>
      <h3>{music.editName}</h3>
      <h3>{music.actName}</h3>
      <h3>{music.artistNames}</h3>
      <h3>{music.featureNames}</h3>
      <h3>{music.releaseName}</h3>
      <h3>{music.releaseYear}</h3>
      <h3>{music.labeName}</h3>
      <h3>{music.labelNumber}</h3>
      <h3>{music.trackLengthMinutes}</h3>
      <h3>{music.trackLengthSeconds}</h3>
      <h3>{music.bpm}</h3>
      <h3>{music.format}</h3>
      <h3>{music.genre}</h3>
      <h3>{music.styles}</h3>
      <h3>{music.descriptionTags}</h3>
      <button onClick={ props.onClickingEdit }>Update Music</button>
      <button onClick={()=> onClickingDelete(music.id) }>Delete Music</button>
      <hr/>
    </React.Fragment>
  );
}

MusicDetail.propTypes = {
  music: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MusicDetail;