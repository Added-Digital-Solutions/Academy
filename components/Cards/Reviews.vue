<template>
  <li>
    <div class="w-full border p-8 border-gray-400 rounded-xl" >
      <UiTypographyH1>"</UiTypographyH1>
      <UiTypographyH3>{{title}}</UiTypographyH3>
      <UiTypographyP class="mt-2">{{review}}</UiTypographyP>

      <div class="mt-8 flex gap-4 items-center">

        <div :style="{background:`url(${ImagePath})`}" class="background h-12 w-12 rounded-full"></div>
        <div>
          <UiTypographyH3>{{ reviewer }}</UiTypographyH3>
          <UiTypographyP class="mt-0">{{ relation }}</UiTypographyP>
        </div>

      </div>
    </div>
  </li>
</template>

<script>
import picture from '@/assets/images/service.jpg'
export default {
  props: {
    ImagePath: {
      default: picture,
      type: String
    },
    title: {
      default: 'Review Title',
      type: String
    },
    review: {
      default: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui reiciendis enim dolorum quod, tenetur porro possimus accusamus velit. Animi est minus totam eos vero! Officiis rerum eum maiores reiciendis facilis?',
      type: String
    },
    reviewer: {
      default: 'Muhammad A. Quadir',
      type: String
    },
    relation: {
      default: 'Alumnus',
      type: String
    },
  },
}
</script>

<style>
  .background {
    background-position: center center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }
</style>