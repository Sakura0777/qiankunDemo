<template>
  <div id="app">
    <div class="left">
            <LeftMenu></LeftMenu>
    </div>

    <div class="right">
      <div class="topBanner">
        <Header></Header>
      </div>
      <div>
        <Keep-alive>
          <div id="appContainer"></div>
          <router-view/>
        </Keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from './views/LeftMenu.vue';
import Header from './views/Header.vue'
import {state,actions} from '@/action'

export default{
  components: {
    LeftMenu,Header
  },
  data(){
    return {
      globalData:{}
    }
  },
  mounted(){
    // console.log('主项目2state',state,actions)
    this.globalData = state;
  }
}


</script>
<style lang="less">
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction:row;
}

.left {
  padding: 24px;
  width: 300px;
  height: 100vh;
  background-color: #41b883;
  text-align: left;

  a {
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    // border: 1px dashed salmon;
    font-weight: bold;
    color: #0d64bb;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
.right{
  height: 100vh;
  flex-grow: 1;
  padding: 0 12px;
  .topBanner{
    width: 100%;
    height: 100px;
    background-color: #41b883;
  }

}
</style>
