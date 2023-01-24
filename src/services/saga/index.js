import { call, put, takeEvery } from 'redux-saga/effects'; 
import { getPolyline } from '../../utils/routeApi';
import { GET_POLYLINE_REQUEST, WATCH_NEW_POLYLINE, GET_POLYLINE_FAILED, fillPolylineData } from '../actions/cargo';


export function* getPolylinesWatcher() {
    yield takeEvery(WATCH_NEW_POLYLINE, getNewPolyline);
}  

function* getNewPolyline({ currentRoutes }) {
    try {
        yield put({ type: GET_POLYLINE_REQUEST});
        const routes = yield call(getPolyline, currentRoutes);
        yield put(fillPolylineData(routes));
    } catch (error) {  
        console.log(error)     
        yield put({ type: GET_POLYLINE_FAILED });
    }
}

