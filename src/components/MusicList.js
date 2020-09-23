import React from "react";
import PropTypes from "prop-types";
import Music from "./Music";

function MusicList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.musicList).map((music) => {
        return <Music
          whenMusicClicked = { props.onMusicSelection }
          trackName = { music.trackName } 
          editName = { music.editName }
          actName = { music.actName }
          featureNames = { props.featureNames }
          artistNames = { props.artistNames }
          releaseName = { props.releaseName }
          releaseYear = { props.releaseYear }
          labelName = { props.labeName }
          labelNumber = { props.labelNumber }
          trackLength = { props.trackLength }
          bpm = { props.bpm }
          format = { props.format }
          genre = { props.genre }
          styles = { props.styles }
          descriptionTags = { props.descriptionTags } 
          id = { music.id }
          key = { music.id } />
      })}
    </React.Fragment>
  );
}

MusicList.propTypes = {
  musicList: PropTypes.object,
  onMusicSelection: PropTypes.func
};

export default MusicList;