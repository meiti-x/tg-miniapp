import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../lib/api";
import WebApp from "@twa-dev/sdk";
import { useNavigate,useLocation } from "react-router-dom";

export function AdForm({ isUpdate = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(useLocation().search);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageBase64, setImageBase64] = useState("");
  const [adId, setAdId] = useState("");
  const [step, setStep] = useState(isUpdate ? 1 : 2);

  useEffect(()=>{
  if(params.get("adId")){
    setStep(2)
    setAdId(params.get("adId"))
  } 
  },[location])

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdIdSubmit = () => {
    if (adId) {
      setStep(2);
      navigate(`/ad/update?adId=${adId}`);
    }
  };

  const onSubmit = (data) => {
    const payload = {
      ...data,
      image: imageBase64,
      floor: Number(data.floor),
      lat: Number(data.lat),
      lng: Number(data.lng),
      meterage: Number(data.meterage),
      rooms_count: Number(data.rooms_count),
      year: Number(data.year),
      total_floors: Number(data.total_floors),
    };

    const apiCall = isUpdate
      ? api.put(`/api/v1/ad/${adId}`, payload)
      : api.post("/api/v1/ad", payload);

    apiCall
      .then(() => WebApp?.showAlert(isUpdate ? "Updated :)" : "Created :)"))
      .catch(() => WebApp?.showAlert("Task Successfully Failed"));
  };

  if (step === 1) {
    return (
      <div>
        <label>Enter Ad ID:</label>
        <input
          type="text"
          value={adId}
          onChange={(e) => setAdId(e.target.value)}
        />
        <button onClick={handleAdIdSubmit}>Next</button>
      </div>
    );
  }

  return (
    <form style={{ textAlign: "left" }} onSubmit={handleSubmit(onSubmit)}>
      <label>Category:</label>
      <select {...register("category", { required: true })}>
        <option value="">Select Category</option>
        <option value="rent">rent</option>
        <option value="buy">buy</option>
        <option value="mortgage">mortgage</option>
        <option value="other">other</option>
      </select>
      {errors.category && <span>This field is required</span>}

      <label>Author:</label>
      <input
        type="text"
        value={WebApp?.initDataUnsafe?.user?.first_name}
        {...register("author")}
      />

      <label>URL:</label>
      <input type="url" {...register("url")} />

      <label>Title:</label>
      <input type="text" {...register("title")} />

      <label>Description:</label>
      <textarea {...register("description")} />

      <label>City:</label>
      <input type="text" {...register("city")} />

      <label>Neighborhood:</label>
      <input type="text" {...register("neighborhood")} />

      <label>House Type:</label>
      <select {...register("house_type", { required: true })}>
        <option value="">Select House Type</option>
        <option value="apartment">apartment</option>
        <option value="villa">villa</option>
        <option value="other">other</option>
      </select>

      <label>Meterage:</label>
      <input type="number" {...register("meterage")} />

      <label>Rooms Count:</label>
      <input type="number" {...register("rooms_count")} />

      <label>Year:</label>
      <input type="number" {...register("year")} />

      <label>Floor:</label>
      <input type="number" {...register("floor")} />

      <label>Total Floors:</label>
      <input type="number" {...register("total_floors")} />

      <div style={{ display: "flex" }}>
        <label style={{ width: "100%" }} for="has_warehouse">
          Has Warehouse:
        </label>
        <input
          style={{ flex: "0 15 0" }}
          type="checkbox"
          id="has_warehouse"
          {...register("has_warehouse")}
        />
      </div>

      <div style={{ display: "flex" }}>
        <label style={{ width: "100%" }} for="has_elevator">
          Has Elevator:
        </label>
        <input
          style={{ flex: "0 15 0" }}
          type="checkbox"
          id="has_elevator"
          {...register("has_elevator")}
        />
      </div>

      <div style={{ display: "flex" }}>
        <label style={{ width: "100%" }} for="has_parking">
          Has Parking:
        </label>
        <input
          style={{ flex: "0 15 0" }}
          type="checkbox"
          id="has_parking"
          {...register("has_parking")}
        />
      </div>

      <label>Latitude:</label>
      <input type="number" step="0.000001" {...register("lat")} />

      <label>Longitude:</label>
      <input type="number" step="0.000001" {...register("lng")} />

      <label>Image:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

