import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

import {
    Container,
    ContainerVideos
} from "./styles";

function YourVideos() {
    const { login } = useContext(UserContext);

    return ( 
        
        <Container>
            {login?
                <ContainerVideos>
                    Gucci lets go Upload Video
                    
                    <div>
                        <input 
                            placeholder='Image'
                            type='link' 
                            // value={link} 
                            // onChange={(e) => setLink(e.target.value)}
                        />
                        {/* <div className='nameplaceholder'>Name</div> */}
                        <div>
                            <div>Preview</div>
                            <div></div>
                        </div>
                        <button>
                            save
                        </button>
                    </div>
                    <div>
                        <input 
                            placeholder='Title'
                            type='any' 
                            // value={title} 
                            // onChange={(e) => setTitle(e.target.value)}
                        />
                        {/* <div className='nameplaceholder'>Titlename</div> */}
                    </div>
                    <div>
                        <input 
                            placeholder='Channelname'
                            type='any' 
                            // value={user.name} 
                            // onChange={(e) => setUser(e.target.value)}
                        />
                        {/* <div className='nameplaceholder'>Channelname</div> */}
                    </div>
                    <div>
                        <input 
                            placeholder='Views'
                            type='any' 
                            // value={views} 
                            // onChange={(e) => setLink(e.target.value)}
                        />
                        {/* <div className='nameplaceholder'>Views</div> */}
                    </div>
                    <div>
                        <input 
                            placeholder='Time'
                            type='number' 
                            // value={time} 
                            // onChange={(e) => setLink(e.target.value)}
                        />
                        {/* <div className='nameplaceholder'>Time</div> */}
                    </div>
                    <button>
                        submit
                    </button>
                    
                </ContainerVideos>
            :
                <h2>
                    Access denied! Please Log-in or create an account.
                </h2>
            }
        </Container>
            
    )
}

export default YourVideos;