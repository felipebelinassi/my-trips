import { render, screen } from '@testing-library/react';
import LinkWrapper from '.';

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/test-link">Test children</LinkWrapper>);

    const children = screen.getByRole('link', { name: /test children/i });

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/test-link');
  });
});
