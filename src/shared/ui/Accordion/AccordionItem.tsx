import { AccordionItem } from "@/entities/event/model/event-types";
import { AccordionLabelType } from "./Accordion";

export interface AccordionItemProps {
  item: AccordionItem;
  index: number;
  isOpen: boolean;
  itemLabel?: AccordionLabelType;
  onToggle: () => void;
}

function AccordionItemSingle({
  item,
  index,
  isOpen,
  itemLabel,
  onToggle
}: AccordionItemProps): React.JSX.Element {
  const accordionItem = 'accordion-item'

  return (
    <div className={accordionItem}>
      <button
        type="button"
        className={`${accordionItem}__btn`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className={`${accordionItem}__wrap`}>
          <span className={`${accordionItem}__icon`}>
            {isOpen ? '-' : '+'}
          </span>
          <div className={`${accordionItem}__label`}>
            <span>{itemLabel}</span>
            <span>{index + 1}.</span>
          </div>
        </div>
        <h4 className={`${accordionItem}__title`}>
          {item.title}
        </h4>
      </button>

      <div
        className={`${accordionItem}__content-wrapper`}
        data-state={isOpen ? 'open' : 'closed'}
      >
        {isOpen && (
          <p className={`${accordionItem}__content`}>
            {item.content}
          </p>
        )}
      </div>

    </div>
  )
}

export default AccordionItemSingle;