import { useEffect, useState } from "react";
import AdList from "../../shared/AdList";
import api from "../../../lib/api";

const App = () => {
  const [ads,setAds]= useState()

  useEffect(()=>{
      api.get('/user/favorite').then(res=>{
      setAds(res.data.message)    
  })
  },[])
  return (
    <div className="App">
      <h1>My WatchList</h1>
      <AdList ads={ads} />
    </div>
  );
};

export default App;

