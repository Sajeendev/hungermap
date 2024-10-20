import { InfoPanelEnum } from '@/enums';
import { useHazardMarkerStore, useInfoPanelStore } from '@/store';
import { render, screen, userEvent } from 'test/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import FooterComponent from '../footer.component';

vi.mock('@/store', () => ({
  useHazardMarkerStore: vi.fn(),
  useInfoPanelStore: vi.fn()
}));

describe('FooterComponent', () => {
  const toggleMarkers = vi.fn();
  const setActivePanel = vi.fn();
  const openPanel = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (
      useHazardMarkerStore as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({
      toggleMarkers
    });
    (useInfoPanelStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      setActivePanel,
      openPanel
    });
  });

  it('renders the footer menu items correctly', () => {
    render(<FooterComponent />);

    expect(screen.getByText(/Nutrition/i)).toBeInTheDocument();
    expect(screen.getByText(/Climate/i)).toBeInTheDocument();
    expect(screen.getByText(/Hazard/i)).toBeInTheDocument();
  });

  it('calls the correct functions when "Nutrition" is clicked', async () => {
    render(<FooterComponent />);
    const user = userEvent.setup();

    const nutritionButton = screen.getByText(/Nutrition/i);
    await user.click(nutritionButton);

    expect(setActivePanel).toHaveBeenCalledWith(InfoPanelEnum.Nutrition);
    expect(openPanel).toHaveBeenCalledWith(InfoPanelEnum.Nutrition);
  });

  it('calls the correct functions when "Nutrition" is clicked', async () => {
    render(<FooterComponent />);
    const user = userEvent.setup();

    const nutritionButton = screen.getByText(/Nutrition/i);
    await user.click(nutritionButton);

    expect(setActivePanel).toHaveBeenCalledWith(InfoPanelEnum.Nutrition);
    expect(openPanel).toHaveBeenCalledWith(InfoPanelEnum.Nutrition);
  });

  it('calls the correct functions when "Hazard" is clicked', async () => {
    render(<FooterComponent />);
    const user = userEvent.setup();

    const hazardButton = screen.getByText(/Hazard/i);
    await user.click(hazardButton);

    expect(setActivePanel).toHaveBeenCalledWith(InfoPanelEnum.Hazard);
    expect(openPanel).toHaveBeenCalledWith(InfoPanelEnum.Hazard);
    expect(toggleMarkers).toHaveBeenCalled();
  });
});
