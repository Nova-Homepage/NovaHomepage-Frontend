<template>
  <div class="wrap">
    <MemberHeader />
    <div class="member-list-wrap">
      <MemberCard
      v-bind:memberData="memberData"/>
    </div>
  </div>
</template>

<script>
import MemberCard from "@/components/member/MemberCard.vue";
import MemberHeader from "@/components/member/MemberHeader.vue";

export default {
  components: {
    MemberHeader,
    MemberCard,
  },
  data() {
    return {
      memberData: [
        {
          name: "박지영",
          github: "https://github.com/yxxung",
          email: "loveus011@naver.com",
          phone: "010-0000-0000",
          blog: "https://github.com/yxxung",
        },
        {
          name: "방승재",
          github: "https://github.com/Bangseungjae",
          email: "tmdwo5825@naver.com",
          phone: "010-1111-0000",
          blog: "https://github.com/Bangseungjae",
        },
      ],
    };
  },
};
</script>

<style>
.wrap {
  background-image: url(@/assets/icon/background1.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  z-index: -999;
}

.member-list-wrap {
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  background: transparent;
}
</style>