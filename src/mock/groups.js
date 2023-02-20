export default [
  {
    name: 'layout',
    label: '布局',
    children: [
      {
        name: 'tab',
        label: '页签',
        icon: '',
        data: [],
        field: {
          component: 'el-tabs',
          children: [
            {
              component: 'el-tab-pane',
              options: { direct: true },
              fieldOptions: { props: { label: 'tab1' } },
              children: [{ component: 'span', text: 'aaa' }]
            },
            {
              component: 'el-tab-pane',
              options: { direct: true },
              fieldOptions: { props: { label: 'tab1' } },
              children: [{ component: 'span', text: 'aaa' }]
            }
          ]
        }
      },
      {
        name: 'card',
        label: '卡片',
        icon: '',
        data: []
      }
    ]
  }
]
