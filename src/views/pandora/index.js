import Node from './node'

export default {
  name: 'pandoraIndex',
  components: { 'pandora-box': Node },
  props: {
    components: Object,
    fields: Array,
    tag: {
      type: String,
      default: () => {
        return 'div'
      }
    }
  },
  render(h) {
    return h('pandora-box', {
      class: 'pandora-container',
      props: {
        components: this.components,
        field: {
          component: this.tag,
          children: this.fields
        }
      }
    })
  }
}
