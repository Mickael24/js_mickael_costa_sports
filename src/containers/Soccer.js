import { connect } from 'react-redux';
import React, { Component } from 'react'


const mapStateToProps = (state, ownProps) => {
  return {
  
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
}

class SoccerContainer extends Component {
  render() {
    return (
      <div></div>
    );
  }
}


const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(SoccerContainer)

export default container;