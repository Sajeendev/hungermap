import { useGetHazardData } from '@/hooks/queries';
import { Box } from '@mantine/core';
import { Marker, Popup } from 'react-leaflet';

const HazardsMarker = () => {
  const { data, loading, error } = useGetHazardData();

  if (loading) return <p>Loading markers...</p>;

  if (error) return <p>Error loading hazard data</p>;

  return (
    <Box>
      {data?.hazards?.map((hazard, index) => (
        <Marker
          key={`hazard-${index}`}
          position={[hazard.latitude, hazard.longitude]}>
          <Popup>{hazard.name}</Popup>
        </Marker>
      ))}
    </Box>
  );
};

export default HazardsMarker;
