<template>
    <div class="leftMenu">
      <el-menu :default-active="activeMenu">
        <template index="/">
          <el-menu-item >
            <i class="el-icon-s-home"></i>首页
          </el-menu-item>
        </template>
        <el-submenu  v-for="(oneMenu,index1) in microAppMenuArray" :index="index1.toString()" :key="index1">
          <template slot="title"><i class="el-icon-message"></i>{{ oneMenu.menuName }}</template>
          <el-menu-item-group>
            <el-submenu v-for="(twoMenu,index2) in oneMenu.children" :index="`${index1}-${index2}`" :key="`${index1}-${index2}`">
              <template slot="title">{{twoMenu.menuName }}</template>
              <el-menu-item  v-for="(threeMenu,index3) in twoMenu.children" 
                :index="oneMenu.mode === 'hash'?oneMenu.path+'#'+twoMenu.path+threeMenu.path:oneMenu.path+twoMenu.path+threeMenu.path"
                :key="`${index1}-${index2}-${index3}`"
                @click="routeTo(oneMenu,twoMenu,threeMenu)">{{threeMenu.menuName }}</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
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
    name: 'LeftMenu',
    components: {
    },
    data(){
      return {
        globalData:{},
        microAppMenuArray:[]
      }
    },
    computed:{
      activeMenu(){
        return this.$route.fullPath.split('?')[0]
      }
    },
    mounted(){
      // console.log('主项目2state',state,actions)
      this.globalData = state;
      this.microAppMenuArray = microAppMenu.microAppMenu;
  
    },
  
    methods:{
      routeTo(oneMenu,twoMenu,threeMenu){
        let fullPath = ''
        if(oneMenu.mode === 'hash'){
          fullPath = oneMenu.path+'#'+twoMenu.path+threeMenu.path
        }else{
          fullPath = oneMenu.path+twoMenu.path+threeMenu.path
        }
        if(this.$route.fullPath === fullPath){
          return
        }
        console.log('fullPath',fullPath)
        this.$store.commit('pushMenuTag',{ name:threeMenu.menuName,path:fullPath})
        this.$router.push(fullPath)
      },
      sendMsgToMircoApp(){
        window.dispatchEvent(new CustomEvent('hello', {detail: {name: 'Sakura',age:17}}));
      }
    },
  }
  </script>
  <style>
  .leftMenu{
    height: 100%;
    overflow-y: scroll;
  }
  </style>