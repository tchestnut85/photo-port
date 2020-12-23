import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About Component', () => {
    // Baseline test to confirm About section is rendering
    // `it` can be interchanged with `test`
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });

});

