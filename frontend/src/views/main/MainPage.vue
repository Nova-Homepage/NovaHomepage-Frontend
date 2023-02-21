<template>
  <body>
    <div class="wrap">
      <MainHeader />
      <!-- 본문내용 들어갈부분 -->
      <router-view />
      <!-- 본문내용 들어갈부분 -->
      <MainFooter />
    </div>
  </body>
</template>

<script>
import MainHeader from "@/components/main/MainHeader.vue";
import MainFooter from "@/components/main/MainFooter.vue";
import MainHome from "@/components/main/MainHome.vue";

export default {
  name: "MainPage",
  components: {
    MainHeader: MainHeader,
    MainFooter: MainFooter,
    MainHome: MainHome,
  },
  
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>