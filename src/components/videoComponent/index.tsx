import { 
    ChannelImage, 
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer 
} from './styles';

function VideoComponent({ video }: any) {

    return (
      <Container>
        <ImageBanner />
        <TitleContainer>
            <ChannelImage>
                FP
            </ChannelImage>
            <TextContainer>
                <Title>{video.title}</Title>
                <TextCard>{video.channel}</TextCard>
                <TextCard>{video.views} views - {video.time} ago</TextCard>
            </TextContainer>
        </TitleContainer>
      </Container>
    )
}

export default VideoComponent;