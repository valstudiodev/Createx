import { Course, CourseDetailsInterface } from "../model/course.types";
import Teacher01 from "@/assets/images/teachers/teacher-01.webp";
import Teacher02 from "@/assets/images/teachers/teacher-02.webp";
import Teacher03 from "@/assets/images/teachers/teacher-03.webp";
import Teacher04 from "@/assets/images/teachers/teacher-04.webp";
import Teacher05 from "@/assets/images/teachers/teacher-05.webp";
import Teacher06 from "@/assets/images/teachers/teacher-06.webp";
import Teacher07 from "@/assets/images/teachers/teacher-07.webp";
import Teacher08 from "@/assets/images/teachers/teacher-08.webp";
import Teacher09 from "@/assets/images/teachers/teacher-09.webp";
import { socialLinks } from "@/shared/constants/socialLinks/sociallinks.data";

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

export const coursesDetails: CourseDetailsInterface[] = [
  {
    id: 'course-001',
    image: Teacher01,
    category: 'design',
    title: '',
    price: 0,
    teacherName: 'Jerome Bell',
    position: 'Course curator',
    specialty: 'Senior UX designer in IT Product Company',
    rating: 4.9,
    coursesCount: 4,
    studentsCount: 350,
    description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
    socialMedia: socialLinks
  },
  {
    id: 'course-002',
    image: Teacher02,
    category: 'management',
    title: '',
    price: 0,
    teacherName: 'Marvin McKinney',
    position: 'Business Management Consultant',
    specialty: 'Business Management',
    rating: 4.9,
    coursesCount: 10,
    studentsCount: 520,
    description: 'A business management professional with extensive experience in team leadership, strategic planning, and organizational development. She teaches students how to make informed decisions and manage teams effectively.',
    socialMedia: socialLinks
  },
  {
    id: 'course-003',
    image: Teacher03,
    category: 'hr',
    title: '',
    price: 0,
    teacherName: 'Leslie Alexander Li',
    position: 'Senior Marketing Specialist',
    specialty: 'Digital Marketing',
    rating: 4.3,
    coursesCount: 3,
    studentsCount: 180,
    description: 'An experienced marketing specialist who helps students develop practical digital marketing skills, create effective marketing strategies, and grow successful businesses.',
    socialMedia: socialLinks
  },
  {
    id: 'course-004',
    image: Teacher04,
    category: 'marketing',
    title: '',
    price: 0,
    teacherName: 'Kristin Watson',
    position: 'Senior Marketing Specialist',
    specialty: 'Digital Marketing',
    rating: 4.3,
    coursesCount: 3,
    studentsCount: 180,
    description: 'An experienced marketing specialist who helps students develop practical digital marketing skills, create effective marketing strategies, and grow successful businesses.',
    socialMedia: socialLinks
  },
]