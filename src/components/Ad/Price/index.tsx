import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../lib/api';

const AdForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      ad_id: null,
      has_price: true,
      total_price: null,
      price_per_meter: null,
      mortgage: null,
      normal_price: null,
      weekend_price: null,
    }
  });

  const onSubmit = (data) => {
    const convertedData = {
        ...data,
        ad_id: parseInt(data.ad_id, 10),
        total_price: data.total_price ? parseInt(data.total_price, 10) : null,
        price_per_meter: data.price_per_meter ? parseInt(data.price_per_meter, 10) : null,
        mortgage: parseInt(data.mortgage, 10),
        normal_price: parseInt(data.normal_price, 10),
        weekend_price: data.weekend_price ? parseInt(data.weekend_price, 10) : null,
      };
  
    console.log("Form Submitted:", convertedData);
    api.post('/price',convertedData)
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Ad ID:
        <input
          type="number"
          {...register("ad_id", { required: "Ad ID is required" })}
        />
        {errors.ad_id && <p>{errors.ad_id.message}</p>}
      </label>

      <label>
        Has Price:
        <input
          type="checkbox"
          {...register("has_price")}
        />
      </label>

      <label>
        Total Price:
        <input
          type="number"
          {...register("total_price")}
        />
      </label>

      <label>
        Price Per Meter:
        <input
          type="number"
          {...register("price_per_meter")}
        />
      </label>

      <label>
        Mortgage:
        <input
          type="number"
          {...register("mortgage")}
        />
      </label>

      <label>
        Normal Price:
        <input
          type="number"
          {...register("normal_price")}
        />
      </label>

      <label>
        Weekend Price:
        <input
          type="number"
          {...register("weekend_price")}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdForm;
