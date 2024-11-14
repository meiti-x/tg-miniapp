import { useState } from "react";
import "./adlist.css";

const AdList = ({ ads }) => {
  const [selectedAd, setSelectedAd] = useState(null);

  const openModal = (ad) => {
    setSelectedAd(ad);
  };

  const closeModal = () => {
    setSelectedAd(null);
  };

  return (
    <div className="ad-list">
      {ads.map((ad) => (
        <div key={ad.id} className="ad-card" onClick={() => openModal(ad)}>
          <h3>{ad.title}</h3>
          <img src={ad.image}/>
          <p>Location: {ad.city}, {ad.neighborhood}</p>
          <p>Type: {ad.house_type}</p>
          <p>Price Category: {ad.category}</p>
        </div>
      ))}

      {selectedAd && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedAd.title}</h2>
            <p><strong>Category:</strong> {selectedAd.category}</p>
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
