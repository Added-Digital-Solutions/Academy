<template>
  <main  class="bg-light text-accent min-h-screen">
    <div class="max-w-7xl px-6 py-24 flex-col md:flex-row flex gap-8 md:gap-12 lg:gap-20 items-center justify-between mx-auto">
      <div class="w-full md:w-1/2 grid gap-6">
        <button class="py-2 px-5 text-white bg-primary group-hover:scale-105 focus:bg-secondary font-medium text-base 2xl:text-lg justify-center duration-300 ease-in-out rounded-md outline-none focus:outline-none border-2 w-fit" >{{ course.type }}</button>

        <UiTypographyH1 class="capitalize">{{course.name}}</UiTypographyH1>
        <UiTypographyP>{{ course.description }}</UiTypographyP>

        <div class="flex gap-8 items-center">
          <UiButtonsPrimary>Enroll Now</UiButtonsPrimary>
          <UiButtonsSecondary>Download Syllabus</UiButtonsSecondary>
        </div>
      </div>

      <div class="w-full md:w-1/2 flex items-center justify-end">
        <div :style="{ background:`url(${course.image})`}" class="background w-full md:w-[85%] aspect-square rounded-xl"></div>
      </div>
    </div>
  </main>

  <section class="py-20 px-6 max-w-7xl mx-auto text-accent text-center">
    <ul class="grid grid-cols-2 place-content-between gap-12 lg:grid-cols-4">
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/duration.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Duration</UiTypographyP>
        <h2 class="text-2xl font-semibold">{{ course.duration }} weeks</h2>
      </li>
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/level.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Level</UiTypographyP>
        <h2 class="text-2xl font-semibold">{{course.level}}</h2>
      </li>
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/projects.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Projects</UiTypographyP>
        <h2 class="text-2xl font-semibold">{{ course.projects }} projects</h2>
      </li>
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/card.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Cost</UiTypographyP>
        <h2 class="text-2xl font-semibold">₦{{ course.cost }}</h2>
      </li>
    </ul>
  </section>

  <section class="bg-light text-accent text-center">
    <div class="py-20 px-6 max-w-7xl mx-auto">
      <UiTypographyH2>come with expectations<span class="text-primary">.</span></UiTypographyH2>

      <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        <li class="flex flex-col gap-2 w-4/5 mx-auto">
          <img src="@/assets/images/teacher.svg" class="w-12 h-12 mx-auto" alt="">
          <UiTypographyP class="font-semibold">Experienced Teachers</UiTypographyP>
          <UiTypographyP class="text-2xl">You'll be taught and mentored by some of the best teachers in the industry.</UiTypographyP>
        </li>
        <li class="flex flex-col gap-2 w-4/5 mx-auto">
          <img src="@/assets/images/projects.svg" class="w-12 h-12 mx-auto" alt="">
          <UiTypographyP class="font-semibold">Hands-on</UiTypographyP>
          <UiTypographyP class="text-2xl">You will be taught & mentored by Industry expert.</UiTypographyP>
        </li>
        <li class="flex flex-col gap-2 w-4/5 mx-auto">
          <img src="@/assets/images/certificate.svg" class="w-12 h-12 mx-auto" alt="">
          <UiTypographyP class="font-semibold">Certificate</UiTypographyP>
          <UiTypographyP class="text-2xl">Get your very own physical certificate to prove your participation.</UiTypographyP>
        </li>
        <li class="flex flex-col gap-2 w-4/5 mx-auto">
          <img src="@/assets/images/support.svg" class="w-12 h-12 mx-auto" alt="">
          <UiTypographyP class="font-semibold">Support System</UiTypographyP>
          <UiTypographyP class="text-2xl">Become part of an ever-growing, supportive community of like minds.</UiTypographyP>
        </li>
        <li class="flex flex-col gap-2 w-4/5 mx-auto">
          <img src="@/assets/images/building.svg" class="w-12 h-12 mx-auto" alt="">
          <UiTypographyP class="font-semibold">Conducive environment</UiTypographyP>
          <UiTypographyP class="text-2xl">Our classes and the environment is serene and conducive for learning.</UiTypographyP>
        </li>
        <li class="flex flex-col gap-2 w-4/5 mx-auto">
          <img src="@/assets/images/building.svg" class="w-12 h-12 mx-auto" alt="">
          <UiTypographyP class="font-semibold">Souvenirs</UiTypographyP>
          <UiTypographyP class="text-2xl">You will get a free t-shirt. This is to make you feel right at home, cause why not?!</UiTypographyP>
        </li>
      </ul>
    </div>
  </section>

  <section class="py-20 px-6 max-w-7xl mx-auto text-accent text-center">
    <UiTypographyH2>success stories<span class="text-primary mb-12">.</span></UiTypographyH2>
    <CardsReviews />
  </section>

  <section class="py-20 px-6 max-w-7xl mx-auto text-accent text-center">
    <UiTypographyH2>FAQs<span class="text-primary mb-12">.</span></UiTypographyH2>

    <div class="mt-8 md:w-2/3 mx-auto xl:w-1/2 text-left">
      <Accordion class="grid gap-2">
      <AccordionItem v-for="faq in faqs" :key="faq.id" container_class="px-6 py-3 bg-light" content_class="py-3">
        <template #accordion-trigger trigger_class="text-primary">
          <UiTypographyP class="text-lg font-semibold">{{ faq.question }}</UiTypographyP>
        </template>

        <template #accordion-content >
          <UiTypographyP>{{ faq.answer }}</UiTypographyP>
        </template>
      </AccordionItem>
    </Accordion>
    </div>

    <UiTypographyP class="mt-8">Got any more questions? 
      <span>
        <NuxtLink class="ml-5 py-2 px-5 text-white focus:text-white hover:text-white bg-primary hover:bg-secondary focus:bg-secondary font-medium text-base 2xl:text-lg justify-center duration-300 ease-in-out rounded-md">Let's Talk</NuxtLink>
      </span>
    </UiTypographyP>
  </section>
</template>
<script>
import { mapWritableState  } from 'pinia'
import { useCoursesStore } from '~/store/courses'
export default {
  data() {
    return {
      faqs: [
        {
          id: 1,
          question: 'Are the programs on-site or online?',
          answer: 'Our program is 100% on-site, Live training program within our offices. However, if you are interested in our online program contact us.'
        },
        {
          id: 2,
          question: 'Where are you located?',
          answer: 'We are at "1st floor, ID Global building, beside Allan Pharmacy,opp Iwo City Hall, Iwo, Osun State, Nigeria.'
        },
        {
          id: 3,
          question: 'Do you have evening/part-time classes?',
          answer: 'Yes, we have evening classes. This class is structured best to suit individuals who have busy weekends.'
        },
        {
          id: 4,
          question: 'Do I need a laptop?',
          answer: 'Yes, you will be requiring a laptop. All our classes are hands-on and very practical.'
        },
      ],
      course: {}
    }
  },
  mounted(){
    this.course = JSON.parse(sessionStorage.getItem('course'))
  }
}
</script>
<style>
.background {
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
</style>