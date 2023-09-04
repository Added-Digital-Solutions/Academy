<template>
  <Head><Title>Courses | A.D.S Academy</Title></Head>
  <main class="container max-w-7xl mx-auto px-6 py-20">
    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CardsCourses v-for="item in 12" />
    </ul>
  </main>
</template>