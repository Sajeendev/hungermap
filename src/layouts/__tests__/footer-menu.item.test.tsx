import { render, screen } from 'test/test-utils';
import { describe, expect, it, vi } from 'vitest';
import FooterMenuItem from '../footer-menu.item';

describe('FooterMenuItem', () => {
  const mockOnClick = vi.fn();
  const title = 'Test Title';
  const image = 'test-image.png';

  it('should render the title and image', () => {
    render(
      <FooterMenuItem title={title} image={image} onClick={mockOnClick} />
    );

    expect(screen.getByText(title)).toBeInTheDocument();

    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', image);
  });
});
