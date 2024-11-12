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
      <h5>Profile:</h5>
      <div className="actions">
        <button style={{width:"100%",backgroundColor:'#444'}} onClick={() => navigate("/ad/create")}>Search</button>
      </div>
     </div>
     <div>
      <h5>Ad Actions:</h5>
      <div className="actions">
        <button onClick={() => navigate("/ad/create")}>Create</button>
        <button onClick={() => navigate("/ad/delete")}>Delete</button>
        <button onClick={() => navigate("/ad/update")}>Update</button>
      </div>
     </div>


     <div>
      <h5>Profile:</h5>
      <div className="actions">
        <button onClick={() => navigate("/ad/create")}>My ads</button>
        <button onClick={() => navigate("/ad/delete")}>Watchlist</button>
        <button onClick={() => navigate("/ad/update")}>Filters</button>
      </div>
     </div>
    </div>
  );
}
