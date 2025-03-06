<template>
  <div id="app">
    <nav v-if="!POWERED_BY_QIANKUN">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/info/query">业务类型信息查询</router-link> | 
      <router-link to="/info/add">业务类型信息新增</router-link> | 
      <router-link to="/info/modify">业务类型信息修改</router-link> | 
      <router-link to="/info/delete">业务类型信息删除</router-link>
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
    console.log('window.__POWERED_BY_QIANKUN__',window.__POWERED_BY_QIANKUN__)
    window.addEventListener('hello', (e) => {
    console.log('from main  hello vue2-hash',e.detail); // { key: 'value' }
    });
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
