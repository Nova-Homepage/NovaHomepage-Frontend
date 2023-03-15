<template>
    <div class="HomePage1_body">
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
      <img class="image1" :src="image1" alt="image1"/>
      <img class="image2" :src="image2" alt="image2"/>
      <img class="image3" :src="image3" alt="image3"/>
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
@media screen and (min-width:1280px) {
.HomePage1_body{
  position: relative;
  justify-content: center;
  width: 1280px;
  height: 1280px;
  margin: 0 auto;
}
.typing {
  white-space: pre-wrap;
  font-size: 64px;
  color: #2493bf;
  width: 700px;
  height: 50px;
  position: relative;
  left: 600px;
  top: 900px;
}
.text1{
  position: relative;
  width: 600px;
  height: 35px;
  left: 600px;
  top: 65px;
  font-size: 64px;
}
.logo{
  position: relative;
  width: 350px;
  height: 350px;
  left: 700px;
  top: 150px;
}
.image1{
  position: relative;
  left: 130px;
  top: -480px;
  width: 325px;
  height: 402px;
  z-index: 3;
}
.image2{
  position: relative;
  left: -25px;
  top: -150px;
  width: 294px;
  height: 437px;
  z-index: 2;
}
.image3{
  position: relative;
  left: -500px; 
  top: 150px;
  width: 325px;
  height: 409px;
  z-index: 1;
}
.vector_1{
  position: relative;
  width: 166px;
  height: 196px;
  left: -300px;
  top: -280px;

}
.vector_2{
  position: relative;
  width: 300px;
  height: 400px;
  left: -350px;
  top: 250px;
}
.vector_3{
  position: relative;
  width: 271px;
  height: 210px;
  left: -800px;
  top: 700px;
}
.portal_1{
  position: relative;
  width: 100px;
  height: 100px;
  left: 40px;
  top: -150px;
}
.portal_2{
  position: relative;
  width: 60px;
  height: 60px;
  left: -440px;
  top: -300px;
}
.line_1{
  position: relative;
  width: 410px;
  left: 450px;
  top: -650px;
  border: 3px solid #252525;
  transform: rotate(135deg);
}
.line_2{
  position: relative;
  width: 744px;
  left: 550px;
  top: -350px;
  border: 3px solid #252525;
  transform: rotate(135deg);
}
.line_3{
  position: relative;
  width: 400px;
  left: 825px;
  top: -300px;
  border: 3px solid #252525;
  transform: rotate(135deg);
}
.point_1{
  position: relative;
  left: 630px;
  top: -550px;
  width: 25px;
  height: 25px;
  background-color: #252525;
  border-radius: 50%;
}
.point_2{
  position: relative;
  left: 780px;
  top: -150px;
  width: 25px;
  height: 25px;
  background-color: #252525;
  border-radius: 50%;
}
.point_3{
  position: relative;
  left: 1000px;
  top: -225px;
  width: 25px;
  height: 25px;
  background-color: #252525;
  border-radius: 50%;
}
}
@media screen and (max-width:1279px) {
  .HomePage1_body{
    position: relative;
    justify-content: center;
    width: 768px;
    height: 750px;
    margin: 0 auto;
  }
  .typing {
    white-space: pre-wrap;
    font-size: 38px;
    color: #2493bf;
    width: 420px;
    height: 30px;
    position: relative;
    left: 360px;
    top: 540px;
  }
  .text1{
    position: relative;
    width: 360px;
    height: 21px;
    left: 360px;
    top: 39px;
    font-size: 38px;
  }
  .logo{
    position: relative;
    width: 210px;
    height: 210px;
    left: 420px;
    top: 90px;
  }
  .image1{
    position: relative;
    left: 78px;
    top: -288px;
    width: 195px;
    height: 241px;
    z-index: 3;
  }
  .image2{
    position: relative;
    left: -15px;
    top: -90px;
    width: 166px;
    height: 262px;
    z-index: 2;
  }
  .image3{
    position: relative;
    left: -300px; 
    top: 90px;
    width: 195px;
    height: 245px;
    z-index: 1;
  }
  .vector_1{
    position: relative;
    width: 100px;
    height: 117px;
    left: -180px;
    top: -168px;
  
  }
  .vector_2{
    position: relative;
    width: 180px;
    height: 240px;
    left: -210px;
    top: 150px;
  }
  .vector_3{
    position: relative;
    width: 162px;
    height: 126px;
    left: -480px;
    top: 420px;
  }
  .portal_1{
    position: relative;
    width: 60px;
    height: 60px;
    left: 24px;
    top: -90px;
  }
  .portal_2{
    position: relative;
    width: 36px;
    height: 36px;
    left: -264px;
    top: -180px;
  }
  .line_1{
    position: relative;
    width: 246px;
    left: 270px;
    top: -390px;
    border: 2.5px solid #252525;
    transform: rotate(135deg);
  }
  .line_2{
    position: relative;
    width: 446px;
    left: 330px;
    top: -210px;
    border: 2.5px solid #252525;
    transform: rotate(135deg);
  }
  .line_3{
    position: relative;
    width: 240px;
    left: 495px;
    top: -180px;
    border: 2.5px solid #252525;
    transform: rotate(135deg);
  }
  .point_1{
    position: relative;
    left: 375px;
    top: -343px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
  }
  .point_2{
    position: relative;
    left: 465px;
    top: -95px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
  }
  .point_3{
    position: relative;
    left: 600px;
    top: -140px;
    width: 15px;
    height: 15px;
    background-color: #252525;
    border-radius: 50%;
  }
  }
</style>