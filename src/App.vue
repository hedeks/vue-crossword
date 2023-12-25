<template>
  <div class="container">
    <Header />
    <BreadCramps />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition :duration="100" name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
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
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // transform: translateY(30px);
}

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

@font-face {
  font-family: "Quensides";
  src: url(fonts/Quensides.ttf);
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

main {
  flex: 1;
}

@media only screen and (max-width: 1440px) {
  .container {
    width: 100%;
  }
}
</style>
