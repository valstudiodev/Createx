import { EventFormErrors, EventFormValues } from "./eventCreateForm.types";


export function validateEventForm(values: EventFormValues) {
  const errors: EventFormErrors = {}

  if (values.title.trim() === '') {
    errors.title = 'Title is required.'
  }

  if (values.date.trim() === '') {
    errors.date = 'Date is required.'
  }

  if (values.startTime.trim() === '') {
    errors.startTime = 'Start time is required.'
  }

  if (values.endTime.trim() === '') {
    errors.endTime = 'End time is required.'
  }

  if (values.format.trim() === '') {
    errors.format = 'Format is required.'
  }

  if (values.type.trim() === '') {
    errors.type = 'Type is required.'
  }

  return errors
}