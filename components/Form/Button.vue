<template>
  <button
    type="submit"
    class="py-2 px-5 flex w-full text-white font-medium text-base 2xl:text-lg justify-center duration-500 ease-in-out rounded-md focus:bg-secondary " 
    :disabled="loading || disabled" :class="loading ? 'bg-secondary': 'bg-primary hover:bg-secondary'">

    <div class="flex items-center justify-center uppercase">
      <div v-if="loading"  >
        <div class="justify-center flex">
          <IconsLoading class="w-7"></IconsLoading>
        </div>
      </div>
      <div v-if="!loading">
        <slot />
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "LoadingButton",
  props: {
      loading: Boolean,
      disabled: Boolean,
      loadingText: {
          default: "Authenticating",
          type: String
      },
  },
}
</script>

<style>
</style>