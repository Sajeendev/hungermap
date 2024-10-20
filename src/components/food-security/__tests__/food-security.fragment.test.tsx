import { foodSecurityMockData } from 'test/mocks';
import { render, screen } from 'test/test-utils';
import { describe, expect, it } from 'vitest';
import FoodSecurityFragment from '../food-security.fragment';

describe('FoodSecurityFragment', () => {
  it('renders four FoodSecurityStatItem components', () => {
    render(<FoodSecurityFragment data={foodSecurityMockData} />);
    const statItems = screen.getAllByText(/Score|Index|Access/);
    expect(statItems).toHaveLength(4);
  });

  it('renders correct titles for each FoodSecurityStatItem', () => {
    render(<FoodSecurityFragment data={foodSecurityMockData} />);

    expect(screen.getByText('Food Consumption Score')).toBeInTheDocument();
    expect(
      screen.getByText('Reduced Coping Strategy Index')
    ).toBeInTheDocument();
    expect(screen.getByText('Health Access')).toBeInTheDocument();
    expect(screen.getByText('Market Access')).toBeInTheDocument();
  });
});
