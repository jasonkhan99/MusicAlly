import React from 'react';
import NewMusicForm from './NewMusicForm';
import MusicList from './MusicList';
import MusicDetail from './MusicDetail';
import EditMusicForm from './EditMusicForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

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

  handleAddingNewMusicToList = (newMusic) => {
    const { dispatch } = this.props;
    const action = a.addMusic(newMusic)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedMusic = (id) => {
    const selectedMusic = this.props.masterMusicList[id];
    this.setState({selectedMusic: selectedMusic});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingMusicInList = (musicToEdit) => {
    const { dispatch } = this.props;
    const action = a.addMusic(musicToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedMusic: null
    });
  }

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

const mapStateToProps = state => {
  return {
    masterMusicList: state.masterMusicList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

MusicControl = connect(mapStateToProps)(MusicControl);

export default MusicControl;