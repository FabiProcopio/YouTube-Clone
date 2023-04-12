import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/userContext'
import { MenuContext } from '../../context/menucontrol';
import ShortsComponent from '../../components/shortsComponent';
import TagBar from '../../components/tagbar';
import VideoComponent from "../../components/videoComponent";
import ColoredShortsIcon from '../../assets/coloredshorts.png';
import DownArrowIcon from '../../assets/downArrowIcon.png';
import { FilterContext } from "../../context/filterControl";

import { 
    ButtonIcon,
    Container, 
    MainContainer, 
    MainShortsContainer, 
    ShortsContainer,
    ShortsTitle,
    ButtonMore,
    ShortsCards
} from "./styles"; 

interface video {
    video_id: string;
    user_id: string;
    title: string;
    description: string;
    imageUrl: string;
    created_at: string;
    username: string;
    views: string;
}

const shorts = [
    {
        imageUrl: 'https://i.ytimg.com/vi/Rx-NsvNNWQM/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDpIhLPJh4ssyBb24RbGRrAaKtzuQ', 
        title: 'BLIND GUARDIAN - GODS MACHINE TOUR',
        views: '286K',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/JWN8DQ5BzAY/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLACnVw06jvEmGMtT8GN5pa5vs2utw', 
        title: 'Try this in Art',
        views: '150K',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/zq1MW4RzK30/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDN9pwd2YSkGgXHv3b4RbYkBn7ziw', 
        title: 'All fake?',
        views: '486K',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/iEW8OwZg43I/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAaLIDzfS4ko-badstiVru2scGEkQ', 
        title: 'Animals that asked people for food',
        views: '60M',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/JP2m7CWAxHo/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCMeDR50NWSVf6Luki1si2tLnSysQ', 
        title: 'pikatchu pikatchu',
        views: '99M',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/LEyuPiidCjI/hq720_2.jpg?sqp=-oaymwEdCJYDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAYImKIUlnkKk5vzHN1522H6M2unA', 
        title: 'Happy birthday my soul ❤️',
        views: '44M',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/jEKOjUAAvuA/hq720_2.jpg?sqp=-oaymwEdCJcDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDJ249jER6CKvpEBo8RWKpAGohlIw', 
        title: 'Bebe Cat',
        views: '216M',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/CjlRH3ksUXk/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBgjx6llJ1Cl-ijGbBNLWBWI025DA', 
        title: 'Super Soccer Super Kicker',
        views: '10M',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/iKu4X04wGrc/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAS40Ki0rIVrSxKSSPguyceq_9NZA', 
        title: 'HE Saved This Scared DEER 😱 ',
        views: '31M',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/dIR7jeeMvzQ/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAiSLvoKLcWPqNpuFqStrwKKigBww', 
        title: 'Scaring a Lion🦁',
        views: '191M',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/qdPZMD7D9lk/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDZwsoC393hyKlkY2cqYNWrHdsZww', 
        title: 'Would you try this?',
        views: '198M',
    },
    {
        imageUrl: 'https://i.ytimg.com/vi/u-MhS55zeLc/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAyZ7UwG9etR4kcxTWBOO8jnCxMEg', 
        title: 'Borzoi',
        views: '6,9M',
    },
]


function Home() {
    const { openMenu } = useContext(MenuContext);
    const { setOpenFilter, openFilter } = useContext(FilterContext);
    const handleFilterClick = () => {
        setOpenFilter(!openFilter);
    };
    
    const { loadVideos} = useContext(UserContext);
    const [videos, setVideos] = useState<video[]>([]);
    
    useEffect(() => {
        const findVideos = async () => {
          try {
            const response = await loadVideos();
            setVideos(response?.videos ?? []);
            console.log('sucesss', response.videos);
          } catch (error: any) {
            console.log('Error finding videos', error);
          }
        };
        findVideos();
    }, [loadVideos]);
      
    return (
        <>
            <TagBar />
            <MainContainer>
                <Container openMenu={openMenu}>
                    {videos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                        .map((video) => (
                        <VideoComponent video={video} />
                    ))}
                </Container>
            </MainContainer>
            <MainShortsContainer>
                <ShortsTitle>
                    <ButtonIcon alt="" src={ColoredShortsIcon} />
                    <span> Shorts </span>
                </ShortsTitle>
                <ShortsContainer openMenu={openMenu} openFilter={openFilter}>  
                        <ShortsCards openMenu={openMenu} openFilter={openFilter}>
                            {shorts.map((shorts) => (
                                <ShortsComponent shorts={shorts}/>
                            ))}
                        </ShortsCards>
                        <ButtonMore onClick={handleFilterClick}> 
                            <ButtonIcon alt='' src={DownArrowIcon}/>
                        </ButtonMore>
                </ShortsContainer>

            </MainShortsContainer>

            <MainContainer>
                <Container openMenu={openMenu}>
                    {videos.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
                        .map((video) => (
                        <VideoComponent video={video} />
                    ))}
                </Container>
            </MainContainer>
        </>
    )
}

export default Home;