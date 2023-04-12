import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import { MenuContext } from './context/menucontrol';
import { UserControl } from './context/usercontrol';
import { FilterContext } from './context/filterControl';
import BrowseChannels from './pages/browse_channels';
import Gaming from './pages/gaming';
import Help from './pages/help/inde';
import History from './pages/history';
import Home from './pages/home';
import Learning from './pages/learning';
import Library from './pages/library';
import Live from './pages/live';
import Movies from './pages/movies';
import Muisc from './pages/music';
import News from './pages/news';
import ReportHistory from './pages/report_history';
import Settings from './pages/settings';
import Shorts from './pages/shorts';
import Sports from './pages/sports';
import Subscriptions from './pages/subscriptions';
import SendFeedBack from './pages/send_feedback';
import Trending from './pages/trending';
import YoutubeKids from './pages/youtube_kids';
import YoutubeMusic from './pages/youtube_music';
import YoutubePremium from './pages/youtube_premium';
import { UserStorage } from './context/userContext';
import Login from './pages/login';
import PopupMenu from './components/popupMenu';
import SignUp from './pages/signup';
import YourVideos from './pages/your_videos';
import WatchLater from './pages/watch_later';
import Playlist from './pages/playlist';
import LikedVideos from './pages/liked_videos';
import SearchResults from './pages/search_results';



function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <UserStorage>
      <BrowserRouter>
        <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
        <UserControl.Provider value={{ openUser, setOpenUser }}>
        <FilterContext.Provider value={{ openFilter, setOpenFilter }}>
          <div className="App">
            <Header />
              <div id='HeaderStyleSite'>
                <Menu />
                <div id='MainContainersite'>
                  <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/shorts' element={<Shorts />} />
                    <Route path='/subscriptions' element={<Subscriptions />} />
                    <Route path='/library' element={<Library />} />
                    <Route path='/history' element={<History />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />

                    <Route path='/your_videos' element={<YourVideos />} />
                    <Route path='/watch_later' element={<WatchLater />} />
                    <Route path='/playlist' element={<Playlist />} />
                    <Route path='/liked_videos' element={<LikedVideos />} />

                    <Route path='/trending' element={<Trending />} />
                    <Route path='/music' element={<Muisc />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/live' element={<Live />} />
                    <Route path='/gaming' element={<Gaming />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/sports' element={<Sports />} />
                    <Route path='/learning' element={<Learning />} />

                    <Route path='/browse_channels' element={<BrowseChannels />} />
                    
                    <Route path='/youtube_premium' element={<YoutubePremium />} />
                    <Route path='/youtube_music' element={<YoutubeMusic />} />
                    <Route path='/youtube_kids' element={<YoutubeKids />} />

                    <Route path='/settings' element={<Settings />} />
                    <Route path='/report_history' element={<ReportHistory />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/send_feedback' element={<SendFeedBack />} />
                    
                    <Route path='/search_results' element={<SearchResults />} />
                  </Routes>
                </div>
                <PopupMenu />
              </div>

          </div>
        </FilterContext.Provider>
        </UserControl.Provider>
        </MenuContext.Provider>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
