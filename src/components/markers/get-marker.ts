import imgMarker from '@/assets/images/markers';

export const getMarkerByType = (type: string) => {
  switch (type) {
    case 'FLOOD':
      return imgMarker.pdcFlood;
    case 'BIOMEDICAL':
      return imgMarker.pdcBiomedical;
    case 'DROUGHT':
      return imgMarker.pdcDrought;
    case 'EARTHQUAKE':
      return imgMarker.pdcEarthquake;
    case 'EXTREMETEMPERATURE':
      return imgMarker.pdcExtremeTemperature;
    case 'HIGHWIND':
      return imgMarker.pdcHighWind;
    case 'CYCLONE':
      return imgMarker.pdcStorm;
    case 'VOLCANO':
      return imgMarker.pdcVolcanicActivity;
    case 'WILDFIRE':
      return imgMarker.pdcWildfire;

    default:
      return imgMarker.pdcDefault;
  }
};
