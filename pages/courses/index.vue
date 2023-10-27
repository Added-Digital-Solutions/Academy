<template>
  <Head><Title>Courses | A.D.S Academy</Title></Head>
  <main class="container max-w-7xl mx-auto p-6">
    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      <CardsCourses @clicked="toggleDialog()" v-for="item in 6" />
    </ul>
  </main>
</template>
<script>
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