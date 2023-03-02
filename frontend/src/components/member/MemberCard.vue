<template>
  <div class="member-card">
    <div class="member-photo-wrap">
      <div class="member-photo">
        <img src="@/components/test_image.png" />
      </div>
      <p class="member-name">박지영</p>
    </div>
    <ul class="member-info">
      <li class="member-github">https://github.com/yxxung</li>
      <li class="member-email">loveus011@naver.com</li>
      <li class="member-phone">010-0000-0000</li>
      <li class="member-blog">https://blog.com/yxxung</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MemberCard",
  props: {},
  data() {
    return {};
  },
  compueted: {},
  methods: {},
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Noto+Sans+KR&display=swap');

.member-card {
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 200px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  border-radius: 11px;
}

.member-photo-wrap {
  width: 50%;
  text-align: center;
}

.member-photo {
  margin: 1rem auto;
  width: 125px;
  height: 125px;
}

.member-photo img {
  width: 100%;
  height: 100%;
  border-radius: 15rem;
}

.member-name {
  font-size: 18px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding-top: 0.1rem;
}

.member-info {
  width: 50%;
  margin: auto auto;
  font-family: 'Noto Sans KR', sans-serif;
}

.member-email {
  margin-top: 2rem;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>