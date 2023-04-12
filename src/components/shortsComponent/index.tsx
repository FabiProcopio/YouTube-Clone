import {
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer 
} from './styles';

function ShortsComponent({ shorts }: any) {

    return (
      <Container>
        <ImageBanner imageUrl={shorts.imageUrl}/>
        <TitleContainer>
            <TextContainer>
                <Title>{shorts.title}</Title>
                <TextCard>{shorts.views} views</TextCard>
            </TextContainer>
        </TitleContainer>
      </Container>
    )
}

export default ShortsComponent;