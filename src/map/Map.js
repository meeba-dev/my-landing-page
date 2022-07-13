import { render } from '@testing-library/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [52.24, 21.02];

function Map() {
    render(
        <MapContainer center={position} zoom={12} scrollWheelZoom={false} id='map'>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={position}>
                <Popup>
                    adsdassdaa
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;