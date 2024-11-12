import React from "react";
import { useForm } from "react-hook-form";
import api from "../../../lib/api";
import WebApp from "@twa-dev/sdk";

export default function CreateAdForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Send data to your backend here
    api
      .post("/ad")
      .then(() => WebApp?.showAlert("Created :)"))
      .catch(() => WebApp?.showAlert("Task Successfully Failed"));
  };

  return (
    <form style={{ textAlign: "left" }} onSubmit={handleSubmit(onSubmit)}>
      <label>Category:</label>
      <select {...register("category", { required: true })}>
        <option value="">Select Category</option>
        <option value="rent">rent</option>
        <option value="buy">buy</option>
        <option value="mortgage">mortgage</option>
        <option value="other">other</option>
        {/* Add more categories as needed */}
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
        {/* Add more house types as needed */}
      </select>
      {errors.house_type && <span>This field is required</span>}

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

      <button type="submit">Submit</button>
    </form>
  );
}
