import { render, screen } from 'test/test-utils';
import { describe, expect, it } from 'vitest';

import HeaderComponent from '../header.component';

describe('HeaderComponent', () => {
  it('renders without crashing', () => {
    render(<HeaderComponent />);
  });

  it('displays the correct text', () => {
    render(<HeaderComponent />);
    expect(screen.getByText('Hunger Map')).toBeInTheDocument();
  });
});
