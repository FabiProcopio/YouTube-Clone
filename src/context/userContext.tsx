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
            signUpUser
        }}>
            {children}
        </UserContext.Provider>
    )
}