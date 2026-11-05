
import type {
  EventPreview,
  AccordionItem,
} from '../model/event-types';

export const eventsPreview: EventPreview[] = [
  {
    id: 'event-1',
    title: 'Digital Marketing Conference',
    date: '2026-11-05',
    startTime: '11:00',
    endTime: '14:00',
    format: 'online',
    type: 'master-class',
  },
  {
    id: 'event-2',
    title: 'The Art of Web Design',
    date: '2026-11-12',
    startTime: '15:00',
    endTime: '17:00',
    format: 'online',
    type: 'workshop',
  },
  {
    id: 'event-3',
    title: 'Leadership and Team Management',
    date: '2026-11-20',
    startTime: '10:00',
    endTime: '12:00',
    format: 'offline',
    type: 'lecture',
  },
];

export const eventAbout: AccordionItem[] = [
  {
    id: 'theme-1',
    title: 'Theme 1. Introduction to UX Design',
    content: 'Learn the fundamentals of user experience design...',
  },
  {
    id: 'theme-2',
    title: 'Theme 2. User Research',
    content: 'Explore research methods and user behavior...',
  },
  {
    id: 'theme-3',
    title: 'Theme 3. Prototyping',
    content: 'Learn how to create and test interactive prototypes...',
  },
];

// export const eventsDetails: EventFullDetails[] = [
//   {
//     ...eventsPreview[0],
//     about: [
//       'Discover modern digital marketing strategies.',
//       'Learn how to build effective marketing campaigns.',
//       'Explore practical tools for measuring campaign performance.',
//     ],
//     price: 50,
//     information: [
//       'The event will take place online. Participants will receive access instructions before the event.',
//     ]
//   },
//   {
//     ...eventsPreview[1],
//     about: [
//       'Explore the principles of modern web design.',
//       'Learn how to create intuitive user interfaces.',
//     ],
//     price: 35,
//     information: [
//       'Bring your laptop to participate in the practical exercises.',
//     ]
//   },
//   {
//     ...eventsPreview[2],
//     about: [
//       'Learn effective leadership techniques.',
//       'Discover strategies for building high-performing teams.',
//     ],
//     information: [
//       'The lecture includes a Q&A session.',
//     ]
//   },
// ];