<template>
  <el-container class="mc_drawing_board">
    <el-aside width="280px">
      <Material />
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
import Material from '@/views/material/Index.vue'
export default {
  name: 'DrawingBoard',
  components: {
    Material
  }
}
</script>

<style lang="scss">
.mc_drawing_board {
  height: calc(100% - 53px);
}
</style>
