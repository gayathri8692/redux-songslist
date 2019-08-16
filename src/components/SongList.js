import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary'
            onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className='content'>
            {song.title}
          </div>
        </div>
      )
    })
  }

  render () {
    console.log(this.props);
    return (
      <div className='ui divided list'>
        {this.renderList()}
      </div>
    )
  }
}

//below gets all the state from the redux store(reducer) and it can be named anything instead of mapStateToProps (it's the convention though) like 'getMyState' or something but it has to the first argument in the connect function
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
}

//so basically gets the state form redux-store and loads the component and also action creators gets called
export default connect(mapStateToProps, { selectSong })(SongList);