import { useContext } from 'react';
import { MenuContext } from "../../context/menucontrol";
import {
     ButtonIcon, 
     Container, 
     MenuItem,
     Section,
     SectionOpenOnly,
     SignIn,
     SignInButton,
     LinkMenu,
     LinkButton
} from "./styles";
import HomeIcon from '../../assets/home.png';
import ShortsIcon from '../../assets/shorts.png';
import SubIcon from '../../assets/subscriptions.png';
import LibraryIcon from '../../assets/library.png';
import HistoryIcon from '../../assets/history.png';

import YourVideosIcon from '../../assets/accountuser.png';
import WatchLaterIcon from '../../assets/watch.png';
import PlaylistIcon from '../../assets/playlist.png';
import LikedVideosIcon from '../../assets/thumbsup.png';

import UserIcon from '../../assets/usericon.png';
import TrendingIcon from '../../assets/trending.png';
import MusicIcon from '../../assets/music.png';
import MoviesIcon from '../../assets/movies.png';
import LiveIcon from '../../assets/live.png';
import GamingIcon from '../../assets/gaming.png';
import NewsIcon from '../../assets/news.png';
import SportsIcon from '../../assets/sports.png';
import LearningIcon from '../../assets/learning.png';
import BrowseChannelIcon from '../../assets/browse.png';
import PremiumIcon from '../../assets/premium.png';
import YtMusicIcon from '../../assets/ytmusic.png';
import YtKidsIcon from '../../assets/kids.png';
import SettingIcon from '../../assets/settings.png';
import ReportIcon from '../../assets/reporthistory.png';
import HelpIcon from '../../assets/help.png';
import FeedbackIcon from '../../assets/feedback.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const itemIcons: { [key: string]: string } = {
    Home: HomeIcon,
    Shorts: ShortsIcon,
    Subscriptions: SubIcon,
    Library: LibraryIcon,
    History: HistoryIcon,
    
    Your_Videos: YourVideosIcon,
    Watch_later: WatchLaterIcon,
    Playlist: PlaylistIcon,
    Liked_Videos: LikedVideosIcon,
    
    Trending: TrendingIcon,
    Music: MusicIcon,
    Movies: MoviesIcon,
    Live: LiveIcon,
    Gaming: GamingIcon,
    News: NewsIcon,
    Sports: SportsIcon,
    Learning: LearningIcon,
    Browse_Channels: BrowseChannelIcon,
    Youtube_Premium: PremiumIcon,
    Youtube_Music: YtMusicIcon,
    Youtube_Kids: YtKidsIcon,
    Settings: SettingIcon,
    Report_History: ReportIcon,
    Help: HelpIcon,
    Send_Feedback: FeedbackIcon
};

const items = [
    {name: 'Home', link: '/home'},                                  // 0
    {name: 'Shorts', link: '/shorts'},                          // 1
    {name: 'Subscriptions', link: '/subscriptions'},            // 2
    {name: 'Library', link: '/library'},                        // 3
    {name: 'History', link: '/history'},                        // 4

    {name: 'Your Videos', link: '/your_videos'},                        // 4
    {name: 'Watch later', link: '/watch_later'},                        // 4
    {name: 'Playlist', link: '/playlist'},                        // 4
    {name: 'Liked Videos', link: '/liked_videos'},                        // 4

    {name: 'Trending', link: '/trending'},                      // 5
    {name: 'Music', link: '/music'},                            // 6
    {name: 'Movies', link: '/movies'},                          // 7
    {name: 'Live', link: '/live'},                              // 8
    {name: 'Gaming', link: '/gaming'},                          // 9
    {name: 'News', link: '/news'},                              // 10
    {name: 'Sports', link: '/sports'},                          // 11
    {name: 'Learning', link: '/learning'},                      // 12
    {name: 'Browse Channels', link: '/browse_channels'},        // 13
    {name: 'Youtube Premium', link: '/youtube_premium'},        // 14
    {name: 'Youtube Music', link: '/youtube_music'},            // 15
    {name: 'Youtube Kids', link: '/youtube_kids'},              // 16
    {name: 'Settings', link: '/settings'},                      // 17
    {name: 'Report History', link: '/report_history'},          // 18
    {name: 'Help', link: '/help'},                              // 19
    {name: 'Send Feedback', link: '/send_feedback'},            // 20
];

