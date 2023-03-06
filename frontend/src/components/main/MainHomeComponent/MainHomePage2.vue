<template>
  <div class="HomePage2_body">
    <div class="HomePage2_text">
      <h1>What we do</h1>
      <span>Lorem ipsum dolor sit amet<br>consectetur test test test.<br>Adipiscing mauris convallis in<br>ac in nullam test test test.<br>Ullamcorper aliquet nec adipiscing ac<br>lorem this is design not code</span>
    </div>
    <hr>
    <div class="Home_icons_wrap">
      <div class="Home_icons">
        <img src="@/assets/mainpage_home/dummy_icon.png" alt="">
        <span>Algorithm</span>
      </div>
      <div class="Home_icons">
        <img src="@/assets/mainpage_home/dummy_icon.png" alt="">
        <span>Application</span>
      </div>
      <div class="Home_icons">
        <img src="@/assets/mainpage_home/dummy_icon.png" alt="">
        <span>DebOps</span>
      </div>
      <div class="Home_icons">
        <img src="@/assets/mainpage_home/dummy_icon.png" alt="">
        <span>Cloud</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    componets: {},
    data() { return {}; },
    compueted: {},
    methods: {}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Rubik+Mono+One&display=swap");

.HomePage2_body{
  position: relative;
  width: 1440px;
  height: 1000px;
  display: flex;
}
.HomePage2_body hr{
  position: relative;
  border: 10px solid #252525;
  width: 0px;
  height: 450px;
  left: 100px;
  top: 100px;
}
.HomePage2_text{
  width:500px;
}
.HomePage2_text h1{
  position: relative;
  top: 100px;
  left: 200px;
  width: 170px;
  height: 120px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 60px;

  display: flex;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #252525;
}
.HomePage2_text span{
  position: relative;
  width: 420px;
  height: 200px;
  left: 200px;
  top: 250px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  display: flex;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #252525;
  white-space: pre-wrap;
}
.Home_icons_wrap{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  top: 100px;
  left: -100px;
  width: 500px;
  height: 500px;
  overflow: hidden;
}

.Home_icons{
  text-align: center;
  width: 250px;
  height: 250px;
}
.Home_icons img{
  display: block;
  width: 175px;
  height: 175px;
  margin: auto;
}
</style>