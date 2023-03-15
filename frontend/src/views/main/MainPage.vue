<template>
    <div>
      <Header />
      <!-- 본문내용 들어갈부분 -->
      <router-view />
      <!-- 본문내용 들어갈부분 -->
      <Footer />
    </div>
</template>

<script>
import Header from "@/components/main/header.vue";
import Footer from "@/components/main/MainFooter.vue";
import MainHome from "@/components/main/MainHome.vue";

export default {
  name: "MainPage",
  components: {
    Header: Header,
    Footer: Footer,
    MainHome: MainHome
  },

};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>