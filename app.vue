<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

body {
  overflow-y: visible;
	position: relative;
}

* {
  font-family: 'Open Sans' sans-serif;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width:0px;
  cursor: pointer;
}
</style>