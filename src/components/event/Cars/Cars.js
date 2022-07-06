import carsList from '../../../utils/carsList';
import Card from '../../UI/Card/Card';
import { Container } from './styles';

const Cars = () => {
    return (
        <Container>
            {carsList.map((car) => {
                return <Card key={car.id} car={car} />;
            })}
        </Container>
    );
};

export default Cars;
