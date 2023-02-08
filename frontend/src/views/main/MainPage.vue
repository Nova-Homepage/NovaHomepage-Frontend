<template>
  <body>
    <div class="wrap">
      <MainHeader />
    </div>
  </body>
</template>

<script>
import MainHeader from "@/components/main/MainHeader.vue";

export default {
  name: "MainPage",
  components: {
    MainHeader: MainHeader,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>