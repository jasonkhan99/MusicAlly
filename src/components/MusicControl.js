import React from 'react';
import NewMusicForm from './NewMusicForm';
import MusicList from './MusicList';
import MusicDetail from './MusicDetail';
import EditMusicForm from './EditMusicForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase';

class MusicControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMusic: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMusic != null) {
      this.setState({
        selectedMusic: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewMusicToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedmusic = (id) => {
    this.props.firestore.get({collection: 'musics', doc: id}).then((music) => {
      const firestoreMusic = {
        trackName: music.get('trackName'),
        editName: music.get('editName'),
        actName: music.get('actName'),
        featureNames: music.get('featureNames'),
        artistNames: music.get('artistNames'),
        releaseName: music.get('releaseName'),
        releaseYear: music.get('releaseYear'),
        labelName: music.get('labelName'),
        labelNumber: music.get('labelNumber'),
        trackLengthMinutes: music.get('trackLengthMinutes'),
        trackLengthSeconds: music.get('trackLengthSeconds'),
        bpm: music.get('bpm'),
        format: music.get('format'),
        genre: music.get('genre'),
        styles: music.get('styles'),
        descriptionTags: music.get('descriptionTags'),
        id: music.id
      }
      this.setState({selectedMusic: firestoreMusic });
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  // handleEditingMusicInList = (musicToEdit) => {
  //   const { dispatch } = this.props;
  //   const action = a.addMusic(musicToEdit);
  //   dispatch(action);
  //   this.setState({
  //     editing: false,
  //     selectedMusic: null
  //   });
  // }

  handleDeletingMusic = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteMusic(id);
    dispatch(action);
    this.setState({selectedMusic: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditMusicForm music = {this.state.selectedMusic} onEditMusic = {this.handleEditingMusicInList} />
      buttonText = "Return to Music List";
    } else if (this.state.selectedMusic != null) {
      currentlyVisibleState = 
      <MusicDetail 
        music = {this.state.selectedMusic} 
        onClickingDelete = {this.handleDeletingMusic} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Music List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewMusicForm onNewMusicCreation={this.handleAddingNewMusicToList}  />;
      buttonText = "Return to Music List";
    } else {
      currentlyVisibleState = <MusicList musicList={this.props.masterMusicList} onMusicSelection={this.handleChangingSelectedMusic} />;
      buttonText = "Add Music";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

MusicControl.propTypes = {
  masterMusicList: PropTypes.object
};

// get rid of

const mapStateToProps = state => {
  return {
    masterMusicList: state.masterMusicList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

MusicControl = connect(mapStateToProps)(MusicControl);

export default withFirestore(MusicControl);
