import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import CreateAd from './components/Ad/Create'

function App() {
  return (
    <Routes>
        <Route path="/"  Component={() => <Home/>} />
        {/* Ads */}
        <Route path="/ad/create" Component={() => <CreateAd/>} />
    </Routes>
  )
}

export default App
