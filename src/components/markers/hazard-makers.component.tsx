import { messages } from '@/contents';
import { useGetHazardData } from '@/queries';
import { showToast } from '@/utils';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { ScreenLoader } from '../misc/loaders';
import { getMarkerByType } from './get-marker';

const HazardMarkersComponent = () => {
  const { data, loading, error } = useGetHazardData();

  if (loading) return <ScreenLoader />;

  if (error.type === 'request') {
    showToast({
      id: 'hazard',
      type: 'error',
      message: messages.errorFetchingData
    });

    return null;
  }

  const getIcon = (type: string) =>
    L.icon({
      iconUrl: getMarkerByType(type),
      iconSize: [32, 32]
    });

  return (
    <>
      {data?.hazards?.map((hazard, index) => (
        <Marker
          key={`hazard-${index}`}
          position={[hazard.latitude, hazard.longitude]}
          icon={getIcon(hazard.type)}>
          <Popup>{hazard.name}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default HazardMarkersComponent;
