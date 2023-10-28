<template>
  <main  class="bg-primary text-white min-h-screen">
    <div class="max-w-7xl px-6 py-24 flex-col md:flex-row flex gap-8 md:gap-12 lg:gap-20 items-center justify-between mx-auto">
      <div class="w-full md:w-1/2 grid gap-6">
        <UiTypographyH1>{{$route.params.course}}</UiTypographyH1>
        <UiTypographyP>Are you ready to embark on an exciting journey into the world of full-stack development? Our comprehensive Full-Stack Development Course is your gateway to mastering both frontend and backend technologies, empowering you to create dynamic and interactive web applications from scratch.</UiTypographyP>

        <div class="flex gap-8 items-center">
          <NuxtLink class="bg-white text-primary font-medium text-md px-6 py-2 cursor-pointer rounded-md">Enroll Now</NuxtLink>
          <NuxtLink class="bg-white text-primary font-medium text-lg px-6 py-2 cursor-pointer rounded-md">Download Syllabus</NuxtLink>
        </div>
      </div>

      <div class="w-full md:w-1/2 flex items-center justify-end">
        <div class="side w-full md:w-[85%] aspect-square rounded-xl"></div>
      </div>
    </div>
  </main>

  <section class="py-20 px-6 max-w-7xl mx-auto flex gap-8 text-accent text-center">
    <ul class="grid gap-8 grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-6">
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/duration.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Duration</UiTypographyP>
        <h2 class="text-2xl font-semibold">3 months</h2>
      </li>
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/calendar.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Start Date</UiTypographyP>
        <h2 class="text-2xl font-semibold">December 1st, 2023</h2>
      </li>
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/level.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Level</UiTypographyP>
        <h2 class="text-2xl font-semibold">Beginner</h2>
      </li>
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/list.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Prerequisites</UiTypographyP>
        <h2 class="text-2xl font-semibold">A laptop</h2>
      </li>
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/projects.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Projects</UiTypographyP>
        <h2 class="text-2xl font-semibold">4 projects</h2>
      </li>
      <li class="flex flex-col gap-2">
        <img src="@/assets/images/card.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Cost</UiTypographyP>
        <h2 class="text-2xl font-semibold">₦500,000</h2>
      </li>
    </ul>
  </section>

  <section class="bg-light text-accent text-center">
    <div class="py-20 px-6 max-w-7xl">
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
</template>
<style>
.side{
  background-image: url('@/assets/images/creativity.jpg');
}
</style>