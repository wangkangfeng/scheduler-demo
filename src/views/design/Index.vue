<template>
  <div class="mc_design">
    <draggable v-if="!fields.length" :value="fields" group="schedulerGroup" class="mc_design_root" @input="onRootUpdate">
      <p>请拖动组件到此</p>
    </draggable>
    <div v-else>
      <Pandora :components="components" :fields="fields" />
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Pandora from '../pandora'
export default {
  name: 'McDesign',
  components: {
    draggable,
    Pandora
  },
  data() {
    return {
      fields: [],
      components: {}
    }
  },
  methods: {
    onRootUpdate(value) {
      console.log(value)
      this.fields.push({
        ...value[0].field,
        key: '1'
      })
    }
  }
}
</script>

<style lang="scss">
.mc_design {
  height: 100%;
}
.mc_design_draggable {
  height: 100%;
}
.mc_design_root {
  height: 100%;
  border: 1px dashed #dcdfe6;
  cursor: pointer;
}
</style>
