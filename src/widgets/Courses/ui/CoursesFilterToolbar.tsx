import { CourseFilterCategory } from "@/features/course/course-filter/model/course-filter.types";
import CourseCategories from "@/features/course/course-filter/ui/CourseCategories";
import { Search } from "@/shared/ui";
import { useState } from "react";
import './courseFilterToolbar.scss';

interface CoursesFilterToolbarProps {
  categoryCount: Record<CourseFilterCategory, number>;
  onFilterChange: (
    category: CourseFilterCategory,
    search: string
  ) => void;
  className?: string;
}

function CoursesFilterToolbar({
  categoryCount,
  onFilterChange,
  className = '',
}: CoursesFilterToolbarProps): React.JSX.Element {
  const coursesFilterToolbar = 'courses-filter-toolbar';

  const [activeCategory, setActiveCategory] =
    useState<CourseFilterCategory>('all');

  const [searchQuery, setSearchQuery] = useState('');

  // Update category and notify parent.
  function handleCategoryChange(
    category: CourseFilterCategory
  ): void {
    setActiveCategory(category);
    onFilterChange(category, searchQuery);
  }

  // Update search and notify parent after debounce.
  function handleSearchChange(search: string): void {
    setSearchQuery(search);
    onFilterChange(activeCategory, search);
  }

  return (
    <div className={`${coursesFilterToolbar} ${className}`}>
      <CourseCategories
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        categoryCounts={categoryCount}
      />

      <Search
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search courses..."
      />
    </div>
  );
}

export default CoursesFilterToolbar;

