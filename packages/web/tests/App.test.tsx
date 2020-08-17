import React from 'react';
import { render } from '@testing-library/react';
import App from '../pages/about';

test('Renders app', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
});
