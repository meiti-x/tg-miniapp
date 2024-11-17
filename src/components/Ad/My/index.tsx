import AdList from "../../shared/AdList";
import { useEffect, useState } from "react";
import api from "../../../lib/api";

const App = () => {
    const [ads,setAds]= useState()

    useEffect(()=>{
        api.get('/api/v1/user/ad').then(res=>{
        setAds(res.data.message)    
    })
    },[])
  return (
    <div className="App">
      <h1>Ad Listings</h1>
      <AdList ads={ads} />
      {/* <Pagination/> */}
    </div>
  );
};

export default App;

