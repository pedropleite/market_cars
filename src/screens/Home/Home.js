import React from 'react';
import Cars from '../../components/event/Cars/Cars';
import carsList from '../../utils/carsList';
import { Main, Container } from './styles';

const Home = () => {
    return (
        <Main>
            <Container>
                <h1>Used Cars nationwild</h1>
                <span>{`${carsList.length} cars were found in your region.`}</span>
            </Container>
            <Cars />
        </Main>
    );
};

export default Home;
