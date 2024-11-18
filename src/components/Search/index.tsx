import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import api from "../../lib/api";
import AdList from "../shared/AdList";
import Pagination from "../shared/Pagination";

const SearchForm: React.FC = () => {
  const [data,setData]= useState(null)
  const { control, handleSubmit, register,setValue,form } = useForm({
    defaultValues: {
      publisher_id: 1,
      min_published_at: "",
      max_published_at: "",
      category: "",
      author: "",
      city: "",
      neighborhood: "",
      house_type: "",
      min_meterage: 0,
      max_meterage: 0,
      min_rooms: 0,
      max_rooms: 0,
      min_year: 0,
      max_year: 0,
      min_floor: 0,
      max_floor: 0,
      min_total_floors: 0,
      max_total_floors: 0,
      has_warehouse: false,
      has_elevator: false,
      has_parking: false,
      lat: 0.0,
      lng: 0.0,
      radius: 0,
      offset: 0,
      limit: 10,
    },
  });

  const queryParams = new URLSearchParams(location.search);
  const pageFromQuery = queryParams.get("page");

  useEffect(function(){
    setValue("offset",pageFromQuery +1)
    handleSubmit(onSubmit)()
  },[pageFromQuery])

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    api.get("/api/v1/ad/search").then(res=>{
      setData(res.data)

    })
  };

  useEffect

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Publisher ID */}
      <label>Publisher</label>
      <select {...register("publisher_id")}>
        <option value={1}>Divar</option>
        <option value={2}>Sheypoor</option>
        <option value={3}>Miniapp</option>
      </select>

      {/* Min Published Date */}
      <label>Min Published At</label>
      <Controller
        name="min_published_at"
        control={control}
        render={({ field }) => <input type="date" {...field} />}
      />

      {/* Max Published Date */}
      <label>Max Published At</label>
      <Controller
        name="max_published_at"
        control={control}
        render={({ field }) => <input type="date" {...field} />}
      />

      {/* Category */}
      <label>Category</label>
      <select {...register("category")}>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
        <option value="mortgage">Mortgage</option>
        <option value="other">Other</option>
      </select>

      {/* Text Inputs */}
      <label>Author</label>
      <input type="text" {...register("author")} />

      <label>City</label>
      <input type="text" {...register("city")} />

      <label>Neighborhood</label>
      <input type="text" {...register("neighborhood")} />

      {/* House Type */}
      <label>House Type</label>
      <select {...register("house_type")}>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="other">Other</option>
      </select>

      {/* Numeric Inputs */}
      <label>Min Meterage</label>
      <input type="number" {...register("min_meterage")} />

      <label>Max Meterage</label>
      <input type="number" {...register("max_meterage")} />

      <label>Min Rooms</label>
      <input type="number" {...register("min_rooms")} />

      <label>Max Rooms</label>
      <input type="number" {...register("max_rooms")} />

      <label>Min Year</label>
      <input type="number" {...register("min_year")} />

      <label>Max Year</label>
      <input type="number" {...register("max_year")} />

      {/* Boolean Inputs */}
      <label>
        <input type="checkbox" {...register("has_warehouse")} />
        Has Warehouse
      </label>

      <label>
        <input type="checkbox" {...register("has_elevator")} />
        Has Elevator
      </label>

      <label>
        <input type="checkbox" {...register("has_parking")} />
        Has Parking
      </label>

      {/* Location */}
      <label>Latitude</label>
      <input type="number" step="0.01" {...register("lat")} />

      <label>Longitude</label>
      <input type="number" step="0.01" {...register("lng")} />

      <label>Radius</label>
      <input type="number" {...register("radius")} />

      {/* Pagination */}
      <label>Offset</label>
      <input type="number" {...register("offset")} />

      <label>Limit</label>
      <input type="number" {...register("limit")} />

      <button type="submit">Search</button>
    </form>
    <AdList ads={data?.message}/>
    {data?.total && (
      <Pagination totalPages={data?.total / 10} />
    )}
    
    </>
  );
};

export default SearchForm;
