<template>
    <div class="headerBox">
      <div class="breadcrumbBox">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="name,index in breadcrumbArray" :key="'bread'+index">{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="tagBox">
        <el-tag
          v-for="(tag,index) in menuTagArray"
          :key="tag.path"
          :closable="Boolean(index)"
          :type="activedTagIndex === index?'':'info'"
          @click="routeTo(tag.path,index)"
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
      breadcrumbArray(){
        return this.$store.state.menuTagArray[this.activedTagIndex].menuRoute
      },
      activedTagIndex(){
        return this.$store.state.activedTagIndex
      },
      menuTagArray(){
        return this.$store.state.menuTagArray
      }
    },
    watch:{
      activedTagIndex(){
        console.log('activedTagIndex',this.activedTagIndex)
      },
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
      routeTo(path,index){
        if(this.activedTagIndex === index){
          return
        }
        this.$router.push(path)
        this.$store.commit('setActivedTagIndex',index)
      },
      closeTag(path){
        console.log('delMenuTag',path)
        const index = this.menuTagArray.findIndex(i=>i.path === path)
        console.log('index',index)
        this.$store.commit('delMenuTag',index)
        if(index === this.activedTagIndex){
          this.$router.push(this.menuTagArray[index-1])
          this.$store.commit('setActivedTagIndex',index-1)
        }else if(index < this.activedTagIndex ){
          this.$store.commit('setActivedTagIndex',this.activedTagIndex-1)
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
  .breadcrumbBox{
    width: 100%;
    padding: 18px;
  }
  .tagBox{
    width: 100%;
    padding: 12px;
    span{
      float: left;
      margin-right: 10px;
    }
  }
  </style>