<template>
  <div id="app">
    <div class="left">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/vue2-hash-micro-app">vue2-hash路由子项目</router-link>
      <router-link to="/vue2-micro-app">vue2-history路由子项目</router-link>
      <router-link to="/vue3-micro-app">vue3子项目</router-link>
   
    </div>
    <div class="right">
      <div class="topBanner">
        <p>{{globalData.userName}}</p>
        <p>{{globalData.userID}}</p>
      </div>
      <div>
        <div id="appContainer" ></div>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import {state,actions} from '@/action'

export default{
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
  width: 250px;
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
    color: #0d64bb;
  }

}
</style>
