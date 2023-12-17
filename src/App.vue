<template>
  <div class="container">
    <Header />
    <TypesMenu />
    <BreadCramps />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import BreadCramps from '@/components/BreadCramps.vue';
import TypesMenu from '@/components/layout/TypesMenu.vue';

export default {
  components: {
    Header, BreadCramps, TypesMenu
  }
}  
</script>
<script setup>
</script>

<style lang="scss">
body {
  font-family: Lohit Devanagari;
}

@font-face {
  font-family: "Lohit Devanagari";
  src: url(fonts/Lohit-Devanagari.ttf);
}

.container {
  margin: auto;
  width: 1440px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px 0 20px;
}

@media only screen and (max-width: 1280px) {
  .container {
    width: 100%;
  }
}
</style>
