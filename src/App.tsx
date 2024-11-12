import './App.css'

import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home'
import CreateAd from './components/Ad/Create'
import DeleteAd from './components/Ad/Delete'
import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    WebApp.expand();
    WebApp.MainButton.setText("Back To Homepage");
    WebApp.MainButton.show();
    WebApp.MainButton.onClick(()=> navigate("/"))
  }, []);
  return (
    <Routes>
        <Route path="/"  Component={() => <Home/>} />
        {/* Ads */}
        <Route path="/ad/create" Component={() => <CreateAd/>} />
        <Route path="/ad/update" Component={() => <CreateAd/>} />
        <Route path="/ad/delete" Component={() => <DeleteAd/>} />
        {/* Search */}
        <Route path="/search" Component={() => <DeleteAd/>} />
        <Route path="/search/:id" Component={() => <DeleteAd/>} />
        {/* profile  */}
        <Route path="/profile/ads" Component={() => <DeleteAd/>} />
        <Route path="/profile/watchlist" Component={() => <DeleteAd/>} />
        <Route path="/profile/filters" Component={() => <DeleteAd/>} />
    </Routes>
  )
}

export default App
