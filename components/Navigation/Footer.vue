<template>
  <footer class="bg-accent border-t border-white text-white">
    <div class="max-w-7xl container mx-auto px-6 py-8 gap-8 flex justify-between items-center">
      <div>
        <div class="w-36" >
          <NavigationLogo />
        </div>
        <UiTypographyP class="mt-2">&copy; Added Digital Solutions, {{new Date().getFullYear()}}</UiTypographyP>
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink to="" class="w-10 h-10 rounded-md bg-white bg-opacity-10 grid place-items-center">
        <img src="@/assets/images/socials/instagram.svg" class="w-6 h-6" alt="">
        </NuxtLink>
        <NuxtLink to="" class="w-10 h-10 rounded-md bg-white bg-opacity-10 grid place-items-center">
          <img src="@/assets/images/socials/whatsapp.svg" class="w-6 h-6" alt="">
        </NuxtLink>
        <NuxtLink to="" class="w-10 h-10 rounded-md bg-white bg-opacity-10 grid place-items-center">
          <img src="@/assets/images/socials/twitter.svg" class="w-6 h-6" alt="">
        </NuxtLink>
        <NuxtLink to="" class="w-10 h-10 rounded-md bg-white bg-opacity-10 grid place-items-center">
          <img src="@/assets/images/socials/facebook.svg" class="w-6 h-6" alt="">
        </NuxtLink>
      </div>

    </div>
  </footer>
</template>