import { AccordionItem } from "@/entities/event/model/event-types";
import '../styles/eventAboutFileds.scss';

interface EventAboutFieldsProps {
  items: AccordionItem[];
  onChange: (item: AccordionItem[]) => void;
}

function EventAboutFields({
  items,
  onChange
}: EventAboutFieldsProps): React.JSX.Element {
  const eventAboutFields = 'event-about-fields'

  const handleAdd = (): void => {
    onChange([
      ...items,
      {
        id: crypto.randomUUID(),
        title: '',
        content: '',
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
    <div className={eventAboutFields}>
      <h3 className={`${eventAboutFields}__title`}>Event themes</h3>

      {items.map((item, index) => (
        <fieldset
          key={item.id}
          className={`${eventAboutFields}__item`}
        >
          <legend> Theme {index + 1}</legend>

          <input
            type="text"
            placeholder="Theme title..."
            value={item.title}
            onChange={(e) => handleChange(item.id, 'title', e.target.value)}
            className={`${eventAboutFields}__input`}
          />

          <textarea
            placeholder="Theme description..."
            value={item.content}
            onChange={(e) => handleChange(item.id, 'content', e.target.value)}
            className={`${eventAboutFields}__textarea`}
          >
          </textarea>

          <button
            type="button"
            onClick={() => handleRemove(item.id)}
            className={`${eventAboutFields}__btn-remove`}
          >
            Remove theme
          </button>
        </fieldset>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className={`${eventAboutFields}__btn-add`}
      >
        Add theme
      </button>
    </div>
  );
}

export default EventAboutFields;