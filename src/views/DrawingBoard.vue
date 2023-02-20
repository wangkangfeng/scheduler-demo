<template>
  <el-container class="mc_drawing_board">
    <el-aside width="280px">
      <Material :group="group" />
    </el-aside>
    <el-main>
      <Design />
    </el-main>
  </el-container>
</template>

<script>
import Material from '@/views/material/Index.vue'
import Design from '@/views/design/Index.vue'

import group from '@/mock/groups'
export default {
  name: 'DrawingBoard',
  components: {
    Material,
    Design
  },
  data() {
    return {
      group
    }
  }
}
</script>

<style lang="scss">
.mc_drawing_board {
  height: calc(100% - 53px);
}
</style>
