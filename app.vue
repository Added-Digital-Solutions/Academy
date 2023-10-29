<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

body {
  overflow-y: visible;
	position: relative;
}

* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width:0px;
  cursor: pointer;
}

.menu-shadow {
  box-shadow: 3px 0 10px -2px rgba(0, 0, 0, 0.082);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-in-left-enter-active, .slide-in-left-leave-active {
  transition: transform 0.5s;
}

.slide-in-left-enter {
  transform: translate(100%, 0);
}

.slide-in-left-leave-to {
  transform: translate(100%, 0);
}

.slide-in-bottom-enter-active, .slide-in-bottom-leave-active {
  transition: transform 0.4s;
}

.slide-in-bottom-enter {
  transform: translate(0, 100%);
}

.slide-in-bottom-leave-to {
  transform: translate(0, 100%);
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  -webkit-animation: bounce-in 0.4s;
          animation: bounce-in 0.4s;
}

.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}

@-webkit-keyframes bounce-in {
  0% {
    opacity: 0%;
    transform: scale(0);
  }
  50% {
    opacity: 50%;
    transform: scale(1.2);
  }
  100% {
    opacity: 100%;
    transform: scale(1);
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0%;
    transform: scale(0);
  }
  50% {
    opacity: 50%;
    transform: scale(1.2);
  }
  100% {
    opacity: 100%;
    transform: scale(1);
  }
}
</style>