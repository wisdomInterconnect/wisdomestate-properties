<template>
  <div>
    <Navbar/>
    <h3>Still working on Ui & Ux design </h3>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: "Sell",
  components: {
    Navbar
  },
  data() {
    return {
      products: [
        { name: "Banana Skin", price: 20 },
        { name: "Shiny Star", price: 40 },
        { name: "Greeen Shells", price: 60 },
        { name: "Red Shell", price: 80 },
      ],
    };
  },
};
</script>
<style scoped>
#app {
  background-color: rgb(250, 246, 246);
}

#nav {
}
#nav a {
  /* font-weight: bold;
  color: #2c3e50;
  pa */
}

#nav a.router-link-exact-active {
  padding: 5px;
}
.nav-item {
  padding-left: 30px;
}

.nav-item .router-link-exact-active {
  color: white;
  text-decoration: none;
  font-size: 20px;
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
.max:hover {
  color: white !important;

}
</style>