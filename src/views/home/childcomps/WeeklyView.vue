<template>
  <div class="weekly">
    <a href="">
      <img :src="weeklyitem.image" alt="">
    </a>
  </div>
</template>
<script>
export default {
  name: 'WeeklyView',
  props: {
    weeklyitem: {
      type: Object,
      default() {
          return {} 
      }
    }
  }
}
</script>
<style scoped>
  .weekly {
    text-align: center;
  }
  .weekly img {
    width: 100%;
  }
</style>