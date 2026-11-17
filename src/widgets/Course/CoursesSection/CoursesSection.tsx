import { Container, Section } from '@/shared/primitives';
import './coursesSection.scss';
import CourseGridSquare from '@/entities/course/ui/CourseGridSquare/CourseGridSquare';
import { Title } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import CoursesFilterToolbar from '@/widgets/Courses/ui/CoursesFilterToolbar';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectCourses, selectCoursesError, selectCoursesLoading } from '@/entities/course/model/courseSelector';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchCourses } from '@/entities/course/model/courseThunk';
import { CourseFilterCategory } from '@/features/course/course-filter/model/course-filter.types';
import { getCourseCategoryCounts } from '@/features/course/course-filter/lib/getCourseCategoryCounts';

interface CoursesSectionProps {
  className?: string;
}

function CoursesSection({
  className = ''
}: CoursesSectionProps): React.JSX.Element {
  const coursesSection = 'courses-section'

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const courses = useAppSelector(selectCourses)
  const coursesLoading = useAppSelector(selectCoursesLoading)
  const error = useAppSelector(selectCoursesError)

  const [filters, setFilters] = useState<{
    category: CourseFilterCategory;
    search: string;
  }>({
    category: 'all',
    search: '',
  });

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch]);

  const categoryCounts = useMemo(
    () => getCourseCategoryCounts(courses),
    [courses]
  )

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        filters.category === 'all' ||
        course.category === filters.category

      const searchTerm = filters.search.trim().toLowerCase()

      const matchesSearch =
        !searchTerm ||
        course.title.toLowerCase().includes(searchTerm) ||
        course.teacherId.toLowerCase().includes(searchTerm)

      return matchesCategory && matchesSearch
    })
  }, [courses, filters])

  console.log('Filters:', filters);
  console.log('All courses:', courses);
  console.log('Filtered courses:', filteredCourses);

  const handleFilterChange = useCallback(
    (category: CourseFilterCategory, search: string) => {
      setFilters({ category, search })
    }, []
  )

  return (
    <Section className={`${coursesSection} ${className}`}>
      <Container className={`${coursesSection}__container`}>
        <Title
          label={t('labels.enjoyYourStudying')}
          variant='centered'
          className={`${coursesSection}__title`}
        >
          {t('titles.ourOnlineCourses')}
        </Title>

        <CoursesFilterToolbar
          categoryCount={categoryCounts}
          onFilterChange={handleFilterChange}
        />

        <CourseGridSquare
          courses={filteredCourses}
          loading={coursesLoading}
          error={error}
        />
      </Container>
    </Section>
  );
}

export default CoursesSection;