<template>
  <Head><Title>Courses | A.D.S Academy</Title></Head>
  <aside>
    <ModalsDrawer :scrollable="true" :openDialog="dialog_toggle" @closeDialog="toggleDialog()" class="text-accent">
      <template #title>Course Info</template>
      <div>
        <div class="flex gap-8 items-center">
          <img src="@/assets/images/services/design.svg" alt="" class="w-20 h-20">
          <div class="w-[1px] bg-accent h-20"></div>
          <UiTypographyH2>Graphics Design</UiTypographyH2>
        </div>
        <div class="mt-8">
          <UiTypographyH3>Course Details</UiTypographyH3>

          <UiTypographyP class="mt-4"><span class="font-medium">Course Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum minima eos dolorem distinctio maiores praesentium aliquid aperiam amet blanditiis quos sed, dolorum natus quibusdam debitis! Provident, perspiciatis sequi. Magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita eum quod quo distinctio sit soluta, aut ex accusantium quibusdam, quis incidunt corporis laudantium possimus molestiae explicabo ratione, deleniti quidem.</UiTypographyP>

          <UiTypographyP class="mt-8 font-medium">Tutors</UiTypographyP>
          <div class="border border-gray-400 rounded-xl p-6 text-accent mt-4">
            <div class="grid gap-4">
              <img :src="imagePath" alt="" class="w-14 h-14">
              <div>
                <UiTypographyH3>
                Noah Olayemi
                </UiTypographyH3>
                <UiTypographyP class="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, officia necessitatibus. Voluptatem dolorem suscipit inventore necessitatibus in molestias nesciunt corporis, sequi perspiciatis eos, cumque enim? Repellat quaerat perferendis eos doloribus!</UiTypographyP>
              </div>
            </div>
          </div>

          <UiTypographyP class="mt-8"><span class="font-medium">Course duration:</span> 4 weeks</UiTypographyP>
          <UiTypographyP class="mt-4"><span class="font-medium">Course price:</span>#25,000</UiTypographyP>

          <UiButtonsPrimary :flexdisplay="true" class="mt-8">Enroll Now</UiButtonsPrimary>
        </div>
      </div>
    </ModalsDrawer>
  </aside>

  <main class="container max-w-7xl mx-auto px-6 py-20">
    <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CardsCourses @clicked="toggleDialog()" v-for="item in 12" />
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
      this.dialog_toggle = !this.dialog_toggle
    }
  },
}
</script>