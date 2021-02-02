<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 不建议这种直接写法，建议放入div中，在div中控制isActive -->
    <slot v-if="isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <!-- 之所以在div中绑定class而不是在slot上，是因为slot将被替换 -->
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name:"TabBarItem",
    props:{
      path: String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)
      },
      activeStyle(){
        return !this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>
<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
</style>