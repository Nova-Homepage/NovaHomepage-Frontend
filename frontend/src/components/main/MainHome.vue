<template>
    <MainHomePage1 />
    <MainHomePage2 />
    <MainHomePage3 />
</template>

<script>
import MainHomePage1 from "@/components/main/MainHomeComponent/MainHomePage1.vue";
import MainHomePage2 from "@/components/main/MainHomeComponent/MainHomePage2.vue";
import MainHomePage3 from "@/components/main/MainHomeComponent/MainHomePage3.vue";

export default {
    components: {
        MainHomePage1: MainHomePage1,
        MainHomePage2: MainHomePage2,
        MainHomePage3: MainHomePage3,
    },
    data() {return {};},
    compueted: {},
    methods: {},
}
</script>