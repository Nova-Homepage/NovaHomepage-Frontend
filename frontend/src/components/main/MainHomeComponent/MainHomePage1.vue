<template>
    <div class="mainhome">
      <div class="text1">NOVA software club</div>
      <div class="typing">
        {{displayText()}}
      </div>
      <img class="logo" src="@/components/test_image.png" alt="">
      <img class="vector_1" src="@/assets/mainpage_home/Vector_1.png" alt="">
      <img class="vector_2" src="@/assets/mainpage_home/Vector_2.png" alt="">
      <img class="vector_3" src="@/assets/mainpage_home/Vector_3.png" alt="">
      <img class="portal_1" src="@/assets/mainpage_home/Portal.png" alt="">
      <img class="portal_2" src="@/assets/mainpage_home/Portal.png" alt="">
      <img class="image1" :src="image1" alt=""/>
      <img class="image2" :src="image2" alt=""/>
      <img class="image3" :src="image3" alt=""/>
      <hr class="line_1">
      <hr class="line_2">
      <hr class="line_3">
      <div class="point_1"/>
      <div class="point_2"/>
      <div class="point_3"/>
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
        image1 : require("@/assets/mainpage_home/imgtest1.png"),
        image2 : require("@/assets/mainpage_home/imgtest2.png"),
        image3 : require("@/assets/mainpage_home/imgtest3.png"),
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
  top: 900px;
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
  top: 65px;
  font-size: 64px;
}
.logo{
  position: relative;
  width: 350px;
  height: 350px;
  left: 800px;
  top: 150px;
}
.image1{
  position: relative;
  left: -1020px;
  top: -30px;
  z-index: 3;
}
.image2{
  position: relative;
  left: -1200px;
  top: 300px;
  z-index: 2;
}
.image3{
  position: relative;
  left: -1650px; 
  top: 600px;
  z-index: 1;
}
.vector_1{
  position: relative;
  width: 166px;
  height: 196px;
  left: -200px;
  top: -280px;

}
.vector_2{
  position: relative;
  width: 300px;
  height: 400px;
  left: -250px;
  top: 250px;
}
.vector_3{
  position: relative;
  width: 271px;
  height: 210px;
  left: -700px;
  top: 700px;
}
.portal_1{
  position: relative;
  width: 101px;
  height: 101px;
  left: 200px;
  top: -150px;
}
.portal_2{
  position: relative;
  width: 61px;
  height: 61px;
  left: -325px;
  top: -315px;
}
.line_1{
  position: relative;
  width: 410px;
  left: 510px;
  top: -210px;
  border: 3px solid #252525;
  transform: rotate(135deg);
}
.line_2{
  position: relative;
  width: 744px;
  left: 650px;
  top: 100px;
  border: 3px solid #252525;
  transform: rotate(135deg);
}
.line_3{
  position: relative;
  width: 400px;
  left: 925px;
  top: 150px;
  border: 3px solid #252525;
  transform: rotate(135deg);
}
.point_1{
  position: relative;
  left: 710px;
  top: -115px;
  width: 25px;
  height: 25px;
  background-color: #252525;
  border-radius: 50%;
}
.point_2{
  position: relative;
  left: 900px;
  top: 300px;
  width: 25px;
  height: 25px;
  background-color: #252525;
  border-radius: 50%;
}
.point_3{
  position: relative;
  left: 1120px;
  top: 225px;
  width: 25px;
  height: 25px;
  background-color: #252525;
  border-radius: 50%;
}
</style>