import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

const position = [53.19861, 50.11401];

function Map() {
    return(
        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
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