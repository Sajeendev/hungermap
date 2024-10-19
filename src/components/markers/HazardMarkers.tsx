import imgMarker from '@/assets/images/markers';
import { useGetHazardData } from '@/queries';
import { showToast } from '@/utils';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { LoaderComponent } from '../custom';

const HazardMarkers = () => {
  const { data, loading, error } = useGetHazardData();

  if (loading) return <LoaderComponent />;

  if (error) {
    showToast({
      id: 'hazard',
      type: 'error',
      message: 'Error on updating hazards'
    });

    return null;
  }

  const customIcon = L.icon({
    iconUrl: imgMarker.flood,
    iconSize: [32, 32],
    className: 'custom-marker-icon'
  });

  return (
    <>
      {data?.hazards?.map((hazard, index) => (
        <Marker
          key={`hazard-${index}`}
          position={[hazard.latitude, hazard.longitude]}
          icon={customIcon}>
          <Popup>{hazard.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default HazardMarkers;
