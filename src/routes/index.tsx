import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const constRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" Component={Dashboard} />
            <Route
                path="/repositories/:user/:repository"
                Component={Repository}
            />
        </Routes>
    );
};

export default constRoutes;
