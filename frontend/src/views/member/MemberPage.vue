<template>
  <div class="wrap">
    <MemberHeader />
    <MemberCard />
  </div>
</template>

<script>
import MemberCard from "@/components/member/MemberCard.vue";
import MemberHeader from "@/components/member/MemberHeader.vue";

export default {
    components: {
        MemberHeader,
        MemberCard
    }
}
</script>

<style>
.wrap{
    background-image: url(@/assets/icon/background1.svg);
    background-repeat:no-repeat;
    background-position:center center;
    background-attachment:fixed;
    z-index: -999;
}
</style>