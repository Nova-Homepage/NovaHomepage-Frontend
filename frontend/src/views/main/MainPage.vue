<template>
  <body>
    <div class="wrap">
      <MainHeader />

      <!-- 본문내용 들어갈부분 -->

      <MainFooter />
    </div>
  </body>
</template>

<script>
import MainHeader from "@/components/main/MainHeader.vue";
import MainFooter from "@/components/main/MainFooter.vue";

export default {
  name: "MainPage",
  components: {
    MainHeader: MainHeader,
    MainFooter: MainFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>