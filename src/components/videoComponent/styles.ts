import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: 100%;
    :hover {
        cursor: pointer;
    }
`;

export const ImageBanner = styled.div`
    width: 100%;
    height: 210px;
    border-radius: 12px;
    background-image: url('https://i.pinimg.com/originals/f1/ef/96/f1ef96f4c97698e219edff25ff8e2344.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;
`;

export const ChannelImage = styled.div`
    background-color: lightgray;
    width: 40px;
    min-width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 50%;
    
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;