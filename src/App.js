import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Menu from "./components/menu";
import { MenuContext } from './context/menucontrol';
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



function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <UserStorage>
      <BrowserRouter>
        <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
          <div className="App">
            <Header />
              <div id='HeaderStyleSite'>
                <Menu />
                <div id='MainContainersite'>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shorts' element={<Shorts />} />
                    <Route path='/subscriptions' element={<Subscriptions />} />
                    <Route path='/library' element={<Library />} />
                    <Route path='/history' element={<History />} />

                    <Route path='/login' element={<Login />} />

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
                  </Routes>
                </div>
              </div>

          </div>
        </MenuContext.Provider>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