const links = [
     {name: 'About'},
     {name: 'Press'},
     {name: 'Copyright'},
     {name: 'Contact us'},
     {name: 'Creators'},
     {name: 'Advertise'},
     {name: 'Developers'},
     {name: 'Terms'},
     {name: 'Privacy'},
     {name: 'Policy & Safety'},
     {name: 'How YouTube works'},
     {name: 'Test new features'}
]

function Menu() {
    const { login } = useContext(UserContext);
    const { openMenu } = useContext(MenuContext);
    const navigate = useNavigate();


  return (

    <Container openMenu={openMenu}>
        <Section openMenu={openMenu}>
            {items.slice(0,3).map((items, index) => (
                <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(items.link)}>
                    <ButtonIcon alt="" src={itemIcons[items.name]} />
                    <span> {items.name} </span>
                </MenuItem>
            ))}
        </Section>
        <Section openMenu={openMenu}>
            {items.slice(3,5).map((items, index) => (
                <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(items.link)}>
                    <ButtonIcon alt="" src={itemIcons[items.name]} />
                    <span> {items.name} </span>
                </MenuItem>
            ))}
        </Section>


        <SectionOpenOnly openMenu={openMenu}>
            {login?
                <>
                    {items.slice(5,9).map((items, index) => (
                        <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(items.link)}>
                            <ButtonIcon alt="" src={itemIcons[items.name.replace(' ', '_')]} />
                            <span> {items.name} </span>
                        </MenuItem>
                    ))}
                </>
            :
                <SignIn openMenu={openMenu}>
                        <p  style={{fontSize: '15px'}}>
                            Sign in to like videos <br/>
                            comment, and subscribe.
                        </p>
                        <SignInButton onClick={() => navigate('/login')}>
                            <ButtonIcon alt="" src={UserIcon} />
                            <span> Sign in </span>
                        </SignInButton>
                </SignIn>
            }
        </SectionOpenOnly>
        
        <SectionOpenOnly openMenu={openMenu}>
            <h3>Explore</h3>
            {items.slice(9,17).map((items, index) => (
                <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(items.link)}>
                    <ButtonIcon alt="" src={itemIcons[items.name]} />
                    <span> {items.name} </span>
                </MenuItem>
            ))}
        </SectionOpenOnly>

        <SectionOpenOnly openMenu={openMenu}>
            {items.slice(17,18).map((items, index) => (
                <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(items.link)}>
                    <ButtonIcon alt="" src={itemIcons[items.name.replace(' ', '_')]} />
                    <span> {items.name} </span>
                </MenuItem>
            ))}
        </SectionOpenOnly>
        <SectionOpenOnly openMenu={openMenu}>
            <h3>More from YouTube</h3>
            {items.slice(18,21).map((items, index) => (
                <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(items.link)}>
                    <ButtonIcon alt="" src={itemIcons[items.name.replace(' ', '_')]} />
                    <span> {items.name} </span>
                </MenuItem>
            ))}
        </SectionOpenOnly>
        <SectionOpenOnly openMenu={openMenu}>
            {items.slice(21,25).map((items, index) => (
                <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(items.link)}>
                    <ButtonIcon alt="" src={itemIcons[items.name.replace(' ', '_')]} />
                    <span> {items.name} </span>
                </MenuItem>
            ))}
        </SectionOpenOnly>
        <SectionOpenOnly openMenu={openMenu}>
            <LinkMenu openMenu={openMenu}>
                {links.slice(0,7).map((links, index) => (
                    <LinkButton key={index} openMenu={openMenu}>
                        <span className='linkplaceholder'> {links.name} </span>
                    </LinkButton>
                ))}
                <div className="space"></div>
                {links.slice(7,12).map((links, index) => (
                    <LinkButton key={index} openMenu={openMenu}>
                        <span className='linkplaceholder'> {links.name} </span>
                    </LinkButton>
                ))}
                    <div className='copyright'>
                        © 2023 Google LLC
                    </div>
            </LinkMenu>
        </SectionOpenOnly>

    </Container>
  );
}

export default Menu;
