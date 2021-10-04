import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    justify-items: baseline;

    background-color: #59c6f7;

    @media screen and (max-width: 770px) {
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        height: 200px;
    }
`;

export const Img = styled.img`
    width: 100px;
    display: block;
    @media screen and (max-width: 870px) {
        display: none;
    }
`;

export const WrapperButtons = styled.div`
    display: flex;
    @media screen and (max-width: 770px) {
        width: 100%;
        justify-content: space-around;
    }
`;
