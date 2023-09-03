<template>
  <div>
    <Head><Title>Academy | Added Digital Solutions</Title></Head>
    <header class="px-6 py-20 container mx-auto max-w-7xl min-h-screen grid place-items-center">
      <div>
        <h1 class="capitalize font-bold sm:text-5xl text-6xl lg:text-7xl text-center text-accent">Unleash Your <br /> Creative Genius</h1>
        <UiTypographyP class="text-center mt-4 font-medium text-accent">Nurturing young talent for the future.</UiTypographyP>

        <div class="flex gap-5 mt-8 justify-center items-center">
          <UiButtonsPrimary>Check our courses</UiButtonsPrimary>
          <UiButtonsTertiary>
            <div class="flex gap-2 items-center">
              <span>Scroll Down</span>
              <div class="animate-bounce">
                <IconsNext class="w-5 rotate-90 block"></IconsNext>
              </div>
            </div>
          </UiButtonsTertiary>
        </div>
      </div>
    </header>
    <section class="bg-primary bg-opacity-5">
      <div class="px-6 py-20 container mx-auto max-w-7xl">
        <UiTypographyH3 class="text-center mb-8">Our Offerings</UiTypographyH3>
        <ul class="grid lg:grid-cols-2 gap-8">
          <li v-for="session in sessions" :key="session.id" class="border border-gray-400 rounded-xl">
            <div :style="{ background:`url(${session.image})`}" alt="" class="w-full aspect-[2/1] bg rounded-t-xl" />
            <div class="p-8">
              <UiTypographyH3>
              {{ session.title }}
              </UiTypographyH3>
              <UiTypographyP class="mt-2">{{ session.description }}</UiTypographyP>
              <UiButtonsPrimary class="mt-8" @click="router.push({name: 'services-'})">Learn More</UiButtonsPrimary>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="px-6 py-20 container mx-auto max-w-7xl">
      <UiTypographyH3 class="text-center text-accent">Popular Courses</UiTypographyH3>
      <ul class="grid lg:grid-cols-3 gap-8 mt-8">
        <CardsCourses v-for="item in 3" />
      </ul>
    </section>
    <section class="px-6 py-20 container mx-auto max-w-7xl">
      <UiTypographyH3 class="text-center text-accent">Previous Feedback</UiTypographyH3>
      <ul class="grid lg:grid-cols-3 gap-8 mt-8">
        <CardsReviews v-for="item in 3" :ImagePath="picture" />
      </ul>
    </section>

    <section class="rounded-t-full bg-accent min-h-screen">
      <div class="max-w-7xl mx-auto container py-20 px-6 text-white text-center">
        <UiTypographyP class="">Contact Us</UiTypographyP>
        <h1 class="text-6xl lg:text-8xl font-bold">Got any <br /> questions? <br /> Let us know!</h1>
        <UiTypographyP class="mt-5">We are looking forward to hearing from you. Drop us your message today!</UiTypographyP>

        <form action="" class="mt-16 w-[80vw] lg:w-[50vw] mx-auto">
          <div class="grid lg:grid-cols-2  gap-8">
            <FormInput label="Name"/>
            <FormInput label="Company Name"/>
            <FormInput label="Email"/>
            <FormInput label="Mobile"/>
          </div>
          <div class="my-8">
            <label for="" class="block text-left text-sm mb-1">Message</label>
            <textarea rows="10" class="w-full py-3 px-4 border text-sm outline-none border-accent ring-0 focus:outline-none focus:border-primary active:border-primary rounded-md active:text-primary focus:text-primary text-accent bg-white bg-opacity-10 border-opacity-20 active:border-opacity-100 focus:border-opacity-100 duration-300 ease-out"></textarea>
          </div>

          <div class="w-36 mx-auto mt-8">
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import offline from '@/assets/images/offline.jpg';
import online from '@/assets/images/online.jpeg';
export default {
  data() {
    return {
      sessions: [
        {
          id: 1,
          title: 'Offline Training',
          description: 'We offer offline phyical classes to our students at our main office in Iwo. The classroom is conducive and the tutors are available 24/7 to attend to the students.',
          image: offline
        },
        {
          id: 2,
          title: 'Online Tutoring',
          description: 'We offer online classes to students who are unable to come to the office. You can take the class from anywhere in the world at your own convenience.',
          image: online
        }
      ]
    }
  },
}
</script>
<style>
.bg{
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center !important;
}
</style>