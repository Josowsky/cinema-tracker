import React from 'react';
import { render } from '@testing-library/react';

import { Header } from './Header';

it('renders welcome message', () => {
  const { getByText } = render(<Header />);
  expect(getByText('????')).toBeInTheDocument();
});
