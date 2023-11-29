<template>
  <li class="shadow-md hover:shadow-xl duration-300 group ease-in-out rounded-xl text-accent cursor-pointer" @click="navigate()">
    <div :style="{ background:`url(${imagePath})`}" class="background h-56 w-full rounded-t-xl">
      <button class="py-2 px-5 text-white bg-primary group-hover:scale-105 focus:bg-secondary font-medium text-base 2xl:text-lg justify-center duration-300 ease-in-out rounded-md outline-none focus:outline-none ml-5 mt-5 border-2" >{{ type }}</button>
    </div>
    <div class="grid gap-4 md:gap-8 p-6">
      <div>
        <h2 class="font-bold text-2xl group-hover:text-primary duration-300 ease-in-out">
        {{ title }}
        </h2>
        <UiTypographyP class="mt-2 text-clip">{{ description.split(' ').slice(0, 20).join(' ')}}...</UiTypographyP>

        <div class="flex gap-10 items-center mt-6">
          <UiTypographyP class="font-medium flex gap-2 items-center"><span><img src="@/assets/images/duration.svg" class="w-5" alt="Duration Icon" /></span>{{ duration }} weeks</UiTypographyP>
          <UiTypographyP class="font-medium flex gap-2 items-center"><span><img src="@/assets/images/card.svg" class="w-5" alt="Duration Icon" /></span>₦{{ price }}</UiTypographyP>
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
      default: '10000.00',
      type: String
    },
    type: {
      default: 'On Location',
      type: String
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
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
</style>