<template>
  <main class="bg-primary text-white min-h-screen">
    <div class="max-w-7xl px-6 py-24 flex-col md:flex-row flex gap-8 md:gap-12 lg:gap-20 items-center justify-between mx-auto">
      <div class="w-full md:w-1/2 grid gap-6">
        <UiTypographyH1>Fullstack Web Development</UiTypographyH1>
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

  <section class="py-20 px-6 max-w-7xl mx-auto flex gap-8">
    <ul></ul>
  </section>
</template>
<style>
.side{
  background-image: url('@/assets/images/creativity.jpg');
}
</style>