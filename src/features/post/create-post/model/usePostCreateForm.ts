import { useState } from "react";
import { CreatePostPayload, PostFormErrors, PostFormValues } from "./createPost.types";
import { RequestStatus } from "@/shared/types/types";
import { validatePostForm } from "./validatePostForm";
import { createPost } from "../api/createPostService";
import { SocialPlatform } from "@/shared/constants/socialLinks/socialLinks.types";


const initialState: PostFormValues = {
  imageId: '',
  label: '',
  category: '',
  date: '',
  duration: '',
  title: '',
  text: '',
  action: '',
  paragraphs: [],
  quote: '',
  list: [],
  tags: [],
  share: [],
}

function usePostCreateForm() {

  const [formValues, setFormValues] = useState<PostFormValues>(initialState);

  const [postCreateStatus, setPostCreateStatus] = useState<RequestStatus>('idle');
  const [errors, setErrors] = useState<PostFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const name = e.target.name

    const value = e.target.value

    setFormValues(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const handleReset = (): void => {
    setFormValues({ ...initialState })
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    console.log('HANDLE SUBMIT WORKS');
    e.preventDefault()

    const validationErrors = validatePostForm(formValues)

    console.log('Validation errors:', validationErrors);
    console.log('Form values:', formValues);

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setPostCreateStatus('error')
      return
    }

    if (
      formValues.label === '' ||
      formValues.category === '' ||
      formValues.action === ''
    ) {
      setPostCreateStatus('error');
      return;
    }

    setPostCreateStatus('loading')

    console.log('Validation errors:', validationErrors);
    console.log('Form values:', formValues);

    try {
      const payload: CreatePostPayload = {
        imageId: formValues.imageId,
        label: formValues.label,
        category: formValues.category,
        date: formValues.date,
        // duration: formValues.duration?.trim(),
        title: formValues.title,
        text: formValues.text,
        action: formValues.action,
        paragraphs: formValues.paragraphs,
        quote: formValues.quote,
        list: formValues.list,
        tags: formValues.tags,
        share: formValues.share
      }
      console.log('5. Payload:', payload);
      console.log('6. Calling createPost');

      console.log('Payload:', payload);
      const postId = await createPost(payload)
      console.log('Post created successfully. ID:', postId);
      handleReset()
      setPostCreateStatus('success')

    } catch (error: unknown) {
      console.error('Failed to create post:', error);
      setPostCreateStatus('error')
    }
  }

  const handleAddParagraph = (): void => {
    setFormValues((prev) => ({
      ...prev,
      paragraphs: [...prev.paragraphs, '']
    }))
  }

  const handleParagraphChange = (index: number, value: string): void => {
    setFormValues((prev) => ({
      ...prev,
      paragraphs: prev.paragraphs.map((paragraph, currentIndex) =>
        currentIndex === index ? value : paragraph
      )
    }))
  }

  const handleRemoveParagraph = (index: number): void => {
    setFormValues((prev) => ({
      ...prev,
      paragraphs: prev.paragraphs.filter((_, currentIndex) => currentIndex !== index)
    }))
  }

  const handleAddListItem = (): void => {
    setFormValues((prev) => ({
      ...prev,
      list: [...prev.list, '']
    }))
  }

  const handleListItemChange = (index: number, value: string): void => {
    setFormValues((prev) => ({
      ...prev,
      list: prev.list.map((item, currentIndex) =>
        currentIndex === index ? value : item
      )
    }))
  }

  const handleRemoveListItem = (index: number): void => {
    setFormValues((prev) => ({
      ...prev,
      list: prev.list.filter((_, currentIndex) => currentIndex !== index)
    }))
  }

  const handleAddTag = (tag: string): void => {

    const trimmedTag = tag.trim()

    if (trimmedTag === '') return

    setFormValues((prev) => {
      if (prev.tags.includes(trimmedTag)) return prev;

      return {
        ...prev,
        tags: [...prev.tags, trimmedTag],
      };
    });
  }

  const handleRemoveTag = (tag: string): void => {
    setFormValues((prev) => ({
      ...prev,
      tags: prev.tags.filter((currentTag) => currentTag !== tag)
    }))
  }

  const handleAddShare = (platform: SocialPlatform): void => {
    setFormValues((prev) => {
      if (prev.share.includes(platform)) return prev;

      return {
        ...prev,
        share: [...prev.share, platform]
      }
    })
  }

  const handleRemoveShare = (platform: SocialPlatform): void => {
    setFormValues((prev) => ({
      ...prev,
      share: prev.share.filter((item) => item !== platform)
    }))
  }

  return {
    formValues,
    postCreateStatus,
    errors,
    handleChange,
    handleSubmit,
    handleAddParagraph,
    handleParagraphChange,
    handleRemoveParagraph,
    handleAddListItem,
    handleListItemChange,
    handleRemoveListItem,
    handleAddTag,
    handleRemoveTag,
    handleAddShare,
    handleRemoveShare
  }
}

export default usePostCreateForm;