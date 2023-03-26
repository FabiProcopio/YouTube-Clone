import {
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer 
} from './styles';

function ShortsComponent() {

    return (
      <Container>
        <ImageBanner />
        <TitleContainer>
            <TextContainer>
                <Title>BLIND GUARDIAN - The God Machine Tour 2023</Title>
                <TextCard>778 views</TextCard>
            </TextContainer>
        </TitleContainer>
      </Container>
    )
}

export default ShortsComponent;