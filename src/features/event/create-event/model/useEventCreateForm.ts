import { useState } from "react";
import { EventFormErrors, EventFormValues } from "./eventCreateForm.types";
import { RequestStatus } from "@/shared/types/types";
import { CreateEventPayload, EventFormat, EventType } from "@/entities/event/model/event-types";
import { validateEventForm } from "./validateEventForm";
import { createEvent } from "../api/createEventService";


const initialState: EventFormValues = {
  id: crypto.randomUUID(),
  title: '',
  date: '',
  startTime: '',
  endTime: '',
  format: '',
  type: '',
  about: [],
  price: 0,
  information: [],
}

function useEventCreateForm() {

  const [formValues, setFormValues] = useState<EventFormValues>(initialState);

  const [eventCreateStatus, setEventCreateStatus] = useState<RequestStatus>('idle');
  const [errors, setErrors] = useState<EventFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {

    const { name, value } = e.target

    setFormValues((prev) => ({
      ...prev,
      [name]:
        name === 'about' || name === 'information'
          ? value.split('/n').filter(Boolean)
          : name === 'price'
            ? value === '' ? undefined : Number(value)
            : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const validationErrors = validateEventForm(formValues)

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setEventCreateStatus('loading')

    try {
      const payload: CreateEventPayload = {
        title: formValues.title,
        date: formValues.date,
        startTime: formValues.startTime,
        endTime: formValues.endTime,
        format: formValues.format as EventFormat,
        type: formValues.type as EventType,
        about: formValues.about,
        price: formValues.price,
        information: formValues.information
      }

      await createEvent(payload)
      setEventCreateStatus('success')
      setFormValues(initialState)
      setErrors({})

    } catch (error) {
      setEventCreateStatus('error')
      console.log('Failed to create event:', error);
    }
  }

  const handleAddLIstItem = (): void => {
    setFormValues((prev) => ({
      ...prev,
      information: [...prev.information ?? [], '']
    }))
  }

  const handleListItemChange = (index: number, value: string): void => {
    setFormValues((prev) => ({
      ...prev,
      information: prev.information?.map((item, currentIndex) =>
        currentIndex === index ? value : item
      )
    }))
  }

  const handleRemoveListItem = (index: number): void => {
    setFormValues((prev) => ({
      ...prev,
      information: prev.information?.filter((_, currentIndex) => currentIndex !== index)
    }))
  }

  return {
    formValues,
    setFormValues,
    eventCreateStatus,
    errors,
    handleChange,
    handleSubmit,
    handleAddLIstItem,
    handleListItemChange,
    handleRemoveListItem,
  }
}

export default useEventCreateForm;