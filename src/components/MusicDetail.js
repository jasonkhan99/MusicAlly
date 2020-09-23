import React from "react";
import PropTypes from "prop-types";

function MusicDetail(props){
  const { music, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Music Detail</h1>
      <h3>{props.trackName} - {props.editName}</h3>
      <p><em>{props.actName}</em></p>
      <p><em>{props.releaseName} - {props.releaseYear}</em></p>
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