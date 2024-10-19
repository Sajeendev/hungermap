import { useHazardMarkerStore } from '@/store';
import { MapContainer, TileLayer } from 'react-leaflet';
import { HazardMarkersComponent } from '../markers';

const MapComponent = () => {
  const { showMarkers } = useHazardMarkerStore();

  return (
    <MapContainer center={[5, 20]} zoom={3} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {showMarkers && <HazardMarkersComponent />}
    </MapContainer>
  );
};

export default MapComponent;
