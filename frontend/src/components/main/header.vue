<template>
  <body>
    <nav class="nav">
      <router-link to="/home"><div class="nav__logo">NOVA</div></router-link>

      <div class="nav__menu">
        <router-link to="/Documents" class="disableLink">Documents</router-link>
        <router-link to="/Members" class="disableLink"> Members</router-link>
        <router-link to="/Communication" class="disableLink">Communication</router-link>
        <router-link to="/Play" class="disableLink">Play</router-link>
      </div>

      <div class="nav__sign">
        <!-- 로그인 안할경우 -->
        <button v-if="!login" class="nav__github_signin">
          <img src="@/assets/icon/github-logo.svg" />
        </button>

        <!-- 로그인 할경우 -->
        <div v-if="login" class="nav__user">
          <router-link to="/MyPage">{{ username }} 회원님</router-link>
        </div>
      </div>
    </nav>
    <hr />
  </body>
</template>

<script>
export default {
  componets: {},
  data() {
    return {
      login: true,
      username: "아무개",
    };
  },
  compueted: {},
  methods: {},
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Rubik+Mono+One&display=swap");

.nav {
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  min-height: 8vh;
}

.nav__logo {
  width: 10%;
  margin-left: 10px;
  font-family: "Rubik Mono One", sans-serif;
  font-weight: 800;
  font-size: 35px;
  line-height: 20px;
  color: #252525;
  vertical-align: middle;
}

.nav__menu {
  width: 60%;
  margin-left: 120px;
  display: flex;
  justify-content: space-between;
}

.disableLink {
  font-size: 18px;
  color: #3c3c3c;
  padding: 25px;
  padding-right: 50px;
  padding-left: 50px;
  font-weight: 500;
}

.nav__sign {
  width: 30%;
  margin-left: 100px;
}

.nav__github_signin {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  margin-left: 150px;
}

.nav__user {
  width: 120px;
  height: 40px;
  border: 3px solid #1b57a6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
}

.nav__user a {
  color: #1b57a6;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
}

.nav__github_signin img {
  width: 100%;
}
</style>