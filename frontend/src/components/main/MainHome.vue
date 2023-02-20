<template>
    <div class="mainhome">
      <div>NOVA software club</div>
      <div class="typing">
        {{displayText()}}
      </div>
      <img src="@/components/test_image.png" alt="">
      <img :src="image1" alt=""/>
      <img :src="image2" alt=""/>
      <img :src="image3" alt=""/>
    </div>
</template>

<script>
export default {
    componets: {
    },
    data() {
      return {
        textdata : "IMAGE PROCESSING\nAlgorithm, Application\nDevOps, Cloud",
        index: 0,
        image1 : require("@/components/test_image.png"),
        image2 : require("@/components/test_image.png"),
        image3 : require("@/components/test_image.png"),
      };
    },
    compueted: {
    },
    methods: {
      displayText(){
        return this.textdata.substring(0, this.index);
      },

      typing(){
        this.index ++;
        if(this.index >=this.textdata.length){
          return 0;
        }
        setTimeout(this.typing, 100);
      },
    },
    mounted(){
      this.typing();
    },
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Rubik+Mono+One&display=swap");

.typing {
  white-space: pre-wrap;
  font-size: 64px;
  color: #2493bf;
}
.mainhome{
  background-image: url(@/components/test_image.png);
}
</style>