<template>
  <div class="home" ref="screenDom">
    <div class="title">Sakura3D图表</div>
    <div class="canvas-container"></div>
  </div>
</template>

<script  setup>
import { onMounted,ref } from 'vue'
import * as THREE from 'three';
import ThreePlus from '../three/index';

onMounted(() => {
  let threePlus = new ThreePlus(".canvas-container");
  threePlus.camera.position.set(3,8,8);
  threePlus.camera.lookAt(0,0,0);
})

</script>
<style lang="less">
  .canvas-container {
    width:~"calc(100vw - 250px)";
    height: 100vh;
  }
  .title {
    width: 380px;
    height: 40px;
    position: fixed;
    left: 300px;
    top: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    z-index: 110;
}
</style>
