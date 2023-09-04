<template>
  <Head><Title>Login | A.D.S Academy</Title></Head>
  <form @submit.prevent="submit" class="container mx-auto max-w-7xl px-6 py-20 min-h-screen grid place-items-center text-accent">
    <div class="md:border rounded-xl p-8 grid gap-8 w-full md:w-1/2 lg:w-1/3">
      <UiTypographyH3>Welcome back!</UiTypographyH3>
      <main class="grid gap-4">
        <FormInput label="Email" type="email" placeholder="Enter your email" />
        <FormInput label="Password" type="password" placeholder="Enter your password" />
        <NuxtLink to="forgot" class="w-full flex justify-end text-sm hover:text-primary hover:underline">Forgot Password?</NuxtLink>
      </main>
      <div>
        <FormButton :loading="loadingState">Sign In</FormButton>
        <UiTypographyP class="flex items-center gap-4 justify-center mt-4">Don't have an account? <span>
          <NuxtLink to="signup" class="w-full flex justify-end text-sm hover:text-primary hover:underline">Sign Up!</NuxtLink>
        </span></UiTypographyP>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      loadingState: false
    }
  },

  methods: {
    submit(){
      this.loadingState = true
      setTimeout(() => {
        this.$router.push({"name": "user-dashboard", "params": {user: 'james'}})
        this.loadingState = false
      }, 2000);
    }
  },
}
</script>