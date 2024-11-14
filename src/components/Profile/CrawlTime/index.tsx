import { useForm } from 'react-hook-form';

const CrawlTimeForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="crawlTime">Crawl Time (in minutes):</label>
          <input
            id="crawlTime"
            type="number"
            {...register('crawlTime', {
              required: 'Crawl time is required',
            })}
          />
          {errors.crawlTime && <p>{errors?.crawlTime?.message}</p>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CrawlTimeForm;
