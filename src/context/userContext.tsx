import { createContext, useEffect, useState } from 'react';
import api from '../api';


export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any ) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    

    const signUpUser = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', { name, email, password }).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
          }).catch((error) => {
            console.log('Sign up failed', error);
        })
    }

    const createVideo = (token: string, user_id: string, title: string, description: string, imageUrl: string) => {
        api.post(
            '/videos/create-video',
            { user_id, title, description, imageUrl },
            {headers: {
              Authorization: token
            }
            }
        )
        .then(() => {
            setLogin(true);
            localStorage.getItem('token');
            console.log('Video created');
        })
        .catch((error) => {
            console.log('Failed to create video', error);
        });
    }
    
    const getVideos = async (user_id: string) => {
        try {
            const response = await api.get('/videos/get-videos', { params: { user_id } });
            return response.data;
        } catch (error) {
            throw new Error('Error fetching videos');
        }
    };
     
    const searchVideos = async (search: string) => {
        try {
            const response = await api.get('/videos/search', { params: { search } });
            return response.data;
        } catch (error) {
            throw new Error('Error finding videos');
        }
    };

    const loadVideos = async () => {
        try {
          const response = await api.get('/videos/loadvideos');
          return response.data;
        } catch (error) {
          throw new Error('Error finding videos');
        }
    };
      
      
    
    const getUser = (token: string) => {
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error) => {
            console.log('User not authenticated', error)
        })
    }

    useEffect(() => {
        getUser(token);
    }, [token])

    const getUserById = (user_id: string) => {
        api.get('/user/find-user', { params: { user_id } }).then(({ data }) => {
          return data.name;
        }).catch((error) => {
          console.log(`Error fetching user with ID`, error);
          return null;
        });
    };
      

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch ((error) => {
            console.log('Login failed', error);
        })
    }

    return (
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut,
            signUpUser,
            createVideo,
            token,
            getVideos,
            searchVideos,
            loadVideos,
            getUserById
        }}>
            {children}
        </UserContext.Provider>
    )
}