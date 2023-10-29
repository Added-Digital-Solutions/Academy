<template>
  <div class="sliders mt-8">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="review in reviews" :key="review.id" class="glide__slide">
          <div class="w-full grid gap-4 p-6 shadow-xl text-left rounded-lg">
            <div>
              <UiTypographyP class="text-xl text-primary"><strong>{{ review.reviewer }}</strong></UiTypographyP>
              <UiTypographyP><em>{{ review.position }}</em></UiTypographyP>
            </div>
            <p class="text-xl">"{{ review.review }}"</p>
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
  {
    id: 4,
    review: 'As an alumnus of Added Academy, learning PRODUCT DESIGN and PYTHON FOR DATA SCIENCE was one of the best decisions I have made in building a career.',
    reviewer: 'Uchechukwu',
    position: 'Data Analyst'
  },
  {
    id: 5,
    review: `I didn't only learn concepts that got me grounded as a Data Scientist. I also received mentorship which further positioned me for life and career growth.`,
    reviewer: 'Damilola',
    position: 'Data Analyst'
  },
]

onMounted(() => {
  const sliders = document.querySelectorAll(`.sliders`)
  sliders.forEach((slider) => {
    new Glide(slider, {
      type: 'carousel',
      focusAt: 'center',
      autoplay: 1000,
      animationDuration: 1000,
      perView: 3,
      gap: 30,
    }).mount()
  })
})
</script>