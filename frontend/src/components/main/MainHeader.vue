<template>
  <div class="body">
    <nav class="nav">
      <div class="nav__logo">
        <router-link to="/home" class="nav__logo_text">NOVA</router-link>
      </div>

      <div class="nav__menu">
            <router-link to="/Documents" class="disableLink">
                Documents
            </router-link>
            <router-link to="/Members" class="disableLink">
                Members
            </router-link>
            <router-link to="/Communication" class="disableLink">
              Communication
            </router-link>
            <router-link to="/Play" class="disableLink">
                Play
            </router-link>
      </div>

      <div class="nav__sign">
        <!-- 로그인 안할경우 -->
        <div v-if=!login class="nav__signUp">
          <router-link to="/SigninPage">SignUp</router-link>
        </div>
        <div v-if=!login class="nav__signIn">
          <router-link to="/SigninPage">SignIn</router-link>
        </div>
        <!-- 로그인 할경우 -->
        <div v-if=login class="nav__user">
          <router-link to="/MyPage">{{username}} 회원님</router-link>
        </div>
      </div>
    </nav>
    <hr/>
  </div>
</template>

<script>
export default {
    componets: {
    },
    data() {
      return {
        login : true,
        username : "아무개",
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
.body{
  position: relative;
}

.nav{
  display : flex;
  position: relative;
  left: 150px;
}
.nav__sign{
  display : flex;
  align-items: center;
  padding-left: 5px;
}

.nav__menu{
  display : flex;
  align-items: center;
}

.nav__logo_text{
  position: relative;
  left: 0px;
  top: 28px;
  font-family: 'Rubik One';
  font-style: normal;
  font-weight: 1000;
  font-size: 32px;
  line-height: 20px;
  padding-right : 100px;

  display: flex;
  align-items: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #252525;
}

.disableLink{
  font-size: 20px;
  color : #666666;
  padding : 25px;
  padding-right : 50px;
  padding-left : 50px;
}

.nav__signUp{
  font-size: 20px;
  padding : 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav__signIn{
  font-size: 20px;
  width: 100px;
  height: 40px;
  border: 2px solid #5D5D5D;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__user{
  color: #1B57A6;
  font-size: 20px;
  width: 150px;
  height: 40px;
  border: 2px solid #1B57A6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
}
</style>