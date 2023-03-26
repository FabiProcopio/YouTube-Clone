import styled from "styled-components";


export const Tagwrapper = styled.div<{ leftArrow: boolean, rightArrow: boolean }>`
    display: flex;
    justify-content: flex-start;
    flex: none;
    position: relative;
    width: 100%;
    z-index: 2000;
    
    #leftarrow {
        left: 0;
        padding-top: 5px;
        display: ${({ leftArrow }) => leftArrow ? 'none' : 'flex'};
    }

    #rightarrow {
        right: 0;
        padding-top: 5px;
        display: ${({ rightArrow }) => rightArrow ? 'none' : 'flex'};
        @media (min-width: 1800px) {
            display: none;
        }
    }
`;

export const TagBarContainer = styled.div`
    overflow: scroll;
    display: flex;
    flex-wrap: nowrap;
    scroll-behavior: smooth;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100px;
        background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 1)
        );
    }

    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-thumb {
        background: transparent;
    }
    
    :hover::-webkit-scrollbar-thumb {
        background-color: rgba(140, 140, 140, 1);
        border: 10px solid rgba(255, 255, 255, 1);
    }

`;

export const TagButton = styled.button<{ selected: boolean }>`
    width: fit-content;
    height: 30px;
    margin: 10px 10px 10px 0px;
    background-color: ${({ selected }) => selected? 'black' : '#f2f2f2'};
    color: ${({ selected }) => selected? '#f2f2f2' : 'black'};
    border: none;
    border-radius: 8px;
    box-sizing: border-box;

    :hover{
        cursor: pointer;
    }
    
    span {
        padding: 5px;
        font-family: 'Roboto', Arial, sans-serif;
        font-size: 16px;
        font-weight: ${({ selected }) => selected? '500' : '400'};
        white-space: nowrap;
    }
`;

export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
        
    :hover {
        background-color: #f2f2f2;
    }

`;

export const ButtonIcon = styled.img`
    width: 14px;
`;

export const Buttonwrapper = styled.div`
    position: absolute;
    height: 100%;
    z-index: 2020;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;