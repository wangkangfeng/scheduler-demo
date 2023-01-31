export default {
  name: 'SchedulerCore',
  data() {
    return { count: 2 }
  },
  props: {
    level: String
  },
  render(h) {
    return (
      <div
        onClick={() => {
          this.count++
        }}
      >
        {this.count}
      </div>
    )
  }
}
