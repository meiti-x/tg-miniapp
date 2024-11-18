import WebApp from "@twa-dev/sdk";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function Home() {
  const navigate = useNavigate();
  const [user,setUser]= useState(null)

  useEffect(()=>{
    api.get("/api/v1/user").then(res=>{
      setUser(res?.data?.message)
    })
  },[])

  return (
    <div>
      <h4>Welcome {WebApp?.initDataUnsafe?.user?.first_name}</h4>

     {
      user?.role?.user_role !== "simple" ? (
        <div>
        <h3>Admin Setting:</h3>
        <div className="actions">
          {/* <button style={{width:"100%"}} onClick={() => navigate("/search")}>Start the Crawler</button> */}
          {/* <button onClick={() => navigate("/profile/crawl")}>Crawl Time</button> */}
          <button onClick={() => navigate("/ad/create")}>Create</button>
          <button onClick={() => navigate("/ad/delete")}>Delete</button>
          <button onClick={() => navigate("/ad/price")}>Price</button>
          <button onClick={() => navigate("/profile/ads")}>My ads</button>

          {/* <button onClick={() => navigate("/ad/update")}>Update</button> */}
        </div>
     </div>
      ): undefined
     }
     
     <div>
     <hr/>
     <button style={{width:"100%"}} onClick={() => navigate("/search")}>Search</button>
      <h5>Profile:</h5>
      <div className="actions">
        <button onClick={() => navigate("/profile/watchlist")}>Watchlist</button>
        <button onClick={() => navigate("/ad/update")}>My Filters</button>
      </div>
     </div>
    </div>
  );
}
