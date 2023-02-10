<template>
  <div>
    <Pandora :components="components" :fields="fields" />
  </div>
</template>

<script>
import Pandora from './pandora'
import Test1 from './test/Test1'
import Test2 from './test/Test2'
export default {
  name: 'SchedulerPage',
  components: { Pandora },
  data() {
    return {
      components: {
        test1: Test1,
        test2: Test2
      },
      treeData: [
        {
          label: '第一层',
          id: '01',
          children: [
            {
              label: '附属一',
              id: '0101',
              children: [
                {
                  label: '附属一一',
                  id: '010101'
                },
                {
                  label: '附属一二',
                  id: '010102'
                },
                {
                  label: '附属一三',
                  id: '010103'
                }
              ]
            }
          ]
        },
        {
          label: '第二层',
          id: '02'
        },
        {
          label: '第三层',
          id: '03'
        },
        {
          label: '第四层',
          id: '04'
        }
      ],
      fields: [
        {
          component: 'test1',
          key: '1',
          children: [
            {
              component: 'div',
              key: '2',
              children: [
                {
                  component: 'test2',
                  key: '3',
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style></style>
