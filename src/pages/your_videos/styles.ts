import styled from "styled-components";

interface PreviewInputProps {
    hasImage: boolean;
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', Arial, sans-serif;
    
`;
export const TitleUpload = styled.div`
    font-size: 30px;
`;
export const ContainerVideos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;
    height: content;
    border: solid 1px #e5e5e5;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: 30px;
    padding: 40px;

`;

export const PreviewContainer = styled.div`
    width: 300px;
    text-align: center;
    margin-top: 25px;
    div{
        color: grey;
    }
`;
export const PreviewInput = styled.div<PreviewInputProps>`
    display: flex;
    flex-direction: column;
    

    img{
        margin-top: 10px;
        width: auto;
        height: 160px;
        display: ${(props) => (props.hasImage ? "flex" : "transparent")};
        border: solid 1px #e5e5e5;
    }

    input {
        margin: 10px 0;
        border: 1px solid #e5e5e5;
        padding: 11px;
        border-radius: 8px;
        font-size: 22px;
        outline: none;
        font-size: 18px; 
    }

    input:focus {
        border: 2px solid #397ddb;
        padding: 10px;
    }
`;


export const ContainerVideoList = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    max-width: 1200px;
    font-weight: 300;

    div{
        display: flex;
        justify-content: space-between;
        height: 50px;
    }
    img{
        width: auto;
        height: 50px;
    }
    #listitem{
        cursor: pointer;
    }
`;

export const TextContainer = styled.div`
    width: 300px;
    height: auto;
    input {
        width: 277px;
        margin: 10px 0;
        border: 1px solid #e5e5e5;
        padding: 11px;
        border-radius: 8px;
        font-size: 22px;
        outline: none;
        font-size: 18px; 
    }

    input:focus {
        border: 2px solid #397ddb;
        padding: 10px;
    }
`;

export const ListLegend = styled.div`
    div{
        font-weight: 500;
    }
`;

export const ListItem = styled.div`
    align-items: center;
`;

export const CreateButton = styled.div`
    margin-bottom: 60px;

    button {
        background-color: #397ddb;
        border-radius: 8px;
        margin-top: 20px;
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