import { useHazardMarkerStore } from '@/store';
import { MapContainer, TileLayer } from 'react-leaflet';
import { render, screen } from 'test/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import MapComponent from '../map.component';

vi.mock('@/store', () => ({
  useHazardMarkerStore: vi.fn()
}));

vi.mock('react-leaflet', () => ({
  MapContainer: vi.fn(({ children }) => (
    <div data-testid="map-container">{children}</div>
  )),
  TileLayer: vi.fn(() => <div data-testid="tile-layer" />)
}));

vi.mock('../../markers', () => ({
  HazardMarkersComponent: vi.fn(() => <div data-testid="hazard-markers" />)
}));

describe('MapComponent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders MapContainer with correct props', () => {
    (
      useHazardMarkerStore as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({ showMarkers: false });
    render(<MapComponent />);

    const mapContainer = screen.getByTestId('map-container');
    expect(mapContainer).toBeInTheDocument();

    expect(MapContainer).toHaveBeenCalledWith(
      expect.objectContaining({
        center: [5, 20],
        zoom: 3,
        scrollWheelZoom: false
      }),
      expect.anything()
    );
  });

  it('renders TileLayer with correct props', () => {
    (
      useHazardMarkerStore as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({ showMarkers: false });
    render(<MapComponent />);

    const tileLayer = screen.getByTestId('tile-layer');
    expect(tileLayer).toBeInTheDocument();

    expect(TileLayer).toHaveBeenCalledWith(
      expect.objectContaining({
        attribution: expect.stringContaining('OpenStreetMap'),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      }),
      expect.anything()
    );
  });

  it('renders HazardMarkersComponent when showMarkers is true', () => {
    (
      useHazardMarkerStore as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({ showMarkers: true });
    render(<MapComponent />);

    const hazardMarkers = screen.getByTestId('hazard-markers');
    expect(hazardMarkers).toBeInTheDocument();
  });

  it('does not render HazardMarkersComponent when showMarkers is false', () => {
    (
      useHazardMarkerStore as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({ showMarkers: false });
    render(<MapComponent />);

    const hazardMarkers = screen.queryByTestId('hazard-markers');
    expect(hazardMarkers).not.toBeInTheDocument();
  });
});
