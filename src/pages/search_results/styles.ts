import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', Arial, sans-serif;
    background-color: white;
    width: 100%;
    height: 800px;
`;

export const MainBox = styled.div<{ openFilter: boolean }>`
    width: 70%;
    max-width: 850px;
    height: fit-content;
    background-color: white;
    height: 90%;
`;

export const FilterBox = styled.div<{ openFilter: boolean }>`
    background-color: white;
    border-bottom: solid 1px #e5e5e5;
    margin-left: 12px;
    padding-bottom: ${({ openFilter }) => openFilter? '25px' : 'none'};
    box-sizing: border-box;
`;

export const FilterButton = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    padding: 5px 12px;
    border: solid 1px white;
    border-radius: 50px;
    width: fit-content;
    color: black;
    font-weight: 500;
    font-size: 15px bold;
    font-weight: 500;
    align-items: center;
    margin-left: -12px;
    span{
        margin-top: -2px;
    }

    :hover {
        cursor: pointer;
        background-color: #e5e5e5;
        border: solid 1px #e5e5e5;
    }
    :hover::after {
        content: "Open search filters";
        position: absolute;
        top: 150px;
        left: 19%;
        font-size: 14px;
        font-weight: 500;
        font-family: 'Roboto', Arial, sans-serif;
        background-color: rgba(110, 110, 110, 1);
        border-radius: 3px;
        padding: 5px;
        color: white;
        z-index: 3000;
    }
`;

export const ButtonIcon = styled.img`
    width: 24px;
`;

export const FilterContent = styled.div<{ openFilter: boolean }>`
    display: ${({ openFilter }) => openFilter? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;

`;
export const FilterColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 17%;
`;
export const ColumnTitle = styled.div`
    font-weight: 600;
    font-size: 15px;
    box-sizing: border-box;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: solid 1px #e5e5e5; 
`;
export const ColumnText = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    box-sizing: border-box;
    margin-top: 15px;
    font-size: 15px;

    span{
        cursor: pointer;
    }
`;


export const ResultsBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    height: auto;
    background-color: white;
    margin-left: 12px;
    margin-top: 10px;
`;

export const ResultRow = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    cursor: pointer;
`;

export const ResultImg = styled.div`
    padding-right: 20px;
    img{
        border-radius: 12px;
        width: 360px;
    }  
`;
export const ResultText = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    span{
        padding-top: 5px;
        padding-bottom: 10px;
    }
`;
export const TitleText = styled.div`
    font-size: 16px;
    font-weight: 600;
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

export const ButtonContainerDot = styled.div`
    padding-top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    right: 5px;
    display: block;
    z-index: 1; 
`;