import { useEffect, useState } from "react";
import usePostCreateForm from "../model/usePostCreateForm";
import "../styles/postCreateForm.scss";
import { ErrorMessage, SuccessMessage } from "@/shared/ui/Messages";
import { socialPlatforms } from "@/shared/constants/socialLinks/socialLinks.types";

function PostCreateForm(): React.JSX.Element {
  const createPostForm = 'create-post-form'

  const {
    formValues,
    postCreateStatus,
    handleChange,
    errors,
    handleSubmit,
    handleAddParagraph,
    handleParagraphChange,
    handleRemoveParagraph,
    handleAddTag,
    handleRemoveTag,
    handleAddShare,
    handleRemoveShare,
    handleAddListItem,
    handleListItemChange,
    handleRemoveListItem,
  } = usePostCreateForm()

  const [success, setSuccess] = useState<boolean>(false);

  const [newTag, setNewTag] = useState<string>('');

  const loading = postCreateStatus === 'loading'
  const error = postCreateStatus === 'error'

  useEffect(() => {
    if (postCreateStatus !== 'success') return

    setSuccess(true)

    const timer = setTimeout(() => {
      setSuccess(false)
    }, 3000);
    return () => {
      clearTimeout(timer)
    }
  }, [postCreateStatus]);

  return (
    <form
      className={createPostForm}
      onSubmit={handleSubmit}
    >
      <label className={`${createPostForm}__field`}>
        <input
          type="url"
          className={`${createPostForm}__input`}
          name="imageId"
          value={formValues.imageId}
          onChange={handleChange}
          placeholder="Add an image..."
        />
        {errors.imageId && (
          <span className={`${createPostForm}__error`}>{errors.imageId}</span>
        )}
      </label>

      <label className={`${createPostForm}__field`}>
        <select
          name="label"
          value={formValues.label}
          onChange={handleChange}
          className={`${createPostForm}__select`}
        >
          <option value="">Select a label</option>
          <option value="podcast">Podcast</option>
          <option value="video">Video</option>
          <option value="article">Article</option>
        </select>
        {errors.label && (
          <span className={`${createPostForm}__error`}>{errors.label}</span>
        )}
      </label>

      <label className={`${createPostForm}__field`}>
        <select
          name="category"
          value={formValues.category}
          onChange={handleChange}
          className={`${createPostForm}__select`}
        >
          <option value="">Select a category</option>
          <option value="marketing">Marketing</option>
          <option value="management">Management</option>
          <option value="hr">HR & Recruting</option>
          <option value="design">Design</option>
          <option value="development">Development</option>
        </select>
        {errors.category && (
          <span className={`${createPostForm}__error`}>{errors.category}</span>
        )}
      </label>

      <label className={`${createPostForm}__field`}>
        <input
          type="date"
          className={`${createPostForm}__input`}
          name="date"
          value={formValues.date}
          onChange={handleChange}
          placeholder="Add a date..."
        />
        {errors.date && (
          <span className={`${createPostForm}__error`}>{errors.date}</span>
        )}
      </label>

      <label className={`${createPostForm}__field`}>
        <input
          type="text"
          className={`${createPostForm}__input`}
          name="duration"
          value={formValues.duration}
          onChange={handleChange}
          placeholder="Add a duration..."
        />
      </label>

      <label className={`${createPostForm}__field`}>
        <select
          name="action"
          value={formValues.action}
          onChange={handleChange}
          className={`${createPostForm}__select`}
        >
          <option value="">Select an action</option>
          <option value="listen">Listen</option>
          <option value="watch">Watch</option>
          <option value="read">Read</option>
        </select>
        {errors.action && (
          <span className={`${createPostForm}__error`}>{errors.action}</span>
        )}
      </label>

      <label className={`${createPostForm}__field`}>
        <input
          type="text"
          className={`${createPostForm}__input`}
          name="title"
          value={formValues.title}
          onChange={handleChange}
          placeholder="Add a title..."
        />
        {errors.title && (
          <span className={`${createPostForm}__error`}>{errors.title}</span>
        )}
      </label>

      <div className={`${createPostForm}__wrap`}>
        {formValues.paragraphs.map((paragraph, index) => (
          <div
            className={`${createPostForm}__paragraps`}
            key={index}
          >
            <textarea
              className={`${createPostForm}__textarea`}
              name="text"
              value={paragraph}
              onChange={(e) => handleParagraphChange(index, e.target.value)}
              placeholder="Add a paragraph..."
            >
            </textarea>
            <button
              type="button"
              onClick={() => handleRemoveParagraph(index)}
              className={`${createPostForm}__btn-remove`}
            >
              Remove
            </button>
            {errors.paragraphs && (
              <span className={`${createPostForm}__error`}>{errors.paragraphs}</span>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddParagraph}
          className={`${createPostForm}__btn-add`}
        >
          Add paragraph
        </button>
      </div>

      <label className={`${createPostForm}__field`}>
        <input
          type="text"
          className={`${createPostForm}__input`}
          name="quote"
          value={formValues.quote}
          onChange={handleChange}
          placeholder="Add a quote..."
        />
        {errors.quote && (
          <span className={`${createPostForm}__error`}>{errors.quote}</span>
        )}
      </label>

      <label className={`${createPostForm}__field`}>
        <textarea
          className={`${createPostForm}__textarea`}
          name="text"
          value={formValues.text}
          onChange={handleChange}
          placeholder="Add a short post description..."
        />

        {errors.text && (
          <span className={`${createPostForm}__error`}>
            {errors.text}
          </span>
        )}
      </label>

      <div className={`${createPostForm}__list`}>
        {formValues.list.map((item, index) => (
          <div
            className={`${createPostForm}__item`}
            key={index}
          >
            <textarea
              className={`${createPostForm}__textarea`}
              name="text"
              value={item}
              onChange={(e) => handleListItemChange(index, e.target.value)}
              placeholder="Add a list item..."
            >
            </textarea>
            <button
              type="button"
              onClick={() => handleRemoveListItem(index)}
              className={`${createPostForm}__btn-remove`}
            >
              Remove
            </button>
            {errors.list && (
              <span className={`${createPostForm}__error`}>{errors.list}</span>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddListItem}
          className={`${createPostForm}__btn-add`}
        >
          Add list item...
        </button>
      </div>

      <div className={`${createPostForm}__tags`}>
        <div className={`${createPostForm}__tags-wrap`}>
          <input
            type="text"
            value={newTag}
            className={`${createPostForm}__input`}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Enter a tag..."
          />

          <button
            type="button"
            onClick={() => {
              handleAddTag(newTag);
              setNewTag('');
            }}
            className={`${createPostForm}__btn-add`}
          >
            Add a tag
          </button>
        </div>

        <div className={`${createPostForm}__tags-list`}>
          {formValues.tags.map((tag) => (
            <div key={tag} className={`${createPostForm}__tag`}>
              <span>{tag}</span>

              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className={`${createPostForm}__btn-remove`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={`${createPostForm}__share`}>
        <span className={`${createPostForm}__label`}>
          Share on
        </span>

        <div className={`${createPostForm}__share-list`}>
          {socialPlatforms.map((platform) => {
            const isSelected = formValues.share.includes(platform);

            return (
              <label
                key={platform}
                className={`${createPostForm}__share-item`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  aria-label={`Share on ${platform}`}
                  className={`${createPostForm}__checkbox`}
                  onChange={() => {
                    if (isSelected) {
                      handleRemoveShare(platform);
                    } else {
                      handleAddShare(platform);
                    }
                  }}
                />

                <span>{platform}</span>
              </label>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        className={`${createPostForm}__btn`}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {success && (
        <SuccessMessage message="The post was created successfully." />
      )}

      {error && (
        <ErrorMessage message="Failed to create post. Please try again." />
      )}
    </form>
  );
}

export default PostCreateForm;