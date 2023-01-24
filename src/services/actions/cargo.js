export const ADD_CURRENT_ROUTE = 'ADD_CURRENT_ROUTE';
export const GET_POLYLINE_REQUEST = 'GET_POLYLINE_REQUEST';
export const GET_POLYLINE_SUCCESS = 'GET_POLYLINE_SUCCESS';
export const GET_POLYLINE_FAILED = 'GET_POLYLINE_FAILED';
export const WATCH_NEW_POLYLINE = 'WATCH_NEW_POLYLINE'

export const addCurrentRoute = (item) => {
    return {
        type: ADD_CURRENT_ROUTE,
        item
    }
} 

export const fillPolylineData = (data) => {
    return {
        type: GET_POLYLINE_SUCCESS,
        data
    }
}

export const action = () => {
    return {
        type: WATCH_NEW_POLYLINE,
    }
}
