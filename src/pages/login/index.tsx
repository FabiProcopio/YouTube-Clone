import { useState, useContext  } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { 
    MainContainerLogin,
    LoginContainer,
    LoginTitle,
    LoginInput,
    EmailBox,
    PasswordBox,
    ContainerButtons,
    LoginButton,
    SignUpButton
} from "./styles";
import GoogleIcon from '../../assets/google-logo.png'

function Login(){
    const { handleLogin } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await handleLogin(email, password);
            navigate('/home');
        } catch (error) {
            alert('Login failed');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    return (
        <MainContainerLogin>
            <LoginContainer>
                <LoginTitle>
                    <div>
                        <img alt='' src={GoogleIcon} className='googlelogo'/>
                    </div>
                    <h1>Sign in</h1>
                    <span>to continue to YouTube</span>
                </LoginTitle>
                <LoginInput>
                    <EmailBox>
                        <input 
                            placeholder='Email'
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyPress} 
                        />
                        <div className='emailplaceholder'>Email</div>
                    </EmailBox>
                    <PasswordBox>
                        <input
                            placeholder='Password'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                            />
                        <div className='passwordplaceholder'>Password</div>
                    </PasswordBox>
                    <span className="show">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={(e) => setShowPassword(e.target.checked)}
                            />
                        show password
                    </span>

                    <ContainerButtons>
                        <LoginButton>
                            <form onSubmit={handleSubmit}>
                                <button onClick={() => handleLogin(email, password)}>Sign in</button>
                            </form>
                        </LoginButton>
                        <SignUpButton>
                            <button onClick={() => navigate('/signup')}>Create Account</button>
                        </SignUpButton>
                    </ContainerButtons>

                </LoginInput>
            </LoginContainer>
        </MainContainerLogin>
    )
}

export default Login;