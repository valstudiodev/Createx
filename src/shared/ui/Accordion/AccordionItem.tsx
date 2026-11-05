import { AccordionItem } from "@/entities/event/model/event-types";
import { AccordionLabelType } from "./Accordion";
import { useState } from "react";

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
          <span className={`${accordionItem}__label`}>
            {itemLabel} {index + 1}
          </span>
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
          <div className={`${accordionItem}__content`}>
            {item.content}
          </div>
        )}
      </div>

    </div>
  )
}

export default AccordionItemSingle;