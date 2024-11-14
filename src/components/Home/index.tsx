import WebApp from "@twa-dev/sdk";
import "./home.css";
import { useNavigate } from "react-router-dom";
("@twa-dev/sdk");
export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h4>Welcome {WebApp?.initDataUnsafe?.user?.first_name}</h4>

      <div>
      <h3>Admin Setting:</h3>
      <div className="actions">
        <button style={{width:"100%"}} onClick={() => navigate("/search")}>Start the Crawler</button>
        <button onClick={() => navigate("/profile/crawl")}>Crawl Time</button>
        <button onClick={() => navigate("/ad/create")}>Create</button>
        <button onClick={() => navigate("/ad/delete")}>Delete</button>
        <button onClick={() => navigate("/ad/update")}>Update</button>
      </div>
     </div>
     
     <div>
     <hr/>
     <button style={{width:"100%"}} onClick={() => navigate("/search")}>Search</button>
      <h5>Profile:</h5>
      <div className="actions">
        <button onClick={() => navigate("/profile/ads")}>My ads</button>
        <button onClick={() => navigate("/profile/watchlist")}>Watchlist</button>
        <button onClick={() => navigate("/ad/update")}>Filters</button>
      </div>
     </div>
    </div>
  );
}
