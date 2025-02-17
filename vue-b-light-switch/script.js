Vue.createApp({
  data() {
    return {
      lightModeOn: true,
      cssClassesDark: {
        darkness: false,
        buttonDark: false,
      },
    };
  },
  computed: {
    buttonTxt() {
      return this.lightModeOn ? "Turn light off" : "Turn light on";
    },
  },
  methods: {
    toggleLight() {
      this.lightModeOn = !this.lightModeOn;
      this.cssClassesDark.darkness = !this.cssClassesDark.darkness;
      this.cssClassesDark.buttonDark = !this.cssClassesDark.buttonDark;
    },
  },
  watch: {
    lightModeOn(value) {
      document.title = value ? "Good Morning" : "Good Night";
    },
  },
}).mount("#app");
