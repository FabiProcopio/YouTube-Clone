import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    height: 700px;
    width: 100%;
    max-width: 2000px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, minmax(300px, auto));
    overflow: hidden;
    column-gap: 20px;
    row-gap: 0;
    border-bottom: solid 4px #e5e5e5;
    @media (max-width: 1920px) {
        grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    }
    @media (max-width: 1600px) {
        grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    }
    @media (max-width: 1280px) {
        grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
    }
    @media (max-width: 900px) {
        grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10px;
`;

export const MainShortsContainer = styled.div`
    display: block;
    margin: 0 auto;
    padding-top: 10px;
    
    @media (max-width: 1920px) {
        margin: unset;
    }
`;


export const ShortsContainer = styled.div<{ openMenu: boolean, openFilter: boolean }>`
    border-bottom: solid 4px #e5e5e5;
    margin-bottom: 30px;
`;

export const ShortsCards = styled.div<{ openMenu: boolean, openFilter: boolean }>`
    max-width: 2000px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(400px, auto);
    overflow: hidden;
    column-gap: 20px;
    row-gap: 50px;

    height: ${({ openFilter }) => openFilter ? 'auto' : '370px'};
    padding-bottom: ${({ openFilter }) => openFilter ? '0px' : '20px'};

    @media (max-width: 1920px) {
        grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(8, 1fr)' : 'repeat(10, 1fr)'};
    }
    @media (max-width: 1600px) {
        grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(6, 1fr)' : 'repeat(8, 1fr)'};
    }
    @media (max-width: 1280px) {
        grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(5, 1fr)' : 'repeat(6, 1fr)'};
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
        // fix rows
    }
`;

export const ButtonMore = styled.button`
    width: 100%;
    height: 50px;
    background-color: transparent;
    border: transparent;
    border-bottom: solid 2px transparent;
    border-top: solid 2px transparent;
    :hover {
        background-color: #e5e5e5;
        border-bottom: solid 2px #999999;
        border-top: solid 2px #999999;
        cursor: pointer;
    }
`;

export const ShortsTitle = styled.div`
    width: 100%;
    min-height: 70px;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    font-size: 23px;
    font-weight: 500;
    font-family: 'Roboto', Arial, sans-serif;
`;

export const ButtonIcon = styled.img`
    width: 20px;
    margin-right: 10px;
`;

