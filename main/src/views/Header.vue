<template>
    <div class="headerBox">
      <div class="tagBox">
        <el-tag
          v-for="tag in menuTagArray"
          :key="tag.path"
          closable
          :type="tag.type"
          @click="routeTo(tag.path)"
          @close="closeTag(tag.path)">
          {{tag.name}}
        </el-tag>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import {state,actions} from '@/action'
  import microAppMenu from '@/json/microAppMenu'

  window.addEventListener('helloBack', (e) => {
      console.log('from vue2-hash  helloBack - main',e.detail); // { key: 'value' }
  });
  export default {
    name: 'Header',
    components: {
    },
    data(){
      return {
        globalData:{}
      }
    },
    computed:{
      menuTagArray(){
        return this.$store.state.menuTagArray
      }
    },
    watch:{
      menuTagArray(){
        console.log('menuTagArray',this.menuTagArray)

      },
      $store(){
        console.log('$store',store)

      }
    },
    mounted(){
      // console.log('主项目2state',state,actions)
      this.globalData = state;

    },
  
    methods:{
      routeTo(path){
        this.$router.push(path)
      },
      closeTag(path){
        console.log('delMenuTag',path)
        const index = this.menuTagArray.findIndex(i=>i.path === path)
        console.log('index',index)
        if(index !== -1){
          this.$router.push(index === 0?'/': this.menuTagArray[index-1])
          this.$store.commit('delMenuTag',index)
        }
    },
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
  .tagBox{
    width: 100%;
    padding: 12px;
    transform: translateY(45px);
    span{
      float: left;
      margin-right: 10px;
    }
  }
  </style>