<template>
    <div class="headerBox">
      <div class="breadcrumbBox">
        <el-breadcrumb separator="/">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item key='/0'><a @click.prevent="gotoMain()">首页</a></el-breadcrumb-item>
            <el-breadcrumb-item v-for="name,index in breadcrumbArray" :key="'bread'+index">{{ name }}</el-breadcrumb-item>
          </transition-group>
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
        breadcrumbArray:[],
        globalData:{}
      }
    },
    computed:{
      menuRoute(){
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
      menuRoute(newVal,oldVal){
        if(oldVal.length === 0 || newVal.length === 0){
          this.breadcrumbArray = this.menuRoute
        }
        // console.log('breadcrumbArray--oldVal',oldVal)
        // console.log('breadcrumbArray--newVal',newVal)
        let index = oldVal.findIndex((item,index)=>item !== newVal[index])
        // console.log('index',index)
          if(index === -1){
            index = 0
            this.breadcrumbArray = []
          }else{
            this.breadcrumbArray = oldVal.slice(0,index)
          }
        this.$nextTick(()=>{
          for(let j = index;j<newVal.length;j++){
            this.breadcrumbArray.push(newVal[j])
          }
          window.sessionStorage.setItem('breadcrumbArray', this.breadcrumbArray);
        })
      },
      activedTagIndex(){
        window.sessionStorage.setItem('activedTagIndex', this.activedTagIndex);
      },
      menuTagArray(){
        window.sessionStorage.setItem('menuTagArray', JSON.stringify(this.menuTagArray));
      }
    },
    mounted(){
      // console.log('主项目2state',state,actions)
      this.globalData = state;
      window.addEventListener('load', ()=> {
        if (window.performance.getEntriesByType("navigation")[0].type == 'reload') {
            console.log('页面是通过刷新加载的');
            this.breadcrumbArray =  window.sessionStorage.getItem('breadcrumbArray').split(',')
            this.$store.commit('setMenuTagArray',JSON.parse(window.sessionStorage.getItem('menuTagArray')))
            this.$store.commit('setActivedTagIndex',Number(window.sessionStorage.getItem('activedTagIndex')))
        }
    });
    

    },
  
    methods:{
      gotoMain(){
        if(this.activedTagIndex === 0){
          return
        }
        this.$router.push('/')
        this.$store.commit('setActivedTagIndex',0)
      },
      routeTo(path,index){
        console.log('path,path',path)
        if(this.activedTagIndex === index){
          return
        }
        this.$router.push(path)
        this.$store.commit('setActivedTagIndex',index)
      },
      closeTag(path){
        const index = this.menuTagArray.findIndex(i=>i.path === path)
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
  <style lang="less">
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
  /* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
  </style>