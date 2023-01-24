import { MapContainer, TileLayer, Polyline, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './MapComponent.module.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

export default function MapComponent() {

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;

    const mapRef = useRef();
    const defaultCenter = [38.9072, -77.0369];
    const markers = useSelector(store => store.cargo.currentMarkers);
    const defaultZoom = 8;
    const polyline = useSelector(store => store.cargo.currentPolyline);
    const limeOptions = { color: 'lime' }
    useEffect(()=> {
        console.log(markers)
        if(mapRef.current) {                     
            mapRef.current.flyTo(markers[0].location, 12, {
                duration: 2
            });
        }        
    }, [markers]);
    return (
        <div className={styles.map}>
            <MapContainer ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
                {   
                polyline ? 
                <Polyline pathOptions={limeOptions} positions={polyline} /> :
                null
                }
                {
                    markers ?                     
                    (markers.map(el => (
                            <Marker key={el.id} position={el.location}>
                                <Popup>{el.location[0]} : {el.location[1]}</Popup>
                            </Marker>
                        ))) :
                    null
                }                
            </MapContainer>
        </div>
    );
}
