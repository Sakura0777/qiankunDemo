<template>
  <div class="about">
    <h1>业务类型信息新增</h1>
    <input type="text" value="">
  </div>
</template>
<script>
export default {
  name:'InfoAdd',
  mounted(){
    document.addEventListener('dblclick',()=>{
      console.log('业务类型信息新增双击');
    })
  }
}
</script>
