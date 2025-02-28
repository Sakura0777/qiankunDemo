<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to vue2 hash项目"/>
    <div>
      <p>{{globalData.score}}</p>
      <button @click='addScore'>socre+1</button>
      <button @click="gotoVue3">跳转vue2-history项目</button>
      <button @click='sendMsgToMainApp'>给主项目发送消息</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import actions from '@/action'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return {
      globalData:{}
    }
  },
  mounted(){
    console.log('vue2子项目state',actions)
    this.globalData = actions.state;
  },
  methods:{
    addScore(){
      this.globalData.score++;
      actions.setGlobalState({ score:this.globalData.score });
    },
    gotoVue3(){
      console.log('gotoVue3',this.$root.parentRouter.push('/vue2-micro-app'))
    },
    sendMsgToMainApp(){
      window.dispatchEvent(new CustomEvent('helloBack', {detail: {name: 'lux',age:17}}));
    }
  }
}
</script>
<style lang="less">
button{
  display:inline-block;
  padding: 12px;
  margin: 10px;
}
</style>
