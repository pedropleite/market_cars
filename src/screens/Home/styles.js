import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #f3f5f8;
    font-family: sans-serif;
`;

const Container = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0.4;

    span {
        color: rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1.3rem;
        }
        span {
            font-size: 0.85rem;
        }
    }
`;

export { Main, Container };
