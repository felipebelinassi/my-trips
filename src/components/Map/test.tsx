import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any markers', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'São Paulo',
        slug: 'sao-paulo',
        location: {
          latitude: 0,
          longitude: 0,
        },
      },
      {
        id: '2',
        name: 'Berlim',
        slug: 'berlim',
        location: {
          latitude: 50,
          longitude: 10,
        },
      },
    ];

    render(<Map places={places} />);

    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument();
    expect(screen.getByTitle(/berlim/i)).toBeInTheDocument();
  });
});
