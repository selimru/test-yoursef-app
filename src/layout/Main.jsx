import React from 'react';
import NavPage from '../Shared/NavPage';
import { Outlet } from 'react-router-dom';
import FooterPage from '../Shared/FooterPage';

const Main = () => {
    return (
        <div>
            <NavPage />
            <Outlet />
            <FooterPage />
        </div>
    );
};

export default Main;