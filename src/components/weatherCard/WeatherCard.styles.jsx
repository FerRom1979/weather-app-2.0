import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-weight: initial;
    @media screen and (max-width: 770px) {
        flex-wrap: wrap;
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    @media screen and (max-width: 770px) {
        font-size: 30px;
    }
    @media screen and (max-width: 770px) {
        font-size: 24px;
    }
`;

export const WrapperTemp = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const Temperature = styled.span`
    font-size: 80px;
    font-weight: initial;
`;

export const Degrees = styled.span`
    position: relative;
    right: 20px;
    bottom: 10px;
`;

export const Description = styled.p`
    text-transform: capitalize;
    font-size: 20px;
    margin: 0 15px 40px;
`;
export const WrapperDescription = styled.div`
    border-left: 3px solid black;
    margin-top: 10px;
    @media screen and (max-width: 770px) {
        border: none;
        margin-top: 30px;
    }
`;

export const WrapperWind = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: initial;
    font-size: 20px;
    margin-top: 10px;
    margin-right: 20px;
    @media screen and (max-width: 600px) {
        margin-right: 80px;
    }
`;

export const Wind = styled.span`
    position: relative;
    bottom: 10px;
    left: 5px;
`;

export const SpeedWind = styled.span`
    font-size: 16px;
    text-align: right;
`;

export const TempMaxMin = styled.p`
    margin: 12px 0;
`;

export const WrapperLoader = styled.div`
    margin-top: 100px;
`;
