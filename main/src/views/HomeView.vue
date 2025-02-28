<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to qiankun主项目"/>
    <div>
      <p>{{globalData.score}}</p>
      <button @click='addScore'>socre+1</button>
      <button @click='sendMsgToMircoApp'>给Vue2 hash 项目发送消息</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {state,actions} from '@/action'
window.addEventListener('helloBack', (e) => {
    console.log('from vue2-hash  helloBack - main',e.detail); // { key: 'value' }
});
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
    // console.log('主项目2state',state,actions)
    this.globalData = state;

  },

  methods:{
    addScore(){
      this.globalData.score++;
      actions.setGlobalState({ score:this.globalData.score });
    },
    sendMsgToMircoApp(){
      window.dispatchEvent(new CustomEvent('hello', {detail: {name: 'Sakura',age:17}}));
    }
  }
}
</script>
<style>
button{
  display:inline-block;
  padding: 12px;
  margin: 10px;
}
</style>