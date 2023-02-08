<template>
  <body>
    <nav class="nav">
      <div class="nav__logo">
        <router-link to="/">NOVA</router-link>
      </div>

      <div class="nav__menu">
            <router-link to="/home">
                Documents
            </router-link>
            <router-link to="/MainBoard">
                Members
            </router-link>
            <router-link to="/Politician">
                Communication
            </router-link>
            <router-link to="/Mypage">
                Play
            </router-link>
        </div>

      <div class="nav__signIn"><p>Sign in</p></div>
      <div class="nav__signUp"><p>Sign up</p></div>
    </nav>
  </body>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Rubik+Mono+One&display=swap");
</style>