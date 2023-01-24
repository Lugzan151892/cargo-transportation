import { requests } from "../../utils/data";
import { v4 as uuidv4 } from 'uuid';
import { ADD_CURRENT_ROUTE, GET_POLYLINE_SUCCESS, GET_POLYLINE_REQUEST, GET_POLYLINE_FAILED } from "../actions/cargo";

const initalState = {
    requestsList: requests,
    currentRoute: null,
    currentPolyline: null,
    currentMarkers: null,

    polylineRequest: false,    
    polylineFailed: false
}

export const cargoReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_CURRENT_ROUTE: 
            return {...state, currentRoute: action.item}
        case GET_POLYLINE_REQUEST: 
            return {...state, polylineRequest: true}
        case GET_POLYLINE_SUCCESS:       
            const markers = [];   
            let coords = [];
            action.data.routes[0].legs[0].steps.forEach(el => {
                coords = [...coords, ...el.geometry.coordinates]
            });
            action.data.waypoints.forEach(el => {
                markers.push({id: uuidv4(), location: el.location});
            });
            return {...state, polylineFailed: false, polylineRequest: false, currentPolyline: coords, currentMarkers: markers }
        case GET_POLYLINE_FAILED: 
            return {...state, polylineFailed: true, polylineRequest: false}
        default:
            return state;
    }
}
