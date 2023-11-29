<template>
  <main class="max-w-7xl mx-auto p-6">
    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      <CardsCourses @clicked="selectCourse(course)" v-for="course in allCourses" :key="course.id" :imagePath="course.image" :title="course.name" :duration="course.duration" :price="course.cost" :description="course.description" :type="course.type"/>
    </ul>
  </main>
</template>
<script>
import { mapWritableState  } from 'pinia'
import { useCoursesStore } from '~/store/courses'
useSeoMeta({
  title: 'Courses | A.D.S.',
  ogTitle: 'Our Courses',
  description: 'Our courses | Added Digital Solutions Academy.',
  ogDescription: 'Added Digital Solutions Academy Courses.',
  ogImage: '@/assets/brand/logo.png',
  twitterCard: '@/assets/brand/logo.png',
})
export default {
  data() {
    return {
      dialog_toggle: false,
      imagePath: ''
    }
  },

  methods: {
    selectCourse(course){
      this.selected = ''
      this.selected = course
      this.$router.push({name: 'courses-course', params: {
        course: course.name
      }})
    }
  },

  computed: {
    // gives access to this.count inside the component
    // same as reading from store.count
    // same as above but registers it as this.myOwnName
    ...mapWritableState (useCoursesStore, {
      allCourses: 'courses',
    }),
    ...mapWritableState (useCoursesStore, {
      selected: 'selected_course',
    }),
  },

  mounted(){
  }
}
</script>