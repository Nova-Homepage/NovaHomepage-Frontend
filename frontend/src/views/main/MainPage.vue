<template>
    <div>
      <Header />
      <!-- <MainHeader /> -->
      <!-- 본문내용 들어갈부분 -->
      <router-view />
      <!-- 본문내용 들어갈부분 -->
      <MainFooter />
    </div>
</template>

<script>
import MainHeader from "@/components/main/MainHeader.vue";
import Header from "@/components/main/header.vue";
import MainFooter from "@/components/main/MainFooter.vue";
import MainHome from "@/components/main/MainHome.vue";

export default {
  name: "MainPage",
  components: {
    Header: Header,
    MainHeader: MainHeader,
    MainFooter: MainFooter,
    MainHome: MainHome
  },

};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>