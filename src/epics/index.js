import { combineEpics } from 'redux-observable';
import  fetchSeasons from './seasons';

export const rootEpic = combineEpics(
  fetchSeasons
);