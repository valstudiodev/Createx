import { ValueItemSingle } from "../model/aboutValuesSection.types";
import { CalendarIcon, ChatIcon, OnlineLearningIcon, TargetIcon } from "../ui/Icons";

export const valuesItems: ValueItemSingle[] = [
  {
    id: 'approach',
    icon: OnlineLearningIcon,
    title: 'Structured Approach',
    text: 'Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. '
  },
  {
    id: 'feedbacks',
    icon: TargetIcon,
    title: 'Professional Feedbacks',
    text: 'Culpa nostrud commodo ea consequat reprehenderit aliquip. '
  },
  {
    id: 'efficiency',
    icon: ChatIcon,
    title: 'Efficiency',
    text: 'Viverra scelerisque consequat net. Adipisicing esse consequat. '
  },
  {
    id: 'shedule',
    icon: CalendarIcon,
    title: 'Flexible Shedule',
    text: 'Aute eiusmod dolore dolore deserunt veniam ad deserunt. '
  }
]