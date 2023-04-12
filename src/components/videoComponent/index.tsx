import { 
    ChannelImage, 
    Container, 
    ImageBanner, 
    TextCard, 
    TextContainer, 
    Title, 
    TitleContainer 
} from './styles';
import GetTimeDifference from '../../components/timeComponent';

function VideoComponent({ video }: any) {
    
    return (
      <Container >
        <ImageBanner imageUrl={video.imageUrl}/>
        <TitleContainer>
            <ChannelImage>
                {video.username.charAt(0) ?? ''}
            </ChannelImage>
            <TextContainer>
                <Title>{video.title}</Title>
                <TextCard>{video.username}</TextCard>
                <TextCard>{video.views} views - {GetTimeDifference(video.created_at)} ago</TextCard>
            </TextContainer>
        </TitleContainer>
      </Container>
    )
}

export default VideoComponent;