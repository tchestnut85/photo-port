import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact Component renders', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Contact heading matches snapshot', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('h1')).toHaveTextContent('Contact Me');
    expect(getByTestId('button')).toHaveTextContent('Submit');
});