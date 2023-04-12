import GetTimeDifference from '../../components/timeComponent';
import { useContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { FilterContext } from "../../context/filterControl";
import { UserContext } from '../../context/userContext'
import FilterIcon from '../../assets/filterIcon.png';
import DotmenuIcon from '../../assets/dotmenu.png';
import {
    Container,
    MainBox,
    FilterBox,
    ResultsBox,
    FilterButton,
    ButtonIcon,
    FilterContent,
    FilterColumn,
    ColumnTitle,
    ColumnText,
    ResultRow,
    ResultImg,
    ResultText,
    TitleText,
    ChannelImage,
    ButtonContainerDot
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


function SearchResults() {
    const location = useLocation();
    const { setOpenFilter, openFilter } = useContext(FilterContext);
    const { searchVideos} = useContext(UserContext);
    const [videos, setVideos] = useState<video[]>([]);

    const handleFilterClick = () => {
        setOpenFilter(!openFilter);
    };

    
    useEffect(() => {
        if (location.state && location.state.videos) {
           setVideos(location.state.videos);
           console.log('videos state updated:', videos);
        } else {
           findVideos();
        }
    }, [location, videos]);

    const findVideos = async () => {
        try {
             const response = await searchVideos(`?search=${location.state.search}`);
             const videosArray = response?.videos ?? [];
             setVideos(videosArray);
             console.log();
        } catch (error: any) {
             console.log('Error finding videos', error);
             setVideos([]); // clear the videos state if there was an error
        }
    };
    

    return (    
        <Container>
            <MainBox openFilter={openFilter}>
                <FilterBox openFilter={openFilter}>
                    <FilterButton onClick={handleFilterClick}>
                            <ButtonIcon alt="" src={FilterIcon} />
                            <span> Filters </span>
                    </FilterButton>
                    <FilterContent openFilter={openFilter}>
                        <FilterColumn>
                            <ColumnTitle>UPLOAD DATE</ColumnTitle>
                            <ColumnText>
                                <span>Last hour</span>
                                <span>Today</span>
                                <span>This week</span>
                                <span>This month</span>
                                <span>This year</span>
                            </ColumnText>
                        </FilterColumn>
                        <FilterColumn>
                            <ColumnTitle>TYPE</ColumnTitle>
                            <ColumnText>
                                <span>Video</span>
                                <span>Channel</span>
                                <span>Playlist</span>
                                <span>Movie</span>
                            </ColumnText>
                        </FilterColumn>
                        <FilterColumn>
                            <ColumnTitle>Duration</ColumnTitle>
                            <ColumnText>
                                <span>Under 4 minutes</span>
                                <span>4 - 20 minutes</span>
                                <span>Over 20 minutes</span>
                            </ColumnText>
                        </FilterColumn>
                        <FilterColumn>
                            <ColumnTitle>Features</ColumnTitle>
                            <ColumnText>
                                <span>Live</span>
                                <span>4K</span>
                                <span>HD</span>
                                <span>Subtitles/CC</span>
                                <span>Creative Commons</span>
                                <span>360°</span>
                                <span>VR180</span>
                                <span>3D</span>
                                <span>HDR</span>
                                <span>Location</span>
                                <span>Purchased</span>
                            </ColumnText>
                        </FilterColumn>
                        <FilterColumn>
                            <ColumnTitle>SORT BY</ColumnTitle>
                            <ColumnText>
                                <span>Relevance</span>
                                <span>Upload date</span>
                                <span>View count</span>
                                <span>Rating</span>
                            </ColumnText>
                        </FilterColumn>
                    </FilterContent>
                </FilterBox>
                <ResultsBox>
                    {videos.length > 0 ? (
                        videos.map((video) => (
                        <ResultRow key={video.video_id}>
                            <ResultImg>
                                <img src={video.imageUrl} alt={video.title} />
                            </ResultImg>
                            <ResultText>
                                <TitleText>{video.title}</TitleText>
                                <span>{video.views} views - {GetTimeDifference(video.created_at)} ago</span>
                                <ChannelImage>
                                    {video.username?.charAt(0) ?? ''} 
                                </ChannelImage>
                                <span>{video.username}</span>
                                <span>{video.description}</span>
                            </ResultText>
                            <ButtonContainerDot>
                                <ButtonIcon alt="" src={DotmenuIcon} />
                            </ButtonContainerDot>
                        </ResultRow>
                        ))
                    ) : (
                        <p>{videos.length === 0 ? "No results found" : "Loading..."}</p>
                    )}
                </ResultsBox>
            </MainBox>
        </Container>
    )
}

export default SearchResults;