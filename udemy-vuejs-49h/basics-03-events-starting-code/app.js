const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    countAdd() {
      counter++
    }
  }
});

app.mount('#events');
