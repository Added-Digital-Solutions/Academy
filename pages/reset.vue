<template>
  <Head><Title>Password Reset | A.D.S Academy</Title></Head>
  <form @submit.prevent="submit" class="container mx-auto max-w-7xl px-6 py-20 min-h-screen grid place-items-center text-accent">
    <div class="md:border rounded-xl p-8 grid gap-8 w-full md:w-1/2 lg:w-1/3">
      <UiTypographyH3>Choose a new password</UiTypographyH3>
      <main class="grid gap-4">
        <FormInput label="Password" type="password" placeholder="Enter your new password" />
        <FormInput label="Confirm password" type="password" placeholder="Confirm your new password" />
      </main>
      <div>
        <FormButton :loading="loadingState">Reset</FormButton>
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