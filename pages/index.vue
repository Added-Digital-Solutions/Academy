<template>
  <main>
    <header class="bg-gray-50 text-accent">
      <Container class="flex items-center justify-center text-accent gap-8">
        <div class="lg:w-1/2">
          <UiTypographyH1>learning that gets you ahead<span class="text-primary">.</span></UiTypographyH1>
          <UiTypographyP class="mt-2 lg:mt-4">Skills for your present (and your future). Get started with us.</UiTypographyP>

          <div class="flex gap-4 mt-8">
            <UiButtonsPrimary @clicked="$router.push('/courses')">Browse Courses</UiButtonsPrimary>
            <UiButtonsSecondary @clicked="$router.push('/courses')">Learn More</UiButtonsSecondary>
          </div>
        </div>

        <img src="@/assets/images/hero.png" class="hidden lg:block w-1/3" alt="">
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
        <UiTypographyH2>why added<span class="text-primary">?</span></UiTypographyH2>
        <UiTypographyP class="mt-2 lg:w-1/2">Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.</UiTypographyP>
      </Container>
    </section>
  </main>
</template>
<style>
.back {
  background: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>