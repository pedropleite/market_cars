import { Container, ContainerDescription, Main, Specifies, ContainerSpecifies } from './styles';
import { useEffect } from 'react';

const CarPage = (props) => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <Main>
            <Container>
                <img src={require(`../../assets/images/${props.car.img}.webp`)} />
                <ContainerDescription>
                    <div>
                        <span>{`${props.car.brand} ${props.car.name} ${props.car.year}`}</span>
                        <span>{`R$  ${props.car.price}`}</span>
                    </div>
                    <div>
                        <button>Comparar modelos</button>
                        <button>Tenho Interesse</button>
                    </div>
                </ContainerDescription>
            </Container>
            <ContainerSpecifies>
                <Specifies>
                    <div>
                        <span>Mechanics and Dimensions</span>
                        <span>{props.car.mechanics}</span>
                    </div>
                    <div>
                        <span>Version and Equipment</span>
                        <span>{props.car.equipment}</span>
                    </div>
                </Specifies>
            </ContainerSpecifies>
        </Main>
    );
};

export default CarPage;
