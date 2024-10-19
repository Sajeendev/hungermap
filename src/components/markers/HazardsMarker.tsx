import imgMarker from '@/assets/images/markers';
import { useGetHazardData } from '@/hooks/queries';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

const HazardsMarker = () => {
  const { data, loading, error } = useGetHazardData();

  if (loading) return <p>Loading markers...</p>;

  if (error) return <p>Error loading hazard data</p>;

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

export default HazardsMarker;
