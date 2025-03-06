<template>
  <div id="app">
    <nav v-if="!POWERED_BY_QIANKUN">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/project/query">监管项目集查询</router-link> | 
      <router-link to="/project/add">监管项目集新增</router-link> | 
      <router-link to="/project/modify">监管项目集修改</router-link> | 
      <router-link to="/project/delete">监管项目集删除</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default{
  computed:{
    POWERED_BY_QIANKUN(){
      return window.__POWERED_BY_QIANKUN__
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
