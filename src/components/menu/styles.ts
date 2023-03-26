import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '285px' : '75px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: ${({ openMenu }) => openMenu? '0 2px 2px  0' : '6px 0px 0 0'};
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;

    font-family: 'Roboto', Arial, sans-serif;
    
    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-thumb {
        background: transparent;
    }
    
    :hover::-webkit-scrollbar-thumb {
        background-color: rgba(140, 140, 140, 1);
        border: 4px solid rgba(255, 255, 255, 1);
    }


`;

export const Section = styled.div<{ openMenu: boolean }>`
    width: 100%;
    box-sizing: border-box;
    padding: ${({ openMenu }) => openMenu? '12px' : '0px 2px 0px 2px'}; 
    border-bottom: ${({ openMenu }) => openMenu ? 'solid 1px #e5e5e5' : '0'};
`;

export const SectionOpenOnly = styled.div<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu ? 'block' : 'none'};
    width: ${({ openMenu }) => openMenu ? '100%' : '0'};
    box-sizing: border-box;
    padding: ${({ openMenu }) => openMenu? '12px 0 12px 12px' : '0'}; 
    border-bottom: ${({ openMenu }) => openMenu ? 'solid 1px #e5e5e5' : '0'};

    h3 {
        margin: 5px 0 5px 12px;
        font-weight: 400;
        font-size: 16px;
    }
`;

export const LinkMenu = styled.div<{ openMenu: boolean }>`
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 600;
    color: #707070;
    margin: 0 7px 0 0;
    padding-left: 12px;
    display: flex;
    flex-wrap: wrap;

    .space {
        margin-bottom: 20px;
        height: 1px;
        width: 100%;
    }

    .copyright{
        margin-top: 20px;
        margin-bottom: 5px;
        font-weight: 400;
        color: #909090;
    }
`;

export const LinkButton = styled.div<{ openMenu: boolean }>`
    .linkplaceholder:hover {
        cursor: pointer;
    }
    span{
        margin: 5px 8px 5px 0px;
    }

 `;


export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 100%;
    min-height: ${({ openMenu }) => openMenu? '40px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: ${({ openMenu }) => openMenu? '2px 0px 1px 12px' : '2px 0px'};
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    row-gap: 5px;
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};

    span {
        font-weight: ${({ openMenu }) => openMenu? '500' : '450'};
        margin-left: ${({ openMenu }) => openMenu? '22px' : 'none'};
        font-size: ${({ openMenu }) => openMenu? '15px' : '11px'};
    }

    :hover {
        background-color: #f2f2f2;
        width: 100%;
    }


`;



export const SignIn = styled.div<{ openMenu: boolean }>`
    padding: 4px 20px;
    box-sizing: border-box;
    
    p {
        margin: 0;
        padding-bottom: 10px;
    }
    
    `;

export const SignInButton = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    padding: 5px 12px;
    border: solid 1px #e5e5e5;
    border-radius: 50px;
    width: fit-content;
    color: #397ddb;
    font-weight: 500;
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

export const ButtonIcon = styled.img`
    width: 24px;
`;