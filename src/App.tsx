import './App.css'

import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home'
import CreateAd from './components/Ad/Create'
import UpdateAd from './components/Ad/Update'
import DeleteAd from './components/Ad/Delete'
import MyAds from './components/Ad/My'
import AdPrice from './components/Ad/Price'
import AdPriceDetail from './components/Ad/Price/PriceDetail'
// import Crawl from './components/Profile/CrawlTime'
import Search from './components/Search'
import WatchList from './components/Profile/WatchList'

import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    WebApp.expand();
    WebApp.MainButton.setText("Back To Homepage");
    WebApp.MainButton.show();
    WebApp.MainButton.onClick(()=> navigate("/"))

    WebApp.BackButton.show
  }, []);
  return (
    <Routes>
        <Route path="/"  Component={() => <Home/>} />
        {/* Ads action: only for admin */}
        <Route path="/ad/create" Component={() => <CreateAd/>} />
        <Route path="/ad/update" Component={() => <UpdateAd/>} />
        <Route path="/ad/delete" Component={() => <DeleteAd/>} />
        <Route path="/ad/price" Component={() => <AdPrice/>} />
        <Route path="/ad/price/:id" Component={() => <AdPriceDetail/>} />
        {/* Search */}
        <Route path="/search" Component={() => <Search/>} />
        {/* profile  */}
        <Route path="/profile/ads" Component={() => <MyAds/>} />
        {/* <Route path="/profile/crawl" Component={() => <Crawl/>} /> */}
        <Route path="/profile/watchlist" Component={() => <WatchList/>} />
        <Route path="/profile/filters" Component={() => <DeleteAd/>} />
    </Routes>
  )
}

export default App
