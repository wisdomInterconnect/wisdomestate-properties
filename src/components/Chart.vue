<template>
  <div class="welcome">
    <!-- <div class="card">
      <div class="card-content center-align">
        <h2 class="text-warbning">Welcome</h2>
        <form @submit.prevent="enterChart">
          <label for="name">Enter your name</label>
          <input class="name" type="text" v-model="name" />
          <button class="btn btn-warning">Enter Chat</button>
        </form>
      </div>
    </div> -->
    <div class="row">
      <div class="col-md-12">
        <div class="card center-align">
          <div class="card-body">
            <h5 class="card-title">Welcome</h5>
            <form @submit.prevent="enterChart">
              <label for="name">Enter your Name</label>

              <input
                type="text"
                class="name form-control"
                v-model="name"
                id=""
                value=""
                required
              />
              <p v-if="feedback" class="text-danger">{{ feedback }}</p>
              <!-- <a href="#" type="button" class="btn btn-warning">ENTER CHAT</a> -->
              <button class="btn btn-warning">Enter Chart</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChart() {
      if (this.name) {
        this.$router.push({ name: "VueChartJS", params: {name: this.name} })
      } else {
        this.feedback = "you must enter a name to join";
      }
    },
  },
};
</script>

<style>
</style>