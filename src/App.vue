<template>
  <div class="container">
    <Header />
    <BreadCramps />
    <main>
      <router-view></router-view>
    </main>
    <Footer style="margin-top: auto;" />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import BreadCramps from '@/components/BreadCramps.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
  components: {
    Header, BreadCramps, Footer
  }
}  
</script>
<script setup>
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  font-family: Lohit Devanagari;
}

@font-face {
  font-family: "Lohit Devanagari";
  src: url(fonts/Lohit-Devanagari.ttf);
}

.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 1440px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px 0 20px;
  min-height: 100vh;
}

@media only screen and (max-width: 1280px) {
  .container {
    width: 100%;
  }
}
</style>
