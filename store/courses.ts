import { defineStore } from 'pinia'
import graphics from '@/assets/images/courses/graphic.webp'
import product from '@/assets/images/courses/product.jpg'
import ui from '@/assets/images/courses/ui.png'
import web from '@/assets/images/courses/web.png'
import dev from '@/assets/images/courses/dev.jpg'
import fullstack from '@/assets/images/courses/fullstack.png'
import copy from '@/assets/images/courses/copywriting.jpg'
import bloggin from '@/assets/images/courses/bloggin.jpg'
export const useCoursesStore = defineStore('courses', {
  state: () => {
    return {
      courses: [
        {
          id: 1,
          name: 'Graphic Design',
          description: `In today's visually driven world, graphic design is an essential skill for creating compelling communication materials that resonate with audiences. This comprehensive course will equip you with the fundamental principles and practical techniques of graphic design, empowering you to craft effective visuals that inform, engage, and persuade.`,
          duration: 8,
          timeline: 4,
          level: 'Beginner',
          prerequistes: 'A laptop',
          projects: 5,
          cost: '50,000',
          image: graphics,
          type: 'On Location'
        },
        {
          id: 2,
          name: 'Ui/Ux Design',
          description: `User Interface(UI) and User Experience(UX) design are in great demand and are applicable across products and industry domains. With customer experience being the centerfold of product marketing, companies are focusing on enhancing the interface that their customers have access to.`,
          duration: 12,
          timeline: 2,
          level: 'Intermediate',
          prerequistes: 'A laptop',
          projects: 2,
          cost: '100,000',
          image: product,
          type: 'On Location'
        },
        {
          id: 3,
          name: 'Frontend Web Development',
          description: `Start off your career today as a Front-End Web Developer. Learn to build high quality websites with dynamic applications to create stunning user experiences for the web.`,
          duration: 12,
          timeline: 4,
          level: 'Beginner',
          prerequistes: 'A laptop',
          projects: 2,
          cost: '100,000',
          image: dev,
          type: 'Online'
        },
        {
          id: 4,
          name: 'Backend Development',
          description: `Start off your career today as a Back-End Developer. Learn to build high quality websites with dynamic applications to create mindblowing applications.`,
          duration: 12,
          timeline: 4,
          level: 'Beginner',
          prerequistes: 'A laptop',
          projects: 2,
          cost: '200,000',
          image: dev,
          type: 'Online'
        },
        {
          id: 5,
          name: 'Fullstack Web Development',
          description: `Are you ready to embark on an exciting journey into the world of full-stack development? Our comprehensive Full-Stack Development Course is your gateway to mastering both frontend and backend technologies, empowering you to create dynamic and interactive web applications from scratch.`,
          duration: 28,
          timeline: 1,
          level: 'Beginner',
          prerequistes: 'A laptop',
          projects: 2,
          cost: '250,000',
          image: fullstack,
          type: 'On Location'
        },
        {
          id: 7,
          name: 'Ghostwriting',
          description: `In today's competitive digital landscape, effective writing is the cornerstone of successful marketing campaigns. Whether you're crafting website copy, email marketing materials, or social media content, understanding the art of persuasive writing is crucial for capturing attention, driving conversions, and achieving your marketing goals.`,
          duration: 1,
          timeline: 3,
          level: 'Beginner',
          prerequistes: 'A laptop / phone',
          projects: 2,
          cost: '20,000',
          image: copy,
          type: 'Online/On location'
        },
        {
          id: 8,
          name: 'Blogging',
          description: `In the ever-evolving digital world, blogging has emerged as a powerful tool for sharing ideas, building connections, and establishing authority in your field. Whether you're an aspiring entrepreneur, a seasoned professional, or simply passionate about sharing your knowledge, blogging provides a platform to connect with a global audience and make a meaningful impact.`,
          duration: 12,
          timeline: 3,
          level: 'Beginner',
          prerequistes: 'A laptop',
          projects: 1,
          cost: '100,000',
          image: web,
          type: 'On Location'
        },
        {
          id: 9,
          name: 'Business name',
          description: `Learn how to create names for businesses across the world. With full domain, social media and trademark availability`,
          duration: 1,
          timeline: 3,
          level: 'Beginner',
          prerequistes: 'A laptop',
          projects: 1,
          cost: '20,000',
          image: web,
          type: 'Online/On Location'
        },
        {
          id: 9,
          name: 'Wordpress website design',
          description: `Lorem ipsum. I will add description to this course later.`,
          duration: 4,
          timeline: 3,
          level: 'Beginner',
          prerequistes: 'A laptop',
          projects: 1,
          cost: '50,000',
          image: web,
          type: 'On Location'
        },
        {
          id: 10,
          name: 'Creating verified paypal accounts',
          description: `Lorem ipsum. I will add description to this course later.`,
          duration: 1,
          timeline: 3,
          level: 'Beginner',
          prerequistes: 'A laptop',
          projects: 1,
          cost: '50,000',
          image: web,
          type: 'Online/On Location'
        },
      ],
      selected_course: {},
    }
  },
})