import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 9000;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 9999;

    :hover {
        background-color: #f2f2f2;
    }

`;

export const ButtonIcon = styled.img`
    width: 20px;
`;



export const SearchContainer = styled.div`
    display: flex;
    margin-top: 5px;
`;  

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 33px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
    font-size: 15px;
`;

export const SearchButton = styled.button`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;


export const HeaderButton = styled.div`
    width: auto;
    display: flex;
    z-index: 3000;
`;

export const SignInButton = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    padding: 0px 12px;
    border: solid 1px #e5e5e5;
    border-radius: 50px;
    width: fit-content;
    color: #397ddb;
    font-weight: 600;
    font-size: 15px;
    align-items: center;
    
    span{
        margin-top: -2px;
    }

    :hover {
        cursor: pointer;
        background-color: #e3f2fc;
        border: solid 1px #e3f2fc;
    }
`;

export const ButtonIconUser = styled.img`
    width: 24px;
`;

export const ButtonContainerDot = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover::after {
        content: "Settings";
        position: absolute;
        top: 50px;
        font-size: 14px;
        font-weight: 500;
        font-family: 'Roboto', Arial, sans-serif;
        background-color: rgba(110, 110, 110, 1);
        border-radius: 3px;
        padding: 5px;
        color: white;
    }

`;
