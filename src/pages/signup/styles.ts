import styled from "styled-components";


export const MainContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 175px 0px 175px;
    height: auto;
    min-height: 550px;
    font-family: 'Roboto', Arial, sans-serif;
    align-items: center;
`;

export const Contentbox = styled.div`
    display: flex;
    align-items: center;
    height: 580px;
    width: 695px;
    padding: 0 30px 40px 36px;
    border: solid 1px #e5e5e5;
    border-radius: 8px;
    img{
        width: 300px;
        height: auto;
        
    }

`;

export const Googlead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
`;


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`;

export const LoginTitle = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0px 40px 40px 0;

    .googlelogo {
        width: 80px;
        height: auto;
    }

    h1 {
        font-weight: 500;
        margin: 10px 0 10px 0;
    }
`;

export const LoginInput = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    
    .show {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: darkgray;
        margin-bottom: 50px;
    }
    `;



export const NameBox = styled.div`

    position: relative;
    margin-bottom: 25px;

    .input-wrapper {
        position: relative;
    }

    input {
        border: 1px solid #e5e5e5;
        padding: 11px;
        border-radius: 8px;
        font-size: 22px;
        outline: none;
        font-size: 18px; 
        width: 300px;
    }

    input:focus {
        border: 2px solid #397ddb;
        padding: 10px;
    }
    input:focus::placeholder {
        color: transparent;
    }

    .nameplaceholder {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 18px;
        font-weight: 300;
        color: transparent;
        pointer-events: none;
        transition: top 0.2s ease, font-size 0.2s ease;
        opacity: 0;
        transition: opacity 0.05s ease;
    }

    input:focus + .nameplaceholder {
        padding: 0 5px;
        font-size: 13px;
        font-weight: 400;
        background-color: white;
        color: #397ddb;
        top: -7.5px;
        opacity: 1;
    }
        
`;

export const EmailBox = styled.div`
    position: relative;
    margin-bottom: 25px;

    .input-wrapper {
        position: relative;
    }

    input {
        border: 1px solid #e5e5e5;
        padding: 11px;
        border-radius: 8px;
        font-size: 22px;
        outline: none;
        font-size: 18px;
        width: 300px;
    }

    input:focus {
        border: 2px solid #397ddb;
        padding: 10px;
    }
    input:focus::placeholder {
        color: transparent;
    }
    
    .emailplaceholder {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 18px;
        font-weight: 300;
        color: transparent;
        pointer-events: none;
        transition: top 0.2s ease, font-size 0.2s ease;
        opacity: 0;
        transition: opacity 0.05s ease;
    }

    input:focus + .emailplaceholder {
        padding: 0 5px;
        font-size: 13px;
        font-weight: 400;
        background-color: white;
        color: #397ddb;
        top: -7.5px;
        opacity: 1;
    }
`;

export const PasswordBox = styled.div`
    position: relative;
    margin-bottom: 5px;

    .input-wrapper {
        position: relative;
    }

    input {
        border: 1px solid #e5e5e5;
        padding: 11px;
        border-radius: 8px;
        font-size: 22px;
        outline: none;
        font-size: 18px;
        width: 300px; 
    }

    input:focus {
        border: 2px solid #397ddb;
        padding: 10px;
    }
    input:focus::placeholder {
        color: transparent;
    }

    .passwordplaceholder {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 18px;
        font-weight: 300;
        color: transparent;
        pointer-events: none;
        transition: top 0.2s ease, font-size 0.2s ease;
        opacity: 0;
        transition: opacity 0.05s ease;
    }

    input:focus + .passwordplaceholder {
        padding: 0 5px;
        font-size: 13px;
        font-weight: 400;
        background-color: white;
        color: #397ddb;
        top: -7.5px;
        opacity: 1;
    }
    
`;



export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-right: 75px;
`;
export const LoginButton = styled.div`
    button {
        background-color: #397ddb;
        border-radius: 8px;
        padding: 10px;
        border: none;
        color: white;
        font-weight: 600;
        :hover {
            cursor: pointer;
            background-color: #3473c9;
        }
    }
`;
export const SignUpButton = styled.div`
    button {
        background-color: transparent;
        border-radius: 8px;
        padding: 10px;
        border: none;
        color: #397ddb;
        font-weight: 600;
        :hover {
            cursor: pointer;
            background-color: #e8f2ff;
        }
    }
`;

export const FootnoteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    height: auto;
    width: 695px;
    margin: 18px 150px 0 150px;
    border-radius: 8px;
    font-size: 13px;
    color: black;
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 180px;
`;