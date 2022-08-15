// import icons
import { BsCheck, BsChevronRight } from 'react-icons/bs';

// import images
import CourseImage1 from '../src/assets/img/courses/course-1.png';
import CourseImage2 from '../src/assets/img/courses/course-2.png';
import CourseImage3 from '../src/assets/img/courses/course-3.png';

export const navigation = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Classes',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

export const facts = [
  {
    startNumber: '1',
    endNumber: '5',
    unit: '',
    title: 'Years of Experience',
    desc: 'We are 5 years of experienced in this yoga field. Giving the best instructions.',
  },
  {
    startNumber: '1',
    endNumber: '5',
    unit: 'K',
    title: 'Happy Clients',
    desc: 'We have over five thousand clients all over the world. They are very satisfied.',
  },
  {
    startNumber: '1',
    endNumber: '15',
    unit: '',
    title: 'Experienced Trainers',
    desc: 'We have over fifteen dedicated and experienced trainer for yoga and meditation.',
  },
  {
    startNumber: '1',
    endNumber: '24',
    unit: '',
    title: 'Monthly Classes',
    desc: 'Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.',
  },
];

export const courses = [
  {
    image: CourseImage1,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '600',
  },
  {
    image: CourseImage2,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '800',
  },
  {
    image: CourseImage3,
    title: 'Resortive Yoga Training & Immersion',
    desc: 'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '900',
  },
];

export const pricing = [
  {
    title: 'Single yoga class',
    price: '$15.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '600',
  },
  {
    title: 'Single yoga class',
    price: '$60.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '800',
  },
  {
    title: 'Single yoga class',
    price: '$150.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '900',
  },
];
