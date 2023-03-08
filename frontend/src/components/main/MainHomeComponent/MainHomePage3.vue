<template>
<div class="HomePage3_body">
  <div class="book">
    <div class="back"></div>
    <div class="page6">오른쪽페이지블라블라블라</div>
    <div class="page5">왼쪽페이지블라블라블라</div>
    <div class="page4"></div>
    <div class="page3"></div>
    <div class="page2"></div>
    <div class="page1"></div>
    <div class="front">노바에 들어오는 방법@@@@@</div>
  </div>
</div>
</template>

<script>
export default {
    componets: {},
    data() { return {};},
    compueted: {},
    methods: {}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Rubik+Mono+One&display=swap");

.HomePage3_body{
  width: 1440px;
  height: 1000px;
}

.book {
  transform-style: preserve-3d;
  position: relative;
  left: 500px;
  height: 450px;
  width: 600px;
  cursor: pointer;
  backface-visibility: visible;
}

.front, .back, .page1, .page2, .page3, .page4, .page5, .page6 {
  transform-style: preserve-3d;
  position: absolute;
  width: 450px;
  height: 600px;
  top: 0; left: 0;
  transform-origin: left center;
  transition: transform .5s ease-in-out, box-shadow .35s ease-in-out;
}

.front, .back {
  background: rgb(18, 197, 209);
}

.front, .page1, .page3, .page5 {
  border-bottom-right-radius: .5em;
  border-top-right-radius: .5em;
}

.back, .page2, .page4, .page6 {
  border-bottom-right-radius: .5em;
  border-top-right-radius: .5em;
}

.page1 { 
  background: #efefef;
}

.page2 {
  background: #efefef;
}

.page3 {
  background: #f5f5f5;
}

.page4 {
  background: #f5f5f5;
}

.page5 {
  background: #fafafa;
}

.page6 {
  background: #fdfdfd;
}

.book:active .front {
  transform: rotateY(-160deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:active .page1 {
  transform: rotateY(-155deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:active .page2 {
  transform: rotateY(-25deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:active .page3 {
  transform: rotateY(-150deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:active .page4 {
  transform: rotateY(-30deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:active .page5 {
  transform: rotateY(-145deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:active .page6 {
  transform: rotateY(-35deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:active .back {
  transform: rotateY(-20deg) scale(1.1);
}
</style>