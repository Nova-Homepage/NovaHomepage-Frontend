<template>
    <div class="typing">
      {{displayText()}}
    </div>
</template>

<script>
export default {
    componets: {
    },
    data() {
      return {
        textdata : "IMAGE PROCESSING Algorithm, Application DevOps, Cloud ",
        index: 0,
      };
    },
    compueted: {
    },
    methods: {
      displayText(){
        return this.textdata.substring(0, this.index);
      },

      typing(){
        this.index ++;
        if(this.index >=this.textdata.length){
          return 0;
        }
        setTimeout(this.typing, 100);
      },
    },
    mounted(){
      this.typing();
    },
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital@1&family=Rubik+Mono+One&display=swap");

.typing {
  
} 
</style>