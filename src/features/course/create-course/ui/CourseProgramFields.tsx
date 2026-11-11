import { AccordionItem } from "@/entities/event/model/event-types";
import '../styles/courseProgramFields.scss';

interface CourseProgramFieldsProps {
  items: AccordionItem[],
  onChange: (item: AccordionItem[]) => void
}

function CourseProgramFields({
  items,
  onChange
}: CourseProgramFieldsProps): React.JSX.Element {
  const courseProgramFields = 'course-program-fields'

  const handleAdd = (): void => {
    onChange([
      ...items,
      {
        id: crypto.randomUUID(),
        title: '',
        content: ''
      }
    ])
  }

  const handleChange = (id: string, field: 'title' | 'content', value: string): void => {
    onChange(
      items.map((item) =>
        item.id === id
          ? { ...item, [field]: value }
          : item,
      )
    )
  }

  const handleRemove = (id: string): void => {
    onChange(items.filter((item) => item.id !== id))
  }

  return (
    <div className={courseProgramFields}>
      <h3 className={`${courseProgramFields}__title`}>
        Program lessons
      </h3>

      {items.map((item, index) => (
        <fieldset
          key={index}
          className={`${courseProgramFields}__item`}
        >
          <legend className={`${courseProgramFields}__subtitle`}>
            Lesson {index + 1}
          </legend>

          <input
            type="text"
            placeholder="Lesson title..."
            value={item.title}
            onChange={(e) => handleChange(item.id, 'title', e.target.value)}
            className={`${courseProgramFields}__input`}
          />

          <textarea
            placeholder="Lesson description..."
            value={item.content}
            onChange={(e) => handleChange(item.id, 'content', e.target.value)}
            className={`${courseProgramFields}__textarea`}
          >
          </textarea>

          <button
            type="button"
            onClick={() => handleRemove(item.id)}
            className={`${courseProgramFields}__btn-delete`}
          >
            Delete lesson
          </button>
        </fieldset>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className={`${courseProgramFields}__btn-add`}
      >
        Add lesson
      </button>
    </div>
  )
}

export default CourseProgramFields;