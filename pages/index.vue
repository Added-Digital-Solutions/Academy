<template>
  <main>
    <header class="bg-accent bg-opacity-10 text-accent">
      <Container class="flex items-center justify-center text-accent gap-8">
        <div class="lg:w-1/2">
          <UiTypographyH1>learning that gets you ahead<span class="text-primary">.</span></UiTypographyH1>
          <UiTypographyP class="mt-2 lg:mt-4">Skills for your present (and your future). Get started with us.</UiTypographyP>

          <div class="flex gap-4 mt-8">
            <UiButtonsPrimary @clicked="$router.push('/courses')">Browse Courses</UiButtonsPrimary>
            <UiButtonsSecondary @clicked="$router.push('/courses')">Learn More</UiButtonsSecondary>
          </div>
        </div>

        <img src="@/assets/images/hero.png" class="hidden lg:block w-1/3 drop-shadow-xl" alt="">
      </Container>
    </header>

    <section class="text-accent">
      <Container>
        <UiTypographyH2>find your perfect program<span class="text-primary">.</span></UiTypographyH2>
        <UiTypographyP class="mt-2 lg:w-1/2">Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.</UiTypographyP>

        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-6 md:mt-12 place-items-center">
          <CardsCourses @clicked="" v-for="item in 3" />
          <li class="lg:col-span-3 mx-auto">
            <UiButtonsPrimary>Browse All Courses</UiButtonsPrimary>
          </li>
        </ul>
      </Container>
    </section>
    
    <section class="text-accent">
      <Container>
        <UiTypographyH2>grow with us<span class="text-primary">.</span></UiTypographyH2>
        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 md:mt-12 place-items-center">
          <li>
            <img src="@/assets/images/projects.svg" class="w-14" alt="">
            <h3 class="text-2xl font-semibold mt-6">In-Demand Tech Skills</h3>
            <UiTypographyP class="mt-1">Let's accelerate your journey into tech with our immersive training program. We will help you acquire the hottest skills in high demand in the job market.</UiTypographyP>
          </li>
          <li>
            <img src="@/assets/images/standard.svg" class="w-14" alt="">
            <h3 class="text-2xl font-semibold mt-6">Industry Standard Approach</h3>
            <UiTypographyP class="mt-1">Our programs are well structured to take you from Zero to Hero. We'll you in-demand skills and best practices you need to thrive in today's workplace.</UiTypographyP>
          </li>
          <li>
            <img src="@/assets/images/building.svg" class="w-14" alt="">
            <h3 class="text-2xl font-semibold mt-6">Conducive environment </h3>
            <UiTypographyP class="mt-1">With us, you learn with comfort. You learn in a conducive environment with all basic amenities at your disposal.</UiTypographyP>
          </li>
          <li>
            <img src="@/assets/images/calendar.svg" class="w-14" alt="">
            <h3 class="text-2xl font-semibold mt-6">Flexible Calendars</h3>
            <UiTypographyP class="mt-1">We offer both weekday and weekend classes both in-person and online. We start at least 2 new cohorts every quarter. So, Whether you work full-time or not you can learn with us.</UiTypographyP>
          </li>
          <li>
            <img src="@/assets/images/community.svg" class="w-14" alt="">
            <h3 class="text-2xl font-semibold mt-6">Supportive Community</h3>
            <UiTypographyP class="mt-1">Become part of a supportive community where you would meet students alike, collaborate with and grow together. Get first hand knowledge and learn best practices from our experienced coaches.</UiTypographyP>
          </li>
          <li>
            <img src="@/assets/images/handshake.svg" class="w-14" alt="">
            <h3 class="text-2xl font-semibold mt-6">Hiring Partners</h3>
            <UiTypographyP class="mt-1">We offer the right tech talent to meet your team’s needs. Our talents are well equipped for the modern workplace and have the required skills to deliver industry-standard tech solutions.</UiTypographyP>
          </li>
        </ul>
      </Container>
    </section>

    <section class="bg-accent bg-opacity-10 text-accent text-center">
      <Container class="grid place-items-center">
        <UiTypographyH2>ready to upskill<span class="text-primary">?</span></UiTypographyH2>
        <UiTypographyP class="mt-4 md:w-3/4 lg:w-2/3 mx-auto">If you love to grow or build a career in tech, we have you covered. At Added, we focus on industry-ready skills that prepare you for the future of work, while connecting you to incredible jobs both in Nigeria and abroad.</UiTypographyP>
        <UiButtonsPrimary @clicked="$router.push('/courses')" class="mt-8">Browse all Courses</UiButtonsPrimary>
      </Container>
    </section>
  </main>
</template>