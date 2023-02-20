<template>
  <div class="mc_material">
    <div class="material_title">物料中心</div>
    <div class="material_body">
      <el-collapse v-model="activeNames">
        <el-collapse-item v-for="collapse in group" :key="collapse.name" :title="collapse.label" :name="collapse.name">
          <template slot="title">
            <i class="el-icon-s-grid"></i>
            <span class="col_title">{{ collapse.label }}</span>
          </template>
          <draggable
            :list="collapse.children"
            :group="{ name: 'schedulerGroup', pull: 'clone', put: false }"
            class="mc_material_draggable mc_material_row"
          >
            <div v-for="item in collapse.children" :key="item.name" class="mc_material_col">
              <div>{{ item.label }}</div>
            </div>
          </draggable>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Material',
  components: {
    draggable
  },
  props: {
    group: Array
  },
  data() {
    return {
      activeNames: []
    }
  },
  created() {
    this.activeNames = this.group.map(i => i.name)
  }
}
</script>

<style lang="scss">
.mc_material {
  height: 100%;
  border-right: 1px solid #ebeef5;
  .material_title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    background-color: #ebeef5;
    border-bottom: 1px solid #ebeef5;
  }
  .material_body {
    height: calc(100% - 42px);
  }
  .el-collapse-item__header {
    font-size: 18px;
    padding-left: 10px;
  }
  .col_title {
    padding-left: 5px;
  }
  .mc_material_row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }
  .mc_material_col {
    width: 50%;
    border: 1px solid #dcdfe6;
    padding: 5px 10px;
    color: #409eff;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
