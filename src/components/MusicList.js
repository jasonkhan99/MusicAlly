import React from "react";
import PropTypes from "prop-types";
import Music from "./Music";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function MusicList(props) {

  useFirestoreConnect([
    { collection: 'musics' }
  ]);

  const musics = useSelector(state => state.firestore.ordered.musics);

  if (isLoaded(musics)) {
    return (
      <React.Fragment>
        <hr/>
        {musics.map((music) => {
          return <Music
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
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

MusicList.propTypes = {
  onMusicSelection: PropTypes.func
};

export default MusicList;