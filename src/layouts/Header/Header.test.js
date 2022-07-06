/** * @jest-environment jsdom */
import React from 'react';
import {screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '.';


describe('Header', () => {
    beforeEach(() => {
        render(<Router><Header /></Router>)   
    })

    it('Displays a nav bar on the screen', () => {
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    })

    it('Changes page when a navlink is clicked', async () => {
        const about = screen.getByText('About');
        const users = screen.getByText('Users');
        await userEvent.click(about);
        expect(window.location.href).toContain('/about');
        await userEvent.click(users);
        expect(window.location.href).toContain('/users');
    })

})