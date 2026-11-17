import { courseCategoryData } from '../model/course-filter.data';
import { CourseFilterCategory } from '../model/course-filter.types';
import '../styles/courseCategories.scss';
import CourseFilterButton from './CourseFilterButton';

interface CourseCategoriesProps {
  activeCategory: CourseFilterCategory;
  onCategoryChange: (category: CourseFilterCategory) => void;
  categoryCounts: Record<CourseFilterCategory, number>
  className?: string;
}

function CourseCategories({
  activeCategory,
  onCategoryChange,
  categoryCounts,
  className = ''
}: CourseCategoriesProps): React.JSX.Element {
  const courseCategories = 'course-categories'

  return (
    <div className={`${courseCategories} ${className}`}>
      <ul className={`${courseCategories}__list`}>
        {courseCategoryData.map((category) => (
          <li
            key={category.category}
            className={`${courseCategories}__item`}
          >
            <CourseFilterButton
              isActive={activeCategory === category.category}
              amount={categoryCounts[category.category]}
              onClick={() => onCategoryChange(category.category)}
              label={category.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseCategories;