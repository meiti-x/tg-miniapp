import { useForm } from 'react-hook-form';
import api from '../../../lib/api';

export default function DeleteForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const {id} = data
    api.delete(`/ad/delete/${id}`).then().catch()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="id">Enter ID to Delete:</label>
      <input
        id="id"
        type="text"
        {...register('id', {
          required: 'ID is required',
          pattern: {
            value: /^[0-9]+$/,
            message: 'ID must be a number'
          }
        })}
      />
      <button type="submit">Confirm Delete</button>
    </form>
  );
}
