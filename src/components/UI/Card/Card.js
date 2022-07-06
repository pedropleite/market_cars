import { ContainerImage, ContainerDescription, ContainerInforms } from './styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = (props) => {
    const Container = styled(Link)`
        width: 28%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3rem 0;
        cursor: pointer;
        background: #fff;
        padding: 1rem;
        border-radius: 15px;
        -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.22);
        box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.22);
        text-decoration: none;
    `;

    return (
        <Container to={`/${props.car.name}`} key={props.car.id}>
            <ContainerImage>
                <img src={require(`../../../assets/images/${props.car.img}.webp`)} />
            </ContainerImage>
            <ContainerInforms>
                <span>{`${props.car.brand} ${props.car.name}`}</span>
            </ContainerInforms>
            <ContainerDescription>
                <div>
                    <span>{`R$  ${props.car.price}`}</span>
                    <button>See Quota</button>
                </div>
                <div>
                    <span>{`${props.car.year} / ${props.car.year}`}</span>
                    <span>{`${props.car.km} km`}</span>
                </div>
            </ContainerDescription>
        </Container>
    );
};

export default Card;
