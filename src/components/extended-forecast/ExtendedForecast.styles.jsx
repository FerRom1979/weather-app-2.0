import styled from 'styled-components';

export const Container = styled.div`
    max-width: 2000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
`;

export const Card = styled.div`
    position: relative;
    min-width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05), inset -5px -5px 5px rgba(255, 255, 255, 0.5),
        5px 5px 5px rgba(0, 0, 0, 0.5), -5px -5px 5px rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    margin: 30px;
`;

export const CardBox = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background-color: #ebf5fc;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    &:hover {
        transform: translateY(-50px);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        background: linear-gradient(45deg, #b95ce4, #4f29cd);
    }
`;

export const Content = styled.div`
    font-size: 1em;
    font-weight: 300;
    color: #777;

    z-index: 1;
    transition: 0.5s;
    &:hover {
        color: #fff;
    }
`;
export const Date = styled.span`
    width: 250px;
    display: block;
`;

export const Description = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
`;
