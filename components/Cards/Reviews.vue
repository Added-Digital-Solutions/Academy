<template>
  <div class="reviews">
    <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li v-for="review in reviews" :key="review.id" class="glide__slide w-full shadow-md">
        <div class="w-full grid gap-2 p-6">
          <UiTypographyP class="font-semibold">"{{ review.reviewer }}"</UiTypographyP>
          <UiTypographyP><em class="text-light italic">"{{ review.position }}"</em></UiTypographyP>
          <UiTypographyP>"{{ review.review }}"</UiTypographyP>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
<script setup>
import Glide from '@glidejs/glide'
import { onMounted } from 'vue';

const reviews = [
  {
    id: 1,
    review: 'Training with Added is one of the best things that happened to my career. I got useful skills and knowledge to help me understand the field of product design.',
    reviewer: 'Grace',
    position: 'UX designer at Cowrywise'
  },
  {
    id: 2,
    review: 'Seizing the opportunity to take a class at Added was the head start I needed in my career. Almost 3 years down the line, and I think this is my best career investment yet.',
    reviewer: 'Jehonadab',
    position: 'Software Developer'
  },
  {
    id: 3,
    review: 'I got an internship job with BudgiT where I currently grow the skill I was so dutifully taught. I am delighted to have learned this skill at such a wonderful place as Added.',
    reviewer: 'Faith',
    position: 'Data Scientist at BudgIT'
  },
]

onMounted(() =>{
  const sliders = document.querySelectorAll(`.reviews`)
  sliders.forEach((review) => {
    new Glide(review, {
      type: 'carousel',
      focusAt: 'center',
      autoplay: 5000,
      animationDuration: 1000,
      perView: 1,
      gap: 0,
      peek: 0,
    }).mount()
  })
})
</script>