<template>
  <li class="border border-gray-400 rounded-xl p-8 text-accent">
    <div class="grid gap-4 md:gap-8">
      <img :src="imagePath" alt="" class="w-14 h-14">
      <div>
        <UiTypographyH3>
        {{ title }}
        </UiTypographyH3>
        <UiTypographyP class="mt-2">{{ description }}</UiTypographyP>

        <div class="flex justify-between items-center mt-4 mb-8">
          <UiTypographyP class="font-medium">{{ duration }} weeks</UiTypographyP>
          <UiTypographyP class="font-medium">#{{ price }}</UiTypographyP>
        </div>

        <UiButtonsPrimary @clicked="$emit('clicked')" :flexdisplay="true">Enroll</UiButtonsPrimary>
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
      default: 'Course description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero non temporibus quas ipsum labore nesciunt odit. Id at veniam ipsam itaque quos animi ratione sunt est? Qui aperiam nihil sed?',
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
}
</script>