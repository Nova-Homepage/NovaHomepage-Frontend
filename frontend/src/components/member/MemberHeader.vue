<template>
  <div class="member-header">
    <div class="title">동아리 회원</div>
    <div class="rectangle"></div>
    <div class="year-wrap">
    <!--나중에 반복으로 처리-->
      <div class="year"><p>2022</p></div>
      <div class="year"><p>2023</p></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Noto+Sans+KR&display=swap");

.member-header {
  margin: 30px auto;
  max-width: 1280px;
  width: 100%;
  text-align: center;
  align-items: center;
}

.title {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: #2493bf;
  text-shadow: -1px 0 #343434, 0 1px #343434, 1px 0 #343434, 0 -1px #343434;
}

.rectangle {
  margin: 8px auto;
  width: 200px;
  height: 5px;
  border-radius: 15px;
  border: 1px solid #343434;
  background: #2493bf;
}

.year-wrap {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.year {
  margin: 10px;
  width: 100px;
  height: 30px;
  background: #2493bf;
  border-radius: 15px;
  border: 1px solid #343434;
}

.year p {
  line-height: 30px;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
}
</style>