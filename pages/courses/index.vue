<template>
  <main class="max-w-7xl mx-auto p-6">
    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      <CardsCourses @clicked="toggleDialog()" v-for="item in 6" />
    </ul>
  </main>
</template>
<script>
useSeoMeta({
  title: 'Courses | A.D.S.',
  ogTitle: 'Our Courses',
  description: 'Our courses | Added Digital Solutions Academy.',
  ogDescription: 'Added Digital Solutions Academy Courses.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
export default {
  data() {
    return {
      dialog_toggle: false,
      imagePath: ''
    }
  },

  methods: {
    toggleDialog(){
      
    }
  },
}
</script>