Vue.createApp({
  data() {
    return {
      personName: "John Doe",
      date: new Date().toLocaleString("en-us"),
    };
  },
}).mount("#app");
