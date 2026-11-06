import './accordion.scss';
import { useState } from 'react';
import { AccordionItem } from '@/entities/event/model/event-types';
import AccordionItemSingle from './AccordionItem';

export type AccordionLabelType = 'Theme' | 'Lesson'

interface AccordionProps {
  items: AccordionItem[];
  itemLabel?: AccordionLabelType;
  className?: string
}

function Accordion({
  items,
  itemLabel,
  className = ''
}: AccordionProps) {

  const [openId, setOpenId] = useState<string | null>(null);

  const accordion = ['accordion', className]
    .filter(Boolean)
    .join(' ')

  const handleToggle = (id: string): void => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className={accordion}>
      {items.map((item, index) => (
        <AccordionItemSingle
          key={item.id}
          item={item}
          itemLabel={itemLabel}
          isOpen={openId === item.id}
          index={index}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  )
}

export default Accordion;