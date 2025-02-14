Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },

  computed: {
    cssCounter() {
      return `--counter: ${this.createCssCount}%`;
    },
    createCssCount() {
      let cssCount = this.count;
      if (this.count.toString().length > 2 && this.count % 100 !== 0) {
        cssCount = Number(this.count.toString().slice(-2));
      }
      return cssCount;
    },
  },

  methods: {
    incrCount() {
      this.count++;
    },
    resetCount() {
      this.count = 0;
    },
  },
}).mount("#app");
