<template>
  <div>
    <transition name="slide-fade">
      <div @click="emitCloseDialogEvent()" v-show="openDialog" class="h-screen cursor-pointer filter w-full bg-accent bg-opacity-50 backdrop-blur-sm fixed z-140 inset-0">
      </div>
    </transition>
    
    <transition name="slide-in-left">
      <div v-show="openDialog" class="fixed w-full lg:w-3/5 xl:w-1/3 right-0 bg-white h-full z-150 top-0">
        <div class="relative h-full">
          <div class="flex justify-between items-center border-b border-accent1-100 py-4 px-6 select-none">
            <p class="uppercase font-bold select-none"><slot name="title" /></p>

            <button @click="emitCloseDialogEvent()" class="block outline-none border-none group cursor-pointer hover:bg-secondary transition duration-300">
              <img src="@/assets/images/cancel.svg" class="h-8 w-8 p-2 bg-primary group-hover:bg-secondary transition duration-300 rounded-md" />
            </button>
          </div>
          
          <div class="px-6 pt-8" :class="(footerButtons ? 'h-screen-80' : 'h-screen-85') + ' ' + (scrollable ? 'overflow-y-scroll' : 'overflow-hidden')">
            <slot />
          </div>
          
          <div v-show="footerButtons" class="absolute bottom-0 w-full select-none">
            <div class="w-full flex justify-between">
              <a @click="emitCloseDialogEvent()" class="uppercase font-medium border-t border-r border-accent-100 shadow w-1/2 block px-2 py-3 text-center cursor-pointer bg-white hover:bg-secondary hover:text-white transition duration-500">
                {{cancelText}}
              </a>
              <a @click="emitOkEvent()" class="uppercase font-medium border-t border-l border-accent-100 shadow w-1/2 block px-2 py-3 text-center cursor-pointer bg-accent1-100 hover:bg-primary hover:text-white transition duration-500">
                {{okText}}
              </a>
            </div>
            
          </div>
        </div>

      </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "Side",
  props: {
    openDialog: Boolean,
    footerButtons: {
      type: Boolean,
      default: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    okText: {
      type: String,
      default: 'Ok'
    }
  },

  methods: {
    emitCloseDialogEvent(){
      this.$emit('closeDialog')
    },
    emitOkEvent(){
      this.$emit('continueAction')
    }
  }

}
</script>
