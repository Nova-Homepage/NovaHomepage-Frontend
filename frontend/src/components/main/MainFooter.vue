<template>
  <hr/>
  <body class="MainFooter">
    <div class="Text">
      위치 : 청주시 서원구 상당로 111로 (모름) / 연락처: 010-0000-0000/회장 : 일훈, 부회장 : 양수진
    </div>
    <div class="Link"> 
      <!-- 나중에 링크로 처리해줘야함 -->
      개인정보 처리방침 | 이용약관 | 업무제휴 | 고객지원 | 방승재의 일상
    </div>
  </body>
</template>

<script>
export default {
    componets: {
    },
    data() {
      return {
      };
    },
    compueted: {

    },
    methods: {

    },
  }
  </script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Rubik+Mono+One&display=swap");

@media screen and (max-width:768px) {
  .MainFooter .Text{
    display: none;
  }
  .MainFooter .Link{
    position: relative;
    text-align: center;
    overflow : hidden;
    font-size : 16px;
    line-height: 16px;
    width: 80%;
    margin: 10px 10% 10px 10%;
  }
}

@media screen and (min-width:769px){
.MainFooter {
  position: relative;
  text-align: center;
  overflow : hidden;
  font-size : 16px;
  line-height: 20px;
  width: 80%;
  margin: 30px 10% 30px 10%;
}
.MainFooter .Text{
 padding-top: 0px;
}
}
</style>