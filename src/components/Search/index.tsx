import { useState } from 'react';
import Pagination from '../shared/Pagination'; 
import AdList from '../shared/AdList';
import { hardcodedAds } from '../../utils';
import { useForm } from 'react-hook-form';

const SearchPage = () => {

  const [items, setItems] = useState(hardcodedAds);



  const { register, handleSubmit,getValues } = useForm()

  const saveFilters = () => {
    console.log('Filters saved!',getValues());
  };

  const onSubmit = (data) => {
    console.log(data)
  }
 

return (
    <div>
    <form className='search-form' onSubmit={handleSubmit(onSubmit)}>
      <label>
        Publisher Ad Key:
        <input
          type="text"
          {...register("publisherAdKey")}
        />
      </label>

      <label>
        Published At:
        <input
          type="date"
          {...register("publishedAt")}
        />
      </label>

      <label>
        Category:
        <input
          type="text"
          {...register("category")}
        />
      </label>

      <label>
        Author:
        <input
          type="text"
          {...register("author")}
        />
      </label>

      <label>
        URL:
        <input
          type="text"
          {...register("url")}
        />
      </label>

      <label>
        Title:
        <input
          type="text"
          {...register("title")}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          {...register("description")}
        />
      </label>

      <label>
        City:
        <input
          type="text"
          {...register("city")}
        />
      </label>

      <label>
        Neighborhood:
        <input
          type="text"
          {...register("neighborhood")}
        />
      </label>

      <label>
        House Type:
        <input
          type="text"
          {...register("houseType")}
        />
      </label>

      <label>
        Meterage:
        <input
          type="number"
          {...register("meterage")}
        />
      </label>

      <label>
        Rooms Count:
        <input
          type="number"
          {...register("roomsCount")}
        />
      </label>

      <label>
        Year:
        <input
          type="number"
          {...register("year")}
        />
      </label>

      <label>
        Floor:
        <input
          type="number"
          {...register("floor")}
        />
      </label>

      <label>
        Total Floors:
        <input
          type="number"
          {...register("totalFloors")}
        />
      </label>

      <label>
        Has Warehouse:
        <input
          type="checkbox"
          {...register("hasWarehouse")}
        />
      </label>

      <label>
        Has Elevator:
        <input
          type="checkbox"
          {...register("hasElevator")}
        />
      </label>

      <label>
        Has Parking:
        <input
          type="checkbox"
          {...register("hasParking")}
        />
      </label>

      <label>
        Latitude:
        <input
          type="number"
          {...register("lat")}
        />
      </label>

      <label>
        Longitude:
        <input
          type="number"
          {...register("lng")}
        />
      </label>
      <button type="submit">
        search
      </button>
    </form>
    <div>
    <button style={{background:"#333"}} onClick={saveFilters}>
        Save Filters
      </button>
      
    </div>
      <AdList ads={items}/>

      <Pagination totalPages={3}/>
    </div>
  );
};

export default SearchPage;
