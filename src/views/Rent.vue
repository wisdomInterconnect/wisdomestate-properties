<template>
  <div class="rent">
    <Navbar />
    <h3 class="max">Boost your Rental</h3>
    <h3 class="max">Boost your Rental</h3>
    <h3 class="max">Boost your Rental</h3>
    <h3 class="max">Boost your Rental</h3>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Buy",
  components: {
    Navbar,
  },
};
</script>
<style scoped>
#app {
  background-color: rgb(250, 246, 246);
}

.image img {
  width: 100%;
  height: 500px;
}
.container h4 {
  text-align: center;
  margin: 30px;
}
.container img {
  width: 100%;
  height: 300px;
}
.rent{
  margin-top:80px;
}
</style>