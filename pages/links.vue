<script setup>
definePageMeta({
  layout: false
})
</script>
<template>
  <div class="grid place-items-center">
    <div class="max-w-3xl p-6 text-accent">
      <div class="flex-col-reverse md:flex-row flex gap-12 items-center">
        <div class="grid gap-4 w-auto">

          <h1 class="font-bold text-3xl">added academy<span class="text-primary">.</span></h1>
          <p class="text-sm">Added academy is a Bootcamp style training school that focuses on training young Nigerians on how to build softwares and designs. Our goal is to reduce the rate of unemployment in Africa by broadening the pool of Africa's tech talents. Select your preferred Course below to register.</p>

          <div class="flex gap-4 items-center">
            <NuxtLink to="https://instagram.com/addeddigitalsolutions?igshid=MzRlODBiNWFlZA==" class="border-[3px] border-accent rounded-md w-10 h-10 grid place-items-center">
              <img src="@/assets/images/insta.svg" class="w-6 h-6" alt="">
            </NuxtLink>
            <NuxtLink class="border-[3px] border-accent rounded-md w-10 h-10 grid place-items-center">
              <img src="@/assets/images/facebook.svg" class="w-6 h-6" alt="">
            </NuxtLink>
            <NuxtLink to="https://twitter.com/addeddigital?t=OZkFn-mOMALUjGTTFOgQeg&s=09" class="border-[3px] border-accent rounded-md w-10 h-10 grid place-items-center">
              <img src="@/assets/images/twitter.svg" class="w-6 h-6" alt="">
            </NuxtLink>
            <NuxtLink class="border-[3px] border-accent rounded-md w-10 h-10 grid place-items-center">
              <img src="@/assets/images/linkedin.svg" class="w-6 h-6" alt="">
            </NuxtLink>
          </div>

        </div>

        <div class="w-36 mx-auto md:w-full">
          <NavigationLogo class="w-full"/>
        </div>
      </div>

      <ul class="grid gap-4 w-full mt-16">
        <li v-for="links in 12" class="w-full flex">
          <button @click="$router.push({name: 'courses-course', params: {course: 'graphic design'}})" class="cursor-pointer py-3 px-4 bg-light flex items-center justify-between w-full hover:px-8 duration-300 ease-in-out">
            <p>{{ course }}</p>
            <IconsNext class="w-5 h-5" />
          </button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    course: {
      type: String,
      default: 'Graphic Design'
    }
  }
}
</script>