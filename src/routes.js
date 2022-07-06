import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import CarPage from './screens/CarPage/CarPage';
import CarsList from './utils/carsList';

const Paths = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {CarsList.map((car) => {
                    return <Route key={car.id} path={`/${car.name}`} element={<CarPage car={car} />} />;
                })}
                <Route path="/car" element={<CarPage />} />
            </Routes>
        </>
    );
};

export default Paths;
