import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getSeasons } from '../actions/seasons';
import HeaderShooping from '../components/HeaderPage';


const mapStateToProps = (state, ownProps) => {
  console.log(state.seasons);
  return {
    seasons: state.seasons
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSeasons: () => { dispatch(getSeasons()) }
  };
}

class SoccerContainer extends Component {
  render() {
    return (
      <div>
        <HeaderShooping seasons={this.props.seasons} getSeasons={this.props.getSeasons} />
      </div>
    );
  }
}


const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(SoccerContainer)

export default container;