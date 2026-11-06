import { Course } from "../model/course.types";
import Teacher01 from "@/assets/images/teachers/teacher-01.webp";
import Teacher02 from "@/assets/images/teachers/teacher-02.webp";
import Teacher03 from "@/assets/images/teachers/teacher-03.webp";
import Teacher04 from "@/assets/images/teachers/teacher-04.webp";
import Teacher05 from "@/assets/images/teachers/teacher-05.webp";
import Teacher06 from "@/assets/images/teachers/teacher-06.webp";
import Teacher07 from "@/assets/images/teachers/teacher-07.webp";
import Teacher08 from "@/assets/images/teachers/teacher-08.webp";
import Teacher09 from "@/assets/images/teachers/teacher-09.webp";

export const courses: Course[] = [
  {
    id: 'course-001',
    image: Teacher01,
    category: 'marketing',
    title: 'The Ultimate Google Ads Training Course',
    price: 100,
    teacherName: 'Jerome Bell',
  },
  {
    id: 'course-002',
    image: Teacher02,
    category: 'management',
    title: 'Prduct Management Fundamentals',
    price: 480,
    teacherName: 'Marvin McKinney',
  },
  {
    id: 'course-003',
    image: Teacher03,
    category: 'hr',
    title: 'HR  Management and Analytics',
    price: 200,
    teacherName: 'Leslie Alexander Li',
  },
  {
    id: 'course-004',
    image: Teacher04,
    category: 'marketing',
    title: 'Brand Management & PR Communications',
    price: 530,
    teacherName: 'Kristin Watson',
  },
  {
    id: 'course-005',
    image: Teacher05,
    category: 'design',
    title: 'Graphic Design Basic',
    price: 500,
    teacherName: 'Guy Hawkins',
  },
  {
    id: 'course-006',
    image: Teacher06,
    category: 'management',
    title: 'Business Development Management',
    price: 400,
    teacherName: 'Dianne Russell',
  },
  {
    id: 'course-007',
    image: Teacher07,
    category: 'development',
    title: 'Highload Software Architecture',
    price: 600,
    teacherName: 'Brooklyn Simmons',
  },
  {
    id: 'course-008',
    image: Teacher08,
    category: 'hr',
    title: 'Human Resources – Selection and Recruitment',
    price: 150,
    teacherName: 'Kathryn Murphy',
  },
  {
    id: 'course-009',
    image: Teacher09,
    category: 'design',
    title: 'User Experience. Human-centered Design',
    price: 240,
    teacherName: 'Cody Fisher',
  },
];

