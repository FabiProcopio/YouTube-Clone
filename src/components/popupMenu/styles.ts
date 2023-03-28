import styled from "styled-components";

export const Container = styled.div<{ openUser: boolean }>`
    display: ${({ openUser }) => openUser? 'flex' : 'none'};
    flex-direction: column;
    margin-right: 20px;
    right: 0;
    width: 300px;
    height: fit-content;
    background-color: white;
    border-radius: 10px;
    border: solid 1px #e5e5e5;;
    font-family: 'Roboto', Arial, sans-serif;
    position: fixed;
    z-index: 9999;
    overflow: hidden;
`;

export const MenuHead = styled.div`
    display: flex;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    font-size: 18px;

    span {
        margin-bottom: 5px;
    }

    #Manageyouraccount{
        font-size: 15px;
        color: #397ddb;
    }
`;

export const Menu = styled.div<{ openUser: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    row-gap: 13px;
    box-sizing: border-box;
    padding: 12px 12px 18px 12px; 
    border-bottom: solid 1px #e5e5e5;
`;

export const MenuItem = styled.div<{ openUser: boolean }>`
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    span{
        width: 210px;
        font-size: 16px;
    }

    /* :hover {
        background-color: #f2f2f2;
        width: 100%;
    } */
`;

export const ButtonIcon = styled.img`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    margin: 0 13px 0 5px;
`;

export const ButtonIconArrow = styled.img`
    width: 15px;
    height: 15px;
    display: flex;
    
`;

export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: lightgray;
    :hover {
        background-color: #f2f2f2;
    }

`;