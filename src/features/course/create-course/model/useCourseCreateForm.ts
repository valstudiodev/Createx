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
  teacherId: '',
  image: '',
  about: '',
  learningOutcomes: [],
  startDate: '',
  endDate: '',
  durationMonths: '',
  lessonsCount: '',
  isFeatured: false,
  courseProgram: []
}

function useCourseCreateForm() {
  const [formValues, setFormValues] =
    useState<CourseFormValues>(initialState);

  const [courseCreateStatus, setCourseCreateStatus] =
    useState<RequestStatus>('idle');

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value, type } = e.target;

    const newValue =
      type === 'checkbox' && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setFormValues((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setError(null);

    if (!formValues.title.trim()) {
      setError('Course title is required.');
      setCourseCreateStatus('error');
      return;
    }

    if (!formValues.teacherId) {
      setError('Please select a teacher.');
      setCourseCreateStatus('error');
      return;
    }

    if (!formValues.category) {
      setError('Category is required.');
      setCourseCreateStatus('error');
      return;
    }

    if (!formValues.price.trim()) {
      setError('Price is required.');
      setCourseCreateStatus('error');
      return;
    }

    if (!formValues.startDate || !formValues.endDate) {
      setError('Course dates are required.');
      setCourseCreateStatus('error');
      return;
    }

    if (new Date(formValues.endDate) < new Date(formValues.startDate)) {
      setError('End date cannot be earlier than start date.');
      setCourseCreateStatus('error');
      return;
    }

    const price = Number(formValues.price);
    const durationMonths = formValues.durationMonths.trim()
      ? Number(formValues.durationMonths)
      : undefined;
    const lessonsCount = formValues.lessonsCount.trim()
      ? Number(formValues.lessonsCount)
      : undefined;

    if (
      !Number.isFinite(price) ||
      (durationMonths !== undefined &&
        !Number.isInteger(durationMonths)) ||
      (lessonsCount !== undefined &&
        !Number.isInteger(lessonsCount))
    ) {
      setError('Please enter valid numbers.');
      setCourseCreateStatus('error');
      return;
    }

    if (
      price <= 0 ||
      (durationMonths !== undefined && durationMonths <= 0) ||
      (lessonsCount !== undefined && lessonsCount <= 0)
    ) {
      setError('Numeric values must be greater than zero.');
      setCourseCreateStatus('error');
      return;
    }

    setCourseCreateStatus('loading');

    try {
      const payload: CreateCoursePayload = {
        title: formValues.title.trim(),
        category: formValues.category,
        price,
        teacherId: formValues.teacherId,
        image: formValues.image,
        isFeatured: formValues.isFeatured,
        details: {
          about: formValues.about,
          learningOutcomes: formValues.learningOutcomes,
          startDate: formValues.startDate,
          endDate: formValues.endDate,
          courseProgram: formValues.courseProgram,
          durationMonths,
          lessonsCount,
        },
      };

      await createCourse(payload);

      setCourseCreateStatus('success');
      setFormValues(initialState);
    } catch (error) {
      setCourseCreateStatus('error');

      setError(
        error instanceof Error
          ? error.message
          : 'Failed to create course.'
      );
    }
  };

  const handleListItemChange = (
    index: number,
    value: string
  ): void => {
    setFormValues((prev) => ({
      ...prev,
      learningOutcomes: prev.learningOutcomes?.map(
        (item, currentIndex) =>
          currentIndex === index ? value : item
      ),
    }));
  };

  const handleAddListItem = (): void => {
    setFormValues((prev) => ({
      ...prev,
      learningOutcomes: [...(prev.learningOutcomes ?? []), ''],
    }));
  };

  const handleRemoveListItem = (index: number): void => {
    setFormValues((prev) => ({
      ...prev,
      learningOutcomes: prev.learningOutcomes?.filter(
        (_, currentIndex) => currentIndex !== index
      ),
    }));
  };

  return {
    formValues,
    courseCreateStatus,
    error,
    handleChange,
    handleSubmit,
    handleAddListItem,
    handleRemoveListItem,
    handleListItemChange,
    setFormValues,
  };
}

export default useCourseCreateForm