import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import { GETSEASONS, responseGetSeasons } from '../actions/seasons'


export default function fetchSeasons(action$) {
  return action$.ofType(GETSEASONS)
    .mergeMap(action =>
      fetch('/api/seasons?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC')
        .then(response =>  response.json())
        .then(response => responseGetSeasons(response))
      );
}

