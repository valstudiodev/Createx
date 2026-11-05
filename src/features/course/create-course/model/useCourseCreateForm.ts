import { useState } from "react";
import { CourseFormValues } from "./courseCreateForm.types";
import { RequestStatus } from "@/shared/types/types";
import { CreateCoursePayload } from "@/entities/course/model/course.types";
import { createCourse } from "../api/createCourseServise";
import { socialMediaConfig, SocialPlatform } from "@/shared/constants/socialLinks/socialLinks.types";


const initialState: CourseFormValues = {
  title: '',
  category: '',
  price: '',
  teacherName: '',
  image: '',
  position: '',
  specialty: '',
  rating: '',
  coursesCount: '',
  studentsCount: '',
  description: '',
  socialMedia: [],
  about: '',
  learningOutcomes: [],
  startDate: '',
  endDate: '',
  durationMonths: 0,
  lessonsCount: 0,
}

function useCourseCreateForm() {

  const [formValues, setFormValues] = useState<CourseFormValues>(initialState);

  const [courseCreateStatus, setCourseCreateStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const value = e.target.value

    const name = e.target.name

    setFormValues(
      (prev) => ({
        ...prev,
        [name]: value,
      })
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    setError(null)

    if (
      formValues.title.trim() === '' ||
      formValues.teacherName.trim() === ''
    ) {
      setError('Title and teacher name are required.')
      setCourseCreateStatus('error')
      return
    }

    if (formValues.category === '') {
      setError('Category is required')
      setCourseCreateStatus('error')
      return
    }

    if (
      formValues.price.trim() === '' ||
      formValues.rating.trim() === '' ||
      formValues.coursesCount.trim() === '' ||
      formValues.studentsCount.trim() === ''
    ) {
      setError('All numeric fields are required.')
      setCourseCreateStatus('error')
      return
    }

    const price = Number(formValues.price)
    const rating = Number(formValues.rating)
    const coursesCount = Number(formValues.coursesCount)
    const studentsCount = Number(formValues.studentsCount)

    if (
      !Number.isFinite(price) ||
      !Number.isFinite(rating) ||
      !Number.isInteger(coursesCount) ||
      !Number.isInteger(studentsCount)
    ) {
      setError('Please enter valid numbers.')
      setCourseCreateStatus('error')
      return
    }

    if (price <= 0) {
      setError('Price must be greater than zero.')
      setCourseCreateStatus('error')
      return
    }

    if (rating < 0 || rating > 5) {
      setError('Rating must be between 0 and 5.')
      setCourseCreateStatus('error')
      return
    }

    if (coursesCount < 0) {
      setError('Courses count cannot be negative.')
      setCourseCreateStatus('error')
      return
    }

    if (studentsCount < 0) {
      setError('Students count cannot be negative.')
      setCourseCreateStatus('error')
      return
    }

    const socialMedia = formValues.socialMedia.map(
      (platform) => socialMediaConfig[platform]
    )

    setCourseCreateStatus('loading')

    try {
      const payload: CreateCoursePayload = {
        title: formValues.title,
        category: formValues.category,
        price: Number(formValues.price),
        teacherName: formValues.teacherName,
        image: formValues.image,
        position: formValues.position,
        specialty: formValues.specialty,
        rating: Number(formValues.rating),
        coursesCount: Number(formValues.coursesCount),
        studentsCount: Number(formValues.studentsCount),
        description: formValues.description,
        socialMedia: socialMedia,
        about: formValues.about,
        learningOutcomes: formValues.learningOutcomes,
        startDate: formValues.startDate,
        endDate: formValues.endDate,
        durationMonths: formValues.durationMonths,
        lessonsCount: formValues.lessonsCount
      }

      await createCourse(payload)

      setCourseCreateStatus('success')

      setFormValues(initialState)

    } catch (error) {
      setCourseCreateStatus('error')
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Failed to create course')
      }
    }
  }

  const handleSocialMediaChange = (platform: SocialPlatform, checked: boolean): void => {
    setFormValues(
      (prev) => ({
        ...prev,
        socialMedia: checked
          ? [...prev.socialMedia, platform].filter(
            (item, index, items) => items.indexOf(item) === index,
          )
          : prev.socialMedia.filter((item) => item !== platform)
      })
    )
  }

  const handleListItemChange = (index: number, value: string): void => {
    setFormValues((prev) => ({
      ...prev,
      learningOutcomes: prev.learningOutcomes?.map((item, currentIndex) =>
        currentIndex === index ? value : item
      )
    }))
  }

  const handleAddListItem = (): void => {
    setFormValues((prev) => ({
      ...prev,
      learningOutcomes: [...prev.learningOutcomes ?? [], '']
    }))
  }

  const handleRemoveListItem = (index: number): void => {
    setFormValues((prev) => ({
      ...prev,
      learningOutcomes: prev.learningOutcomes?.filter((_, currentIndex) => currentIndex !== index)
    }))
  }

  return {
    formValues,
    courseCreateStatus,
    error,
    handleChange,
    handleSubmit,
    handleSocialMediaChange,
    handleAddListItem,
    handleRemoveListItem,
    handleListItemChange
  }

}

export default useCourseCreateForm