import { GETSEASONS, GET_SEASSONS_FULFILLED } from '../actions/seasons'
import { createSelector } from 'reselect'

const initialState = {
  seasons: []
};

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_SEASSONS_FULFILLED:
      return { 
        seasons: action.seasons
      };

    default:
      return state;
  }
}