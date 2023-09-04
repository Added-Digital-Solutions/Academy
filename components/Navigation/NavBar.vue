<template>
  <nav class="ease-in-out duration-300 w-full absolute bg-white">
    <div class="flex container mx-auto items-center justify-between px-6 py-4 w-full">
      <div class="w-36">
        <NavigationLogo @logoClicked="reloadPage()"></NavigationLogo>
      </div>

      <UiButtonsMenu @revealMenu="toggleMenu()" />

      <nav :class="menu_revealed ? 'translate-x-0' : '-translate-x-full'" class="md:h-fit z-100 md:static md:bg-transparent w-full md:w-fit fixed h-screen left-0 top-[65.5px] md:top duration-150 ease-in-out md:translate-x-0 bg-white">
        <ul class="grid grid-cols-1 place-items-center md:flex gap-5 md:gap-3 lg:gap-5 items-center px-6 pt-20 md:p-0">
          <li>
            <UiButtonsTertiary @clicked="$router.push({name: 'index'})">Home</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsTertiary @clicked="$router.push({name: 'courses'})">Courses</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsTertiary @clicked="$router.push({name: 'blog'})">Blog</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsTertiary @clicked="$router.push({name: 'login'})">Login</UiButtonsTertiary>
          </li>
          <li>
            <UiButtonsPrimary @clicked="$router.push({path: '/signup'})">Sign Up</UiButtonsPrimary>
          </li>
        </ul>
      </nav>
    </div>


  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu_revealed: false,
    }
  },

  methods: {
    toggleMenu(){
      this.menu_revealed = !this.menu_revealed
    },
  },

}
</script>

<style>

</style>