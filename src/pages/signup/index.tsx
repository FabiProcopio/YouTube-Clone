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
    SignUpButton,
    NameBox,
    FootnoteContainer,
    RightContainer,
    Contentbox,
    Googlead
} from "./styles";
import GoogleIcon from '../../assets/google-logo.png'
import GoogleImage from '../../assets/googleimage.png'

function SignUp(){
    const { signUpUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await signUpUser(name, email, password);
            navigate('/login');
        } catch (error) {
            alert('Accound creation failed');
        }
    };

    
    return (
        <>
            <MainContainerLogin>
                <Contentbox>
                    <LoginContainer>
                        <LoginTitle>
                            <div>
                                <img alt='' src={GoogleIcon} className='googlelogo'/>
                            </div>
                            <h1>Create your Google Account</h1>
                            <span>to continue to YouTube</span>
                        </LoginTitle>
                        <LoginInput>
                            <NameBox>
                                <input 
                                    placeholder='Name'
                                    type='any' 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                    
                                />
                                <div className='nameplaceholder'>Name</div>
                            </NameBox>
                            <EmailBox>
                                <input 
                                    placeholder='Email'
                                    type='email' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                />
                                <div className='emailplaceholder'>Email</div>
                            </EmailBox>
                            <PasswordBox>
                                <input
                                    placeholder='Password'
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    
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
                                        <button>Create Account</button>
                                    </form>
                                </LoginButton>
                                <SignUpButton>
                                    <button onClick={() => navigate('/login')}>Sign in instead</button>
                                </SignUpButton>
                            </ContainerButtons>

                        </LoginInput>
                    </LoginContainer>
                    <Googlead>
                        <img alt='' src={GoogleImage}/>
                        <div>
                            One account. All of Google <br/>
                            working for you.
                        </div>
                    </Googlead>
                </Contentbox>
            </MainContainerLogin>
            <FootnoteContainer>
                <div>
                    English (United States)     ▾
                </div>
                <RightContainer>
                    <div>
                        Help
                    </div>
                    <div>
                        Privacy
                    </div>
                    <div>
                        Terms
                    </div>
                </RightContainer>
            </FootnoteContainer>
        </>
    )
}

export default SignUp;