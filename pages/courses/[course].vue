<template>
  <main class="bg-primary text-white min-h-screen">
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
    <ul class="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      <li>
        <img src="@/assets/images/duration.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Duration</UiTypographyP>
        <h2 class="text-2xl font-semibold mt-2">3 months</h2>
      </li>
      <li>
        <img src="@/assets/images/calendar.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Start Date</UiTypographyP>
        <h2 class="text-2xl font-semibold mt-2">December 1st, 2023</h2>
      </li>
      <li>
        <img src="@/assets/images/level.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Level</UiTypographyP>
        <h2 class="text-2xl font-semibold mt-2">Beginner</h2>
      </li>
      <li>
        <img src="@/assets/images/list.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Prerequisites</UiTypographyP>
        <h2 class="text-2xl font-semibold mt-2">A laptop</h2>
      </li>
      <li>
        <img src="@/assets/images/projects.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Projects</UiTypographyP>
        <h2 class="text-2xl font-semibold mt-2">4 projects</h2>
      </li>
      <li>
        <img src="@/assets/images/card.svg" class="w-10 h-10 mx-auto" alt="">
        <UiTypographyP>Cost</UiTypographyP>
        <h2 class="text-2xl font-semibold mt-2">₦500,000</h2>
      </li>
    </ul>
  </section>
</template>
<style>
.side{
  background-image: url('@/assets/images/creativity.jpg');
}
</style>