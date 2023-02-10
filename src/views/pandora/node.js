export default {
  name: 'pandoraNode',
  props: {
    components: Object,
    field: Object
  },
  methods: {
    renderNode(h, field) {
      const { component, fieldOptions = {}, key, children } = field
      return h(
        this.components[component] || component,
        { class: 'pandora-box', key },
        (Array.isArray(children) ? children : []).filter(child => child).map(child => this.renderNode(h, child))
      )
    }
  },
  render(h) {
    const { component, fieldOptions = {}, key, children } = this.field
    return h(
      this.components[component] || component,
      {
        class: 'pandora-box',
        key
      },
      (Array.isArray(children) ? children : []).filter(child => child).map(child => this.renderNode(h, child))
    )
  }
}
