import { formatInMillions, formatInPercentage } from '@/utils';
import { render, screen } from 'test/test-utils';
import { describe, expect, it, vi } from 'vitest';
import FoodSecurityStatItem from '../food-security-stat.item';

vi.mock('@/utils', () => ({
  formatInMillions: vi.fn(value => `${value}M`),
  formatInPercentage: vi.fn(value => `${value}%`)
}));

describe('FoodSecurityStatItem', () => {
  const defaultProps = {
    title: 'Food Insecurity',
    people: 1000000,
    prevalence: 0.15
  };

  it('renders the title correctly', () => {
    render(<FoodSecurityStatItem {...defaultProps} />);

    expect(screen.getByText('Food Insecurity')).toBeInTheDocument();
  });

  it('renders the population data correctly', () => {
    render(<FoodSecurityStatItem {...defaultProps} />);

    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('1000000M')).toBeInTheDocument();
    expect(formatInMillions).toHaveBeenCalledWith(1000000);
  });

  it('renders the prevalence data correctly', () => {
    render(<FoodSecurityStatItem {...defaultProps} />);

    expect(screen.getByText('Prevalence')).toBeInTheDocument();
    expect(screen.getByText('0.15%')).toBeInTheDocument();
    expect(formatInPercentage).toHaveBeenCalledWith(0.15);
  });
});
