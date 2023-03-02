<template>
  <body>
    <div
      class="member-card"
      v-for="member in memberData"
      v-bind:key="member.memberID"
    >
      <div class="member-photo-wrap">
        <div class="member-photo">
          <img src="@/components/test_image.png" />
        </div>
        <p class="member-name">{{ member.name }}</p>
      </div>
      <ul class="member-info">
        <li v-if="member.github !== 'null'" class="member-github">
          {{ member.github }}
        </li>
        <li v-if="member.github === 'null'" class="member-github">없음</li>
        <li v-if="member.email !== 'null'" class="member-email">
          {{ member.email }}
        </li>
        <li v-if="member.email === 'null'" class="member-email">없음</li>
        <li v-if="member.phone !== 'null'" class="member-phone">
          {{ member.phone }}
        </li>
        <li v-if="member.phone === 'null'" class="member-phone">없음</li>
        <li v-if="member.blog !== 'null'" class="member-blog">
          {{ member.blog }}
        </li>
        <li v-if="member.blog === 'null'" class="member-blog">없음</li>
      </ul>
    </div>
  </body>
</template>

<script>
export default {
  name: "MemberCard",
  props: { memberData: Object },
  methods: {},
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Noto+Sans+KR&display=swap");

.member-card {
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 200px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
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
  font-family: "Noto Sans KR", sans-serif;
  margin: 0;
  padding-top: 0.1rem;
}

.member-info {
  width: 50%;
  margin: auto 15px;
  font-family: "Noto Sans KR", sans-serif;
}

.member-info li {
  word-break:break-all;
}

.member-email {
  margin-top: 2rem;
  font-family: "Noto Sans KR", sans-serif;
}
</style>