<template>
  <Head><Title>Forgot Password | A.D.S Academy</Title></Head>
  <form class="container mx-auto max-w-7xl px-6 py-20 min-h-screen grid place-items-center text-accent">
    <div class="md:border rounded-xl p-8 grid gap-8 w-full md:w-1/2 lg:w-1/3">
      <UiTypographyH3>Forgot your password?</UiTypographyH3>
      <main class="grid gap-4">
        <FormInput label="Email" type="email" placeholder="Enter your email" />
        <p to="forgot" class="text-sm">Enter your email and we'll send you a link to reset your password</p>
      </main>
      <div>
        <FormButton>Reset</FormButton>
      </div>
    </div>

  </form>
</template>