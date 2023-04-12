import { useContext } from 'react';
import { UserControl } from '../../context/usercontrol';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

import { 
    MenuItem,
    ButtonIcon,
    Container,
    Menu,
    ButtonContainer,
    MenuHead,
    Text,
    ButtonIconArrow
} from './styles';

import ArrowIcon from '../../assets/next.png';
import UserIcon from '../../assets/accountuser.png';
import YTStudioIcon from '../../assets/ytstudio.png';
import SwitchAccountIcon from '../../assets/switchaccount.png';
import SignOutIcon from '../../assets/Signout.png';
import PurchasesIcon from '../../assets/purchases.png';
import YourDataIcon from '../../assets/yourdata.png';
import AppearanceIcon from '../../assets/appearance.png';
import LanguageIcon from '../../assets/language.png';
import RestrictedIcon from '../../assets/restricted.png';
import LocationIcon from '../../assets/globe.png';
import KeyboardIcon from '../../assets/keyboard.png';
import SettingsIcon from '../../assets/settings.png';
import HelpIcon from '../../assets/help.png';
import FeedbackIcon from '../../assets/feedback.png';


const uitemIcons: { [key: string]: string } = {
    Your_channel: UserIcon,
    YouTube_Studio: YTStudioIcon,
    Switch_account: SwitchAccountIcon,
    Sign_out: SignOutIcon,
    Payment_history: PurchasesIcon,
    Your_Data: YourDataIcon,
    Appearance_theme: AppearanceIcon,
    Language_English: LanguageIcon,
    Restricted_Mode: RestrictedIcon,
    Location_Brazil: LocationIcon,
    Keyboard_shortcuts: KeyboardIcon,
    Settings: SettingsIcon,
    Help: HelpIcon,
    Send_feedback: FeedbackIcon,
};

const uitems = [
    {name: 'Your channel', link: '/your_videos'},                              // 0
    {name: 'YouTube Studio', link: ''},                            // 1
    {name: 'Switch account', link: ''},                            // 2
    {name: 'Sign out', link: '/login'},                                  // 3
    {name: 'Payment history', link: ''},                  // 4
    {name: 'Your Data', link: ''},                      // 5
    {name: 'Appearance theme', link: ''},                  // 6
    {name: 'Language English', link: ''},                         // 7
    {name: 'Restricted Mode', link: ''},                      // 8
    {name: 'Location Brazil', link: ''},                          // 9
    {name: 'Keyboard shortcuts', link: ''},                        // 10
    {name: 'Settings', link: ''},                                  // 11
    {name: 'Help', link: ''},                                      // 12
    {name: 'Send feedback', link: ''},                              // 13

];

function PopupMenu() {
    const { user, logOut } = useContext(UserContext);
    const { openUser, setOpenUser } = useContext(UserControl);

    const navigate = useNavigate();

    return (
      <Container openUser={openUser}>

            <Menu openUser={openUser}>
                <MenuHead>
                    <ButtonContainer>
                        {user?.name?.charAt(0) ?? ''}
                    </ButtonContainer>
                    <Text>
                        <span>
                            {user?.name ?? ''} 
                            <br/> 
                            @{user?.name ?? ''} 
                        </span>
                        <span id='Manageyouraccount'>Manage your Google Account</span>
                    </Text>

                </MenuHead>
            </Menu>
            
            <Menu openUser={openUser}>
                {uitems.slice(0,4).map((items, index) => (
                    <MenuItem 
                        key={index} 
                        openUser={openUser} 
                        onClick={index === 3 ? () => { logOut(); setOpenUser(false); navigate('/login')} : undefined}>
                        <ButtonIcon 
                            alt="" 
                            src={uitemIcons[items.name.replace(' ', '_')]} />
                        <span> {items.name} </span>
                        { index === 2 && (
                            <ButtonIconArrow 
                                alt="" 
                                src={ArrowIcon} />
                        )}
                    </MenuItem>
                ))}
            </Menu>

            <Menu openUser={openUser}>
                {uitems.slice(4,6).map((items, index) => (
                    <MenuItem key={index} openUser={openUser}>
                        <ButtonIcon 
                            alt="" 
                            src={uitemIcons[items.name.replace(' ', '_')]} />
                        <span> {items.name} </span>
                    </MenuItem>
                ))}
            </Menu>

            <Menu openUser={openUser}>
                {uitems.slice(6,11).map((items, index) => (
                    <MenuItem key={index} openUser={openUser}>
                        <ButtonIcon 
                            alt="" 
                            src={uitemIcons[items.name.replace(' ', '_')]} />
                        <span> {items.name} </span>
                        {(index >= 0 && index <= 3) && (
                            <ButtonIconArrow 
                                alt="" 
                                src={ArrowIcon} />
                        )}
                    </MenuItem>
                ))}
            </Menu>

            <Menu openUser={openUser}>
                <MenuItem key={11} openUser={openUser}>
                    <ButtonIcon 
                        alt="" 
                        src={uitemIcons[uitems[11].name.replace(' ', '_')]} />
                    <span> {uitems[11].name} </span>
                </MenuItem>
            </Menu>

            <Menu openUser={openUser}>
                {uitems.slice(12,14).map((items, index) => (
                    <MenuItem key={index} openUser={openUser}>
                        <ButtonIcon 
                            alt="" 
                            src={uitemIcons[items.name.replace(' ', '_')]} />
                        <span> {items.name} </span>
                    </MenuItem>
                ))}
            </Menu>

      </Container>
    )
}

export default PopupMenu;