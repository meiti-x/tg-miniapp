import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import CreateAd from './Ad/create'

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
