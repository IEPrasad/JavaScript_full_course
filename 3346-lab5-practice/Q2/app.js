new Vue({
  el: '#app',
  data: {
    condition: true, // Set the condition value here
    message: ''
  },
  created() {
    this.displayMessage();
  },
  methods: {
    displayMessage() {
      if (this.condition) {
        this.message = "You've done it";
      } else {
        this.message = "Try your best";
      }
    }
  }
});
