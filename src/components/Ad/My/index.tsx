import { hardcodedAds } from "../../../utils";
import AdList from "../../shared/AdList";

const App = () => {
  return (
    <div className="App">
      <h1>Ad Listings</h1>
      <AdList ads={hardcodedAds} />
    </div>
  );
};

export default App;

