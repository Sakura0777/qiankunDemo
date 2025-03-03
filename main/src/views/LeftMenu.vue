<template>
    <div class="leftMenu">
        <el-container style="height: auto; border: 1px solid #eee">
            <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['0']">
                  <el-submenu  v-for="(oneMenu,index1) in microAppMenuArray" :index="index1.toString()">
                    <template slot="title"><i class="el-icon-message"></i>{{ oneMenu.menuName }}</template>
                    <el-menu-item-group>
                      <el-submenu v-for="(twoMenu,index2) in oneMenu.children" :index="`${index1}-${index2}`">
                        <template slot="title">{{twoMenu.menuName }}</template>
                        <el-menu-item  v-for="(threeMenu,index3) in twoMenu.children" 
                          :index="`${index1}-${index2}-${index3}`"
                          @click="routeTo(oneMenu.mode,oneMenu.path,threeMenu.path,threeMenu.menuName)">{{threeMenu.menuName }}</el-menu-item>
                      </el-submenu>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
            </el-aside>
        </el-container>
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
    mounted(){
      // console.log('主项目2state',state,actions)
      this.globalData = state;
      console.log('microAppMenu',microAppMenu)
      this.microAppMenuArray = microAppMenu.microAppMenu;
  
    },
  
    methods:{
      routeTo(mode,appPath,pagePath,menuName){
        console.log('path',appPath,pagePath)
        let fullPath = ''
        if(mode === 'hash'){
          fullPath = appPath+'#'+pagePath
        }else{
          fullPath = appPath+pagePath
        }
        if(this.$route.fullPath === fullPath){
          return
        }
        this.$store.commit('pushMenuTag',{ name:menuName,path:fullPath})
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