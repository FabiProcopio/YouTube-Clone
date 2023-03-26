import { useContext } from 'react';
import { MenuContext } from '../../context/menucontrol';
import ShortsComponent from '../../components/shortsComponent';
import TagBar from '../../components/tagbar';
import VideoComponent from "../../components/videoComponent";
import ColoredShortsIcon from '../../assets/coloredshorts.png';
import { 
    ButtonIcon,
    Container, 
    MainContainer, 
    MainShortsContainer, 
    ShortsContainer,
    ShortsTitle
} from "./styles"; 

const videos = [
    {
        image: '', 
        title: 'Goblin Slayer OST - MainTheme - ゴブリンスレイヤー',
        channel: 'Procsan',
        views: '7.7M',
        time: '4 years'
    },
    {
        image: '', 
        title: 'Goblin Slayer OST - MainTheme - ゴブリンスレイヤー',
        channel: 'Procsan',
        views: '7.7M',
        time: '4 years'
    },
    {
        image: '', 
        title: 'Goblin Slayer OST - MainTheme - ゴブリンスレイヤー',
        channel: 'Procsan',
        views: '7.7M',
        time: '4 years'
    },
    {
        image: '', 
        title: 'Goblin Slayer OST - MainTheme - ゴブリンスレイヤー',
        channel: 'Procsan',
        views: '7.7M',
        time: '4 years'
    },
    {
        image: '', 
        title: 'Goblin Slayer OST - MainTheme - ゴブリンスレイヤー',
        channel: 'Procsan',
        views: '7.7M',
        time: '4 years'
    },
    {
        image: '', 
        title: 'Goblin Slayer OST - MainTheme - ゴブリンスレイヤー',
        channel: 'Procsan',
        views: '7.7M',
        time: '4 years'
    },
    {
        image: '', 
        title: 'Goblin Slayer OST - MainTheme - ゴブリンスレイヤー',
        channel: 'Procsan',
        views: '7.7M',
        time: '4 years'
    },
    {
        image: '', 
        title: 'Goblin Slayer OST - MainTheme - ゴブリンスレイヤー',
        channel: 'Procsan',
        views: '7.7M',
        time: '4 years'
    },
]

function Home() {
    const { openMenu } = useContext(MenuContext);

    return (
        <>
            <TagBar />
            <MainContainer>
                <Container openMenu={openMenu}>
                    {videos.map ((video) => (
                        <VideoComponent video={video} />
                    ))}
                </Container>
            </MainContainer>
            <MainShortsContainer>
                <ShortsTitle>
                    <ButtonIcon alt="" src={ColoredShortsIcon} />
                    <span> Shorts </span>
                </ShortsTitle>
                <ShortsContainer openMenu={openMenu}>
                    
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                        <ShortsComponent />
                    
                </ShortsContainer>

            </MainShortsContainer>

            <MainContainer>
                <Container openMenu={openMenu}>
                    {videos.map ((video) => (
                        <VideoComponent video={video} />
                    ))}
                </Container>
            </MainContainer>
        </>
    )
}

export default Home;