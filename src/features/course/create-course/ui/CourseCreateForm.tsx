import { SuccessMessage } from '@/shared/ui/Messages';
import useCourseCreateForm from '../model/useCourseCreateForm';
import '../styles/courseCreateForm.scss';
import { useEffect, useState } from 'react';
import CourseProgramFields from './CourseProgramFields';
import { teachers } from '@/entities/teacher/data/teacher.data';

function CourseCreateForm(): React.JSX.Element {
  const courseCreateForm = 'course-create-form'

  const {
    formValues,
    courseCreateStatus,
    error,
    handleChange,
    handleSubmit,
    handleAddListItem,
    handleRemoveListItem,
    handleListItemChange,
    setFormValues
  } = useCourseCreateForm()

  const [success, setSuccess] = useState<boolean>(false);

  const loading = courseCreateStatus === 'loading'
  const errorStatus = courseCreateStatus === 'error'

  useEffect(() => {
    if (courseCreateStatus !== 'success') return

    setSuccess(true)

    const timer = setTimeout(() => {
      setSuccess(false)
    }, 3000);
    return () => {
      clearTimeout(timer)
    }
  }, [courseCreateStatus]);


  return (
    <form
      className={courseCreateForm}
      onSubmit={handleSubmit}
    >

      <label className={`${courseCreateForm}__field`}>
        <select
          name="teacherId"
          value={formValues.teacherId}
          onChange={handleChange}
          className={`${courseCreateForm}__select`}
          required
        >
          <option value="">Select teacher</option>

          {teachers.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.name}
            </option>
          ))}
        </select>
      </label>

      <label className={`${courseCreateForm}__field`}>
        <select
          name='category'
          value={formValues.category}
          onChange={handleChange}
          className={`${courseCreateForm}__select`}>
          <option value="">Select category</option>
          <option value="marketing">Marketing</option>
          <option value="management">Management</option>
          <option value="hr">HR & Recruting</option>
          <option value="design">Design</option>
          <option value="development">Development</option>
        </select>
      </label>

      <label className={`${courseCreateForm}__field`}>
        <input
          type="text"
          name='title'
          value={formValues.title}
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          placeholder='Add title...'
        />
      </label>



      <label className={`${courseCreateForm}__field`}>
        <input
          type="number"
          name='price'
          value={formValues.price}
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          step='any'
          min='0'
          placeholder='Add price...'
        />
      </label>

      {/* about info */}
      <h2 className={`${courseCreateForm}__title`}>
        Course information:
      </h2>
      <label className={`${courseCreateForm}__field`}>
        <textarea
          name="about"
          value={formValues.about}
          onChange={handleChange}
          className={`${courseCreateForm}__textarea`}
          placeholder='Add an about description...'
        >
        </textarea>
      </label>


      <div className={`${courseCreateForm}__wrap`}>
        <h3 className='mb-2 text-xl'>You will learn item:</h3>
        {formValues.learningOutcomes?.map((item, index) => (
          <div
            key={index}
            className={`${courseCreateForm}__item`}
          >
            <input
              type="text"
              name='learningOutcomes'
              value={item}
              onChange={(e) => handleListItemChange(index, e.target.value)}
              className={`${courseCreateForm}__input mb-2`}
              placeholder='Add a list item...'
            />
            <button
              type='button'
              onClick={() => handleRemoveListItem(index)}
              className={`${courseCreateForm}__btn-remove`}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type='button'
          onClick={handleAddListItem}
          className={`${courseCreateForm}__btn-add`}
        >
          Add list item...
        </button>
      </div>

      {/* course info card */}
      <div className={`${courseCreateForm}__dates`}>
        <label className={`${courseCreateForm}__field`}>
          Start date:
          <input
            type="date"
            name='startDate'
            value={formValues.startDate}
            onChange={handleChange}
            className={`${courseCreateForm}__input`}
          />
        </label>

        <label className={`${courseCreateForm}__field`}>
          End date:
          <input
            type="date"
            name='endDate'
            value={formValues.endDate}
            onChange={handleChange}
            className={`${courseCreateForm}__input`}
          />
        </label>

        <label className={`${courseCreateForm}__field`}>
          Months:
          <input
            type="text"
            name='durationMonths'
            value={formValues.durationMonths}
            onChange={handleChange}
            className={`${courseCreateForm}__input`}
            placeholder='Add months...'
          />
        </label>

        <label className={`${courseCreateForm}__field`}>
          Lessons:
          <input
            type="text"
            name='lessonsCount'
            value={formValues.lessonsCount}
            onChange={handleChange}
            className={`${courseCreateForm}__input`}
            placeholder='Add a count of lessons...'
          />
        </label>

      </div>

      <h2 className={`${courseCreateForm}__title`}>
        Course program:
      </h2>
      <CourseProgramFields
        items={formValues.courseProgram}
        onChange={(items) =>
          setFormValues((prev) => ({
            ...prev,
            courseProgram: items
          }))
        }
      />

      <label className={`${courseCreateForm}__checkbox`}>
        isFeatured
        <input
          type="checkbox"
          name='isFeatured'
          checked={formValues.isFeatured}
          onChange={handleChange}
        />
      </label>



      <button
        type='submit'
        disabled={loading}
        className={`${courseCreateForm}__btn`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {errorStatus && (
        error
      )}

      {success && (
        <SuccessMessage message='Course created successfully!!!' />
      )}
    </form>
  );
}

export default CourseCreateForm;