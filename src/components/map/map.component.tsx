import { MapContainer, TileLayer } from 'react-leaflet';
import { HazardsMarker } from '../markers';

const MapComponent = () => {
  return (
    <MapContainer center={[9.082, 8.6753]} zoom={4} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <HazardsMarker />
    </MapContainer>
  );
};

export default MapComponent;
