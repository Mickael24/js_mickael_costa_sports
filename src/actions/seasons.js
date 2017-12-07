export const GETSEASONS = 'GETSEASONS';
export const GET_SEASSONS_FULFILLED = 'GET_SEASSONS_FULFILLED';

export const getSeasons = () => {
  return {
    type: GETSEASONS,
  }
}

export const responseGetSeasons = (payload) =>{
  return {
    type: GET_SEASSONS_FULFILLED,
    payload
  }
}