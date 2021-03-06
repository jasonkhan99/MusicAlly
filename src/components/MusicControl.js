import React from 'react';
import NewMusicForm from './NewMusicForm';
import MusicList from './MusicList';
import MusicDetail from './MusicDetail';
import EditMusicForm from './EditMusicForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

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

  handleChangingSelectedMusic = (id) => {
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
        userId: music.userId,
        id: music.id
      }
      this.setState({selectedMusic: firestoreMusic });
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingMusicInList = () => {
    this.setState({
      editing: false,
      selectedMusic: null
    });
  }

  handleDeletingMusic = (id) => {
    this.props.firestore.delete({collection: 'musics', doc: id});
    this.setState({selectedTicket: null});
  }

  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access MusicAlly.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
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
}

MusicControl.propTypes = {
  masterMusicList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

MusicControl = connect(mapStateToProps)(MusicControl);

export default withFirestore(MusicControl);
