<template>
  <form class="container mx-auto max-w-7xl px-6 py-20 min-h-screen grid place-items-center text-accent">
    <div class="md:border rounded-xl p-8 grid gap-8 w-full md:w-1/2 lg:w-1/3">
      <UiTypographyH3>Get started here!</UiTypographyH3>

      <main class="grid gap-4">
        <FormInput label="Email" type="email" placeholder="Enter your email" />
        <FormInput label="Username" type="text" placeholder="Enter your username" />
        <FormInput label="Password" type="password" placeholder="Enter your password" />
      </main>
      <div>
        <FormButton>Sign In</FormButton>
        <UiTypographyP class="flex items-center gap-4 justify-center mt-4">Already have an account? <span>
          <NuxtLink to="login" class="w-full flex justify-end text-sm hover:text-primary hover:underline">Sign In!</NuxtLink>
        </span></UiTypographyP>
      </div>
    </div>

  </form>
</template>