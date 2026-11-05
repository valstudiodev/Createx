import { useEffect, useState } from 'react';
import useEventCreateForm from '../model/useEventCreateForm';
import '../styles/eventCreateForm.scss';
import { ErrorMessage } from '@/shared/ui/Messages';
import EventAboutFields from './EventAboutFields';

interface EventCreateFormProps {
  className?: string;
}

function EventCreateForm({
  className = ''
}: EventCreateFormProps): React.JSX.Element {
  const eventCreateForm = 'event-create-form'

  const {
    formValues,
    setFormValues,
    eventCreateStatus,
    errors,
    handleChange,
    handleSubmit,
    handleAddLIstItem,
    handleListItemChange,
    handleRemoveListItem,
  } = useEventCreateForm()

  const [success, setSuccess] = useState<boolean>(false);

  const loading = eventCreateStatus === 'loading'
  const error = eventCreateStatus === 'error'

  useEffect(() => {
    if (eventCreateStatus !== 'success') return

    setSuccess(true)

    const timer = setTimeout(() => {
      setSuccess(false)
    }, 3000);
    return () => {
      clearTimeout(timer)
    }
  }, [eventCreateStatus]);

  return (
    <form
      className={`${eventCreateForm} ${className}`}
      onSubmit={handleSubmit}
    >
      <label className={`${eventCreateForm}__field`}>
        <input
          className={`${eventCreateForm}__input`}
          type="text"
          name='title'
          value={formValues.title}
          onChange={handleChange}
          placeholder='Add a title...'
        />
      </label>

      <div className={`${eventCreateForm}__row ${eventCreateForm}__schedule`}>
        <label className={`${eventCreateForm}__field`}>
          Date:
          <input
            className={`${eventCreateForm}__input`}
            type="date"
            name='date'
            value={formValues.date}
            onChange={handleChange}
          />
        </label>

        <label className={`${eventCreateForm}__field`}>
          Start time:
          <input
            className={`${eventCreateForm}__input`}
            type="time"
            name='startTime'
            value={formValues.startTime}
            onChange={handleChange}
          />
        </label>

        <label className={`${eventCreateForm}__field`}>
          End time:
          <input
            className={`${eventCreateForm}__input`}
            type="time"
            name='endTime'
            value={formValues.endTime}
            onChange={handleChange}
          />
        </label>
      </div>

      <label className={`${eventCreateForm}__field`}>
        <select
          className={`${eventCreateForm}__select`}
          value={formValues.type}
          onChange={handleChange}
          name='type'
        >
          <option value="">Select a type</option>
          <option value="master-class">Master-class</option>
          <option value="lecture">Lecture</option>
          <option value="workshop">Workshop</option>
        </select>
      </label>

      <div className={`${eventCreateForm}__row ${eventCreateForm}__price-format`}>
        <label className={`${eventCreateForm}__field`}>
          Price:
          <input
            className={`${eventCreateForm}__input`}
            type="text"
            name='price'
            value={formValues.price}
            onChange={handleChange}
            placeholder='Add a price...'
          />
        </label>

        <label className={`${eventCreateForm}__field`}>
          Format:
          <select
            className={`${eventCreateForm}__select`}
            value={formValues.format}
            onChange={handleChange}
            name='format'
          >
            <option value="">Select a format</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </label>
      </div>

      <EventAboutFields
        items={formValues.about}
        onChange={(items) =>
          setFormValues((prev) => ({
            ...prev,
            about: items,
          }))
        }
      />

      <div className={`${eventCreateForm}__list`}>
        {formValues.information?.map((item, index) => (
          <div
            className={`${eventCreateForm}__wrap`}
            key={index}
          >
            <textarea
              name='information'
              value={item}
              onChange={(e) => handleListItemChange(index, e.target.value)}
              className={`${eventCreateForm}__textarea`}
              placeholder='Add an information...'
            >
            </textarea>
            <button
              type='button'
              onClick={() => handleRemoveListItem(index)}
              className={`${eventCreateForm}__btn-remove`}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type='button'
          onClick={handleAddLIstItem}
          className={`${eventCreateForm}__btn-add`}
        >
          Add list item...
        </button>
      </div>


      <button
        type='submit'
        className={`${eventCreateForm}__btn`}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {success && (
        <div>Success!!!</div>
      )}

      {error && (
        <ErrorMessage message='Failed to create event.Please try again.' />
      )}
    </form>
  );
}

export default EventCreateForm;