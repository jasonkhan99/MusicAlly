import React from "react";
import PropTypes from "prop-types";
import Music from "./Music";

function MusicList(props) {
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.musicList).map((music) =>
        <Music
          whenMusicClicked = { props.onMusicSelection }
          trackName = { music.trackName } 
          editName = { music.editName }
          actName = { music.actName }
          featureNames = { music.featureNames }
          artistNames = { music.artistNames }
          releaseName = { music.releaseName }
          releaseYear = { music.releaseYear }
          labelName = { music.labeName }
          labelNumber = { music.labelNumber }
          trackLengthMinutes = { music.trackLengthMinutes }
          trackLengthSeconds = { music.trackLengthSeconds }
          bpm = { music.bpm }
          format = { music.format }
          genre = { music.genre }
          styles = { music.styles }
          descriptionTags = { music.descriptionTags } 
          id = { music.id }
          key = { music.id } 
        />
      )}
    </React.Fragment>
  );
}

MusicList.propTypes = {
  musicList: PropTypes.object,
  onMusicSelection: PropTypes.func
};

export default MusicList;