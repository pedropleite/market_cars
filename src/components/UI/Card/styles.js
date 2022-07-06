import styled from 'styled-components';

const ContainerImage = styled.div`
    text-align: center;
    img {
        width: 90%;
    }
`;

const ContainerInforms = styled.div`
    color: #000;
    align-self: flex-start;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 500;

    @media (max-width: 768px) {
        align-self: center;
    }
`;

const ContainerDescription = styled.div`
    color: #000;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    div:nth-of-type(1) {
        span {
            font-size: 1.5rem;
            font-weight: 600;
        }
        button {
            background: #fff;
            border: 1px solid red;
            border-radius: 5px;
            color: red;
            cursor: pointer;
        }
        button:hover {
            background: #f5f5f5;
        }
    }

    div: nth-of-type(2) {
        span {
            color: rgba(0, 0, 0, 0.5);
        }
    }

    @media (max-width: 768px) {
        div {
            flex-direction: column;
            align-items: center;
        }
    }
`;

export { ContainerImage, ContainerDescription, ContainerInforms };
