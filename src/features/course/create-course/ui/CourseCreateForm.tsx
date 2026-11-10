import { SuccessMessage } from '@/shared/ui/Messages';
import useCourseCreateForm from '../model/useCourseCreateForm';
import '../styles/courseCreateForm.scss';
import { socialMediaConfig, SocialPlatform } from '@/shared/constants/socialLinks/socialLinks.types';
import { useEffect, useState } from 'react';

function CourseCreateForm(): React.JSX.Element {
  const courseCreateForm = 'course-create-form'

  const {
    formValues,
    courseCreateStatus,
    error,
    handleChange,
    handleSubmit,
    handleSocialMediaChange,
    handleAddListItem,
    handleRemoveListItem,
    handleListItemChange
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

      <label className={`${courseCreateForm}__field`}>
        <input
          type="text"
          name='teacherName'
          value={formValues.teacherName}
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          placeholder='Add a teacher name...'
        />
      </label>

      <label className={`${courseCreateForm}__field`}>
        <input
          type="url"
          name='image'
          value={formValues.image}
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          placeholder='Add a teacher image...'
        />
      </label>

      <label className={`${courseCreateForm}__field`}>
        <input
          type="text"
          name='position'
          value={formValues.position}
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          placeholder='Add a position...'
        />
      </label>

      <label className={`${courseCreateForm}__field`}>
        <input
          type="text"
          name='specialty'
          value={formValues.specialty}
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          placeholder='Add a specialty...'
        />
      </label>

      <label className={`${courseCreateForm}__field`}>
        <input
          type="number"
          name='rating'
          value={formValues.rating}
          min='0'
          max='5'
          step='0.1'
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          placeholder='Add a rating...'
        />
      </label>

      <label className={`${courseCreateForm}__field`}>
        <input
          type="number"
          name='coursesCount'
          value={formValues.coursesCount}
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          min='0'
          step='1'
          placeholder='Add courses count...'
        />
      </label>

      <label className={`${courseCreateForm}__field`}>
        <input
          type="number"
          name='studentsCount'
          value={formValues.studentsCount}
          onChange={handleChange}
          className={`${courseCreateForm}__input`}
          min='0'
          step='1'
          placeholder='Add students number...'
        />
      </label>

      <label className={`${courseCreateForm}__field`}>
        <textarea
          name="description"
          value={formValues.description}
          onChange={handleChange}
          className={`${courseCreateForm}__textarea`}
          placeholder='Add a description...'
        >
        </textarea>
      </label>

      <fieldset className={`${courseCreateForm}__social-media`}>
        <legend>Social media</legend>

        {(
          Object.keys(socialMediaConfig) as SocialPlatform[]
        ).map((platform) => (
          <label key={platform}>
            <input
              type="checkbox"
              name='socialMedia'
              value={platform}
              checked={formValues.socialMedia.includes(platform)}
              onChange={(e) => handleSocialMediaChange(platform, e.target.checked)}
            />
            {socialMediaConfig[platform].label}
          </label>
        ))
        }
      </fieldset>

      {/* about info */}
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
              className={`${courseCreateForm}__input`}
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