<template>
    <nav class="nav">
      <div class="nav__logo"><router-link to="/home" class="disableLink">NOVA</router-link></div>
      <input type="checkbox" id="expand-menu" name="expand-menu">
      <div class="nav__wrap">
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
      </div>
    </nav>
    <hr />
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
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

@media screen and (max-width:768px) {
  .nav {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-family: "Noto Sans KR", sans-serif;
    min-height: 8vh;
    font-size: 3vw;
  }
  .nav__logo {
    font-family: "Rubik Mono One", sans-serif;
    font-weight: 800;
    font-size: 2.5em;
    line-height: 20px;
    color: #252525;
    vertical-align: middle;
  }
  .nav__logo .disableLink{
    color: #252525;
  }
  .nav__wrap{
    display:none;
  }
  #expand-menu:checked ~ .nav__wrap{
    display:block;
    height:auto
  }
}

@media screen and (min-width:769px) and (max-width:1280px) {
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    font-family: "Noto Sans KR", sans-serif;
    min-height: 8vh;
    font-size: 14px;
  }
  .nav__logo {
    width: 14%;
    font-family: "Rubik Mono One", sans-serif;
    font-weight: 800;
    font-size: 2.1em;
    line-height: 20px;
    color: #252525;
    vertical-align: middle;
  }
  .nav__logo .disableLink{
    color: #252525;
  }
  #expand-menu{
    display: none;
  }
  .nav__wrap{
    width:66%;
    display:flex;
    align-items: center;
  }
  .nav__menu {
    width: 78.6%;
    display: flex;
    justify-content: space-between;
  }
  
  .nav__menu .disableLink {
    font-size: 1.3em;
    color: #3c3c3c;
    margin-right: 1%;
    margin-left: 1%;
    font-weight: 500;
  }
  
  .nav__sign {
    width: 21.4%;
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
  }
  
  .nav__user {
    width: 100px;
    height: 25px;
    border: 2px solid #1b57a6;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
  }
  
  .nav__user a {
    color: #1b57a6;
    font-size: 1em;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
  }
  
  .nav__github_signin img {
    width: 100%;
  }
}

@media screen and (min-width:1281px) {
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-family: "Noto Sans KR", sans-serif;
  min-height: 8vh;
  font-size: 16px;
}

.nav__logo {
  width: 10%;
  font-family: "Rubik Mono One", sans-serif;
  font-weight: 800;
  font-size: 2.1em;
  line-height: 20px;
  color: #252525;
  vertical-align: middle;
}
.nav__logo .disableLink{
  color: #252525;
}

.nav__menu {
  width: 78.6%;
  display: flex;
  justify-content: space-between;
}
  #expand-menu{
    display: none;
  }
.nav__wrap{
  width:70%;
  display:flex;
  align-items: center;
}

.nav__menu .disableLink {
  font-size: 1.3em;
  color: #3c3c3c;
  margin-right: 5%;
  margin-left: 5%;
  font-weight: 500;
}

.nav__sign {
  width: 21.4%;
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
}

.nav__user {
  width: 120px;
  height: 40px;
  border: 3px solid #1b57a6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
}

.nav__user a {
  color: #1b57a6;
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
}

.nav__github_signin img {
  width: 100%;
}
}
</style>