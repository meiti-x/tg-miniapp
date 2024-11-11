import React from "react";
import { useForm } from "react-hook-form";

export default function CreateAdForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Send data to your backend here
  };

  return (
    <form style={{ textAlign: "left" }} onSubmit={handleSubmit(onSubmit)}>
      <label>Category:</label>
      <select {...register("category", { required: true })}>
        <option value="">Select Category</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="villa">Villa</option>
        <option value="office">Office</option>
        {/* Add more categories as needed */}
      </select>
      {errors.category && <span>This field is required</span>}

      <label>Author:</label>
      <input type="text" {...register("author")} />

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
        <option value="detached">Detached</option>
        <option value="semi-detached">Semi-Detached</option>
        <option value="townhouse">Townhouse</option>
        <option value="condo">Condo</option>
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

      <label>Has Warehouse:</label>
      <input type="checkbox" {...register("has_warehouse")} />

      <label>Has Elevator:</label>
      <input type="checkbox" {...register("has_elevator")} />

      <label>Has Parking:</label>
      <input type="checkbox" {...register("has_parking")} />

      <label>Latitude:</label>
      <input type="number" step="0.000001" {...register("lat")} />

      <label>Longitude:</label>
      <input type="number" step="0.000001" {...register("lng")} />

      <button type="submit">Submit</button>
    </form>
  );
}
