import { useState, useEffect } from "react";
import "./adlist.css";
import api from "../../../lib/api";
import { useNavigate } from "react-router-dom";

const AdList = ({ ads }) => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [currentAd, setCurrentAd] = useState(null);
  const [price, setPrice] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (selectedAd) {
      // document.body.style.overflow = "hidden";
      getPrice(selectedAd.id)
      getAd(selectedAd.id)
      api.get(`/api/v1/ad/${selectedAd.id}`).then(res=>{
        console.log(res?.data)
        setIsBookmarked(res?.data?.message?.favorite_status)
      })
    } else {
      // document.body.style.overflow = "auto";
    }
    return () => {
      // document.body.style.overflow = "auto";
    };
  }, [selectedAd]);

  const openModal = (ad) => {
    setSelectedAd(ad);
  };

  const closeModal = () => {
    setSelectedAd(null);
  };

  const getAd = async (adId) => {
    api.get(`/api/v1/ad/${adId}`).then(data=>{
      setCurrentAd(data.data);
    })
  };


  const getPrice = async (adId) => {
    api.get(`/api/v1/price/${adId}`).then(data=>{
      setPrice(data.data.message);
    })
  };

  const toggleFavorite = async () => {
    try {
      if (isBookmarked){
        api.delete(`/api/v1/user/favorite/${selectedAd.id}`)
      }else{
        api.post(`/api/v1/user/favorite/${selectedAd.id}`)
      }

      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error("Error toggling favorite status:", error);
    }
  };

  return (
    <div className="ad-list">
      {ads?.map((ad) => (
        <div key={ad.id} className="ad-card" onClick={() => openModal(ad)}>
          <h3>{ad.title}</h3>
          <img src={ad.image} alt={ad.title} />
          <p>Location: {ad.city}, {ad.neighborhood}</p>
          <p>Type: {ad.house_type}</p>
          <p>Price Category: {ad.category}</p>
        </div>
      ))}

      {selectedAd && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedAd.title}</h2>

            <div className="actions">
              <button
                onClick={toggleFavorite}
                style={{ backgroundColor: isBookmarked ? "red" : "black", color: "white" }}
              >
                {isBookmarked ? "Remove Favorite" : "Add to Favorite"}
              </button>
              
              <button
                onClick={()=> navigate(`/price/${selectedAd.id}`) }
                style={{ backgroundColor:  "black", color: "white" }}
            
              >
                Price changes
              </button>
            </div>

          {price?.id && <p><strong>ID:</strong> {price?.id}</p>}
          {price?.mortgage && <p><strong>mortgage:</strong> {price?.mortgage}</p>}
          {price?.normal_price && <p><strong>normal_price:</strong> {price?.normal_price}</p>}
          {price?.price_per_meter && <p><strong>price_per_meter:</strong> {price?.price_per_meter}</p>}
          {price?.total_price && <p><strong>total price:</strong> {price?.total_price}</p>}
          {price?.weekend_price && <p><strong>weekend price:</strong> {price?.weekend_price}</p>}
    
            
            <p><strong>Category:</strong> {selectedAd.category}</p>
            {/* <p><strong>ID:</strong> {selectedAd.id}</p> */}
            <p><strong>Author:</strong> {selectedAd.author}</p>
            <p><strong>Description:</strong> {selectedAd.description}</p>
            <p><strong>Location:</strong> {selectedAd.city}, {selectedAd.neighborhood}</p>
            <p><strong>Type:</strong> {selectedAd.house_type}</p>
            <p><strong>Meterage:</strong> {selectedAd.meterage} sqm</p>
            <p><strong>Rooms:</strong> {selectedAd.rooms_count}</p>
            <p><strong>Year Built:</strong> {selectedAd.year}</p>
            <p><strong>Floor:</strong> {selectedAd.floor} / {selectedAd.total_floors}</p>
            <p><strong>Warehouse:</strong> {selectedAd.has_warehouse ? "Yes" : "No"}</p>
            <p><strong>Elevator:</strong> {selectedAd.has_elevator ? "Yes" : "No"}</p>
            <p><strong>Parking:</strong> {selectedAd.has_parking ? "Yes" : "No"}</p>
            <button onClick={closeModal}>Close</button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default AdList;
