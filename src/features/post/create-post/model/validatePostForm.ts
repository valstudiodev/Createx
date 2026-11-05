import { PostFormErrors, PostFormValues } from "./createPost.types";


export function validatePostForm(values: PostFormValues) {

  const errors: PostFormErrors = {}

  if (values.title.trim() === '') {
    errors.title = 'Title is required'
  }

  if (values.imageId.trim() === '') {
    errors.imageId = 'Image is required'
  }

  if (values.label === '') {
    errors.label = 'Label is required'
  }

  if (values.category === '') {
    errors.category = 'Category is required'
  }

  if (values.date === '') {
    errors.date = 'Date is required'
  }

  if (values.text.trim() === '') {
    errors.text = 'Text is required'
  }

  if (values.action === '') {
    errors.action = 'Action is required'
  }

  if (!values.paragraphs.some((paragraph) => paragraph.trim() !== '')) {
    errors.paragraphs = 'Paragraphs is required'
  }

  return errors

}