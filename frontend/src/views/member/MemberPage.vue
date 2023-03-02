<template>
  <div>
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

</style>