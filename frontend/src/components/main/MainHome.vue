<template>
    <div class="mainhome">
      <div class="text1">NOVA software club</div>
      <div class="typing">
        {{displayText()}}
      </div>
      <img class="logo" src="@/components/test_image.png" alt="">
      <img class="image1" :src="image1" alt=""/>
      <img class="image2" :src="image2" alt=""/>
      <img class="image3" :src="image3" alt=""/>
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
  width: 692px;
  height: 51px;
  position: relative;
  left: 700px;
  top: 800px;
}
.mainhome{
  position: relative;
  justify-content: center;
  width: 3000px;
  height: 1300px;
}

.text1{
  position: relative;
  width: 600px;
  height: 35px;
  left: 700px;
  top: 100px;
  font-size: 64px;
}
.logo{
  position: relative;
  width: 350px;
  height: 350px;
  left: 800px;
  top: 200px;
}
.image1{
  position: relative;
  left: -220px;
  top: 0px;
}
.image2{
  position: relative;
  left: -400px;
  top: 300px;
}
.image3{
  position: relative;
  left: -850px; 
  top: 600px;
}
</style>