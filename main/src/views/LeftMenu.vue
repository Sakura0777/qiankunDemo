<template>
    <div class="leftMenu">
        <el-container style="height: auto; border: 1px solid #eee">
            <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['0']">
                  <el-submenu  v-for="(oneMenu,index1) in microAppMenuArray" :index="index1.toString()" :key="index1">
                    <template slot="title"><i class="el-icon-message"></i>{{ oneMenu.menuName }}</template>
                    <el-menu-item-group>
                      <el-submenu v-for="(twoMenu,index2) in oneMenu.children" :index="`${index1}-${index2}`" :key="`${index1}-${index2}`">
                        <template slot="title">{{twoMenu.menuName }}</template>
                        <el-menu-item  v-for="(threeMenu,index3) in twoMenu.children" 
                          :index="`${index1}-${index2}-${index3}`"
                          :key="`${index1}-${index2}-${index3}`"
                          @click="routeTo(oneMenu,twoMenu,threeMenu)">{{threeMenu.menuName }}</el-menu-item>
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
      this.microAppMenuArray = microAppMenu.microAppMenu;
  
    },
  
    methods:{
      routeTo(oneMenum,twoMenu,threeMenu){
        let fullPath = ''
        if(oneMenum.mode === 'hash'){
          fullPath = oneMenum.path+'#'+twoMenu.path+threeMenu.path
        }else{
          fullPath = oneMenum.path+twoMenu.path+threeMenu.path
        }
        if(this.$route.fullPath === fullPath){
          return
        }
        console.log('fullPath',fullPath)
        this.$store.commit('pushMenuTag',{ name:threeMenu.menuName,path:fullPath,menuRoute:[oneMenum.menuName,twoMenu.menuName,threeMenu.menuName]})
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