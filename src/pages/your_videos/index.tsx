import { UserContext } from '../../context/userContext';
import { useContext, useState, useEffect } from 'react';
import GetTimeDifference from '../../components/timeComponent';



import {
    Container,
    ContainerVideos,
    TitleUpload,
    ContainerVideoList,
    PreviewContainer,
    PreviewInput,
    TextContainer,
    CreateButton,
    ListLegend,
    ListItem
} from "./styles";

interface Video {
    video_id: string;
    user_id: string;
    title: string;
    description: string;
    imageUrl: string;
    created_at: string;
    views: string;
}

  
function YourVideos() {
    const [imageUrl, setImageUrl] = useState('');
    const [videos, setVideos] = useState<Video[]>([]);
    const { createVideo, login, token, user, getVideos} = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await getVideos(user.id);
                setVideos(response?.videos ?? []);
                setIsLoading(false);
                console.log(response.videos)
            } catch (error: any) {
                console.log('Error fetching videos', error);
            }
        };
        fetchVideos();
    }, [user.id, getVideos]);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!title ||!description||!imageUrl) {
            alert("Please fill out all fields!");
            return;
        }
        try {
            await createVideo(
                token,
                user.id,
                title,
                description,
                imageUrl
            );
            alert('Congratulations! Your Video was created.');
            setIsLoading(false);
            window.location.reload();
        } catch (error) {
                alert('Accound creation failed');
        }  
    };
    if (isLoading) {
        return <div> is loading... </div>;
    }

    return ( 
        
        <Container>
            
            {login?
                <>
                    <ContainerVideos>
                        <TitleUpload>Upload Video</TitleUpload>
                        
                        <div>
                            <PreviewContainer>
                                <div>Preview</div>
                                <PreviewInput hasImage={!!imageUrl}> 
                                    <img src={imageUrl} alt='' />
                                    <input
                                        placeholder='Image URL here...'
                                        type="text"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                    />
                                </PreviewInput>
                            </PreviewContainer>
                        </div>
                        <TextContainer>
                            <div>
                                <input 
                                    placeholder='Title'
                                    type='any' 
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <input 
                                    placeholder='Description'
                                    type='any' 
                                    value={description} 
                                    className={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </TextContainer>
                        
                        
                        
                        <CreateButton>
                            <form onSubmit={handleSubmit}>
                                <button>Create Video</button>
                            </form>
                        </CreateButton>
                        
                        
                        <TitleUpload>Your Videos</TitleUpload>
                        <ContainerVideoList>

                            <ListLegend>
                                <div>Thumbnails</div>
                                <div>Video Title</div>
                                <div>Views & Date</div>
                            </ListLegend>

                            {videos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                                .map((video) => (
                                    <div id='listitem' key={video.video_id}>
                                    <img src={video.imageUrl} alt='' />
                                    <ListItem>{video.title}</ListItem>
                                    <ListItem>{video.views} views - {GetTimeDifference(video.created_at)} ago</ListItem>
                                    </div>
                                ))
                            }
                        </ContainerVideoList>
                    </ContainerVideos>

                </>
            :
                <h2>
                    Access denied! Please Log-in or create an account.
                </h2>
            }

        </Container>
            
    )
}

export default YourVideos;