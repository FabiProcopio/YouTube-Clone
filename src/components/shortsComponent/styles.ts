import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    :hover {
        cursor: pointer;
    }
`;

export const ImageBanner = styled.div<{ imageUrl: string }>`
    width: auto;
    height: 295px;
    border-radius: 12px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 8px;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;