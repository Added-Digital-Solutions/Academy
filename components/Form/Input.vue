<template>
    <div class="w-full">
      <label :class="label_class" class="text-sm mb-1 block text-left">{{label}}</label>
      <input @input="$emit('update:inputValue', $event.target.value)" @focus="focus()" :class="{'border-red-600 focus:border-red-600 active:border-red-600' : error, 'text-center placeholder-center' : centerText }"  class="w-full py-3 px-4 border text-sm outline-none border-accent ring-0 focus:outline-none focus:border-primary active:border-primary rounded-md active:text-primary focus:text-primary text-accent bg-white bg-opacity-10 border-opacity-20 active:border-opacity-100 focus:border-opacity-100 duration-300 ease-out" autocomplete="off"
    :type="type" :disabled="disabled" :placeholder="placeholder" :value="inputValue" ref="input">
    </div>
    
</template>

<script>
  export default {
    name:"Input",
    props: {
      label_class: String,
      error: Boolean,
      label: String,
      inputValue: String,
      type: String,
      disabled: Boolean,
      placeholder:String,
      centerText: {
        default: false,
        type: Boolean
      }
    },

    methods: {
      focus() {
        this.$refs.input.focus()
      },
    }
  }
</script>

