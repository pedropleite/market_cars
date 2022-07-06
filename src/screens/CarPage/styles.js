import styled from 'styled-components';

const Main = styled.main`
    box-sizing: border-box;
    width: 100%;
    background: #f3f5f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    gap: 1.9rem;
`;

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 50%;
    }

    @media (max-width: 768px) {
        img {
            width: 70%;
        }
    }
`;

const ContainerDescription = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    span:nth-of-type(1) {
        font-size: 1.8rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.65);
    }

    span:nth-of-type(2) {
        font-size: 1.3rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.65);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    div:nth-of-type(2) {
        button {
            width: 13rem;
            height: 2.7rem;
            color: #fff;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:nth-of-type(1) {
            background: #2e2d37;
        }

        button:nth-of-type(1):hover {
            background: rgba(46, 45, 55, 0.8);
        }

        button:nth-of-type(2) {
            background: #f61d3b;
        }

        button:nth-of-type(2):hover {
            background: rgba(246, 29, 59, 0.8);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

    div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        margin-bottom: 1.5rem;
    }
`;

const ContainerSpecifies = styled.div`
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Specifies = styled.div`
    margin-top: 3   rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        span:nth-of-type(1) {
            font-size: 1.5rem;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.65);
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            width: 45%;
        }
        span:nth-of-type(2) {
            color: rgba(0, 0, 0, 0.54);
        }

`;

export { Container, ContainerDescription, Main, Specifies, ContainerSpecifies };
