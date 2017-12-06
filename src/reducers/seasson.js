import { GETSEASSONS } from '../actions/seasson'
import { createSelector } from 'reselect'

const initialState = {
  seassons: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GETSEASSONS:
      return { 
        ... state,
        seassons: action.seassons 
      };

    default:
      return state;
  }
}