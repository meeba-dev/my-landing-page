import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

const position = [52.24, 21.02];

function Map() {
    return(
        <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    WhatsApp <br /> +48 572 690 797
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;