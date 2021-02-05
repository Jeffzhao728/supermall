<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">Shoping</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <weekly-view :weeklyitem="weeklyitem"></weekly-view>
    <tab-control class="tab-control" :titles="['Populor','New','Classical']" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar.vue"
  import {getHomeMultiData, getHomeGoodsData} from "network/home.js"
  import HomeSwiper from './childcomps/HomeSwiper'
  import RecommendView from './childcomps/RecommendView.vue'
  import WeeklyView from './childcomps/WeeklyView.vue'
  import TabControl from 'components/content/tabcontrol/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'

  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommends:[],
        weeklyitem:{},
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType:'pop'
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      WeeklyView,
      TabControl,
      GoodsList,
    },
    created(){
      this.getHomeMultiData()
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    methods:{
      getHomeMultiData(){
        getHomeMultiData()
        .then(res => {
          //console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
          this.weeklyitem = res.data.weeklyitem
        })
      },
      getHomeGoodsData(type){
        const page = this.goods[type].page + 1
        getHomeGoodsData(type, page)
        .then(res => {
          // console.log(res)
          // console.log(res)
          this.goods[type].list.push(...res.data[type].list);
          this.goods[type].page += 1
        })
      },
      tabClick(index) {
        // if(index == 1){
        //   this.currentType = 'new'
        // }else if(index == 2){
        //   this.currentType = 'sell'
        // }else{
        //   this.currentType = 'pop'
        // }
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        // console.log(this.currentType)
      }
    }
  }
</script>
<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
    /* background-color: #fff; */
  }
</style>