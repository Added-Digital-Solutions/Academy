<template>
  <li class="shadow-md hover:shadow-xl duration-300 group ease-in-out rounded-xl text-accent cursor-pointer" @click="navigate()">
    <div class="background h-56 w-full rounded-t-xl"></div>
    <div class="grid gap-4 md:gap-8 p-6">
      <div>
        <h2 class="font-bold text-2xl group-hover:text-primary duration-300 ease-in-out">
        {{ title }}
        </h2>
        <UiTypographyP class="mt-2 text-clip">{{ description }}</UiTypographyP>

        <div class="flex justify-between items-center mt-4">
          <UiTypographyP class="font-medium">{{ duration }} weeks</UiTypographyP>
          <UiTypographyP class="font-medium">₦{{ price }}</UiTypographyP>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    imagePath: String,
    title: {
      default: 'Course Title',
      type: String
    },
    description:  {
      default: 'Course description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero non temporibus quas ipsum labore nesciunt odit.',
      type: String
    },
    duration: {
      default: 4,
      type: Number
    },
    price: {
      default: 10000.00,
      type: Number
    }
  },

  methods: {
    navigate(){
      this.$router.push({name: 'courses-course', params: {course: 'ui design'}})
    }
  },
}
</script>
<style>
.background {
  background-image: url('@/assets/images/creativity.jpg');
}
</style>