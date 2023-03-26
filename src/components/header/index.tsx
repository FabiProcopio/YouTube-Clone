import { useContext } from 'react';
import {
     Container, 
     LogoContainer,
     ButtonContainer,
     ButtonIcon,
     SearchContainer,
     SearchInputContainer,
     SearchInput,
     SearchButton,
     HeaderButton,
     SignInButton,
     ButtonIconUser,
     ButtonContainerDot
} from "./styles";

import UserIcon from '../../assets/usericon.png';
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microphone.png';
import VideoIcon from '../../assets/video.png';
import BellIcon from '../../assets/bell.png';
import DotmenuIcon from '../../assets/dotmenu.png';
import { MenuContext } from '../../context/menucontrol';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';



function Header(){
    const navigate = useNavigate();
    const { login, logOut, user } = useContext(UserContext);
    // const userName = user?.name;
    // const firstChr = userName?.charAt(0);
    // console.log(firstChr);

    const { setOpenMenu, openMenu } = useContext(MenuContext);
    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    };


    return (
        <Container>
            <LogoContainer>
                <ButtonContainer 
                    onClick={handleMenuClick}
                    margin='0 10px 0 0' 
                    >
                    <ButtonIcon alt="" src={HamburgerIcon}/>
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px'}}
                    alt=''
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Search" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                {login?
                    <>
                        <ButtonContainer margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={VideoIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={BellIcon} />
                        </ButtonContainer>

                        <ButtonContainer margin='0 0 0 10px'>
                            {user?.name?.charAt(0) ?? ''}
                        </ButtonContainer>
                        <span onClick={() => logOut}>Logout</span>
                    </>
                :
                    <>
                        <ButtonContainerDot margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={DotmenuIcon} />
                        </ButtonContainerDot>

                        <SignInButton onClick={() => navigate('/login')}>
                            <ButtonIconUser alt="" src={UserIcon} />
                            <span> Sign in </span>
                        </SignInButton>
                    </>
                    
                }
            </HeaderButton>


        </Container>
    )
}

export default Header;