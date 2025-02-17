Vue.createApp({
  data() {
    return {
      red: 80,
      green: 113,
      blue: 127,
    };
  },
  computed: {
    hexColor() {
      const red = this.red.toString(16).padStart(2, "0");
      const green = this.green.toString(16).padStart(2, "0");
      const blue = this.blue.toString(16).padStart(2, "0");
      return `#${red}${green}${blue}`;
    },
  },
  methods: {
    async randomColor() {
      try {
        const response = await fetch(
          "https://dummy-apis.netlify.app/api/color/"
        );
        const newColorValues = await response.json();

        this.red = newColorValues.rgb.r;
        this.green = newColorValues.rgb.g;
        this.blue = newColorValues.rgb.b;
      } catch (error) {
        console.log("Error fetching color:", error.message);
      }
    },
  },
}).mount("#app");
