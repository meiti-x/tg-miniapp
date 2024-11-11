import WebApp from "@twa-dev/sdk";
import "./home.css";
import { useNavigate } from "react-router-dom";
("@twa-dev/sdk");
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h4>Welcome {WebApp?.initDataUnsafe?.user?.first_name}</h4>
      <h5>Ad Actions:</h5>
      <div className="actions">
        <button onClick={() => navigate("/ad/create")}>Create ad</button>
        <button onClick={() => navigate("/ad/delete")}>Delete ad</button>
        <button onClick={() => navigate("/ad/update")}>Update ad</button>
      </div>
    </div>
  );
}
