import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../lib/api';

export default function PriceForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [priceType, setPriceType] = useState('buy');

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
        api.post('/api/v1/price',convertedData)
    };


    const handleTypeChange = (event) => {
        setPriceType(event.target.value);
        reset(); // Reset form fields when type changes
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="ad_id">ad id:</label>
            <input
                id="ad_id"
                type="number"
                {...register('ad_id', {required: 'required'})}
                className={errors.ad_id ? 'error-input' : ''}
            />
            <label htmlFor="priceType">price Type:</label>
            <select
                id="priceType"
                {...register('priceType', {required: true})}
                onChange={handleTypeChange}
                value={priceType}
            >
                <option value="buy"> Buy</option>
                <option value="mortgage"> Mortgage</option>
                <option value="rent"> Rent</option>
            </select>

            {priceType === 'buy' && (
                <>
                    <label htmlFor="total_price">total_price:</label>
                    <input
                        id="total_price"
                        type="number"
                        {...register('total_price', {required: 'required'})}
                        className={errors.total_price ? 'error-input' : ''}
                    />

                    <label htmlFor="price_per_meter">price per meter:</label>
                    <input
                        id="price_per_meter"
                        type="number"
                        {...register('price_per_meter', {required: 'required'})}
                        className={errors.price_per_meter ? 'error-input' : ''}
                    />
                </>
            )}

            {priceType === 'mortgage' && (
                <>
                    <label htmlFor="mortgage">قیمت رهن:</label>
                    <input
                        id="mortgage"
                        type="number"
                        {...register('mortgage', {required: 'required'})}
                        className={errors.mortgage ? 'error-input' : ''}
                    />

                    <label htmlFor="normal_price">normal price</label>
                    <input
                        id="normal_price"
                        type="number"
                        {...register('normal_price', {required: 'اجاره ماهانه الزامی است.'})}
                        className={errors.normal_price ? 'error-input' : ''}
                    />
                </>
            )}

            {priceType === 'rent' && (
                <>
                    <label htmlFor="normal_price">normal_price</label>
                    <input
                        id="normal_price"
                        type="number"
                        {...register('normal_price', {required: 'required'})}
                        className={errors.normal_price ? 'error-input' : ''}
                    />

                    <label htmlFor="weekend_price">قیمت روزای خاص:</label>
                    <input
                        id="weekend_price"
                        type="number"
                        {...register('weekend_price', {required: 'required'})}
                        className={errors.weekend_price ? 'error-input' : ''}
                    />
                </>
            )}

            <button type="submit">Submit</button>
        </form>
    );
}
