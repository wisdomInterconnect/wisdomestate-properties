<template>
  <div class="mortgage">
    <!--nav -->
       <Navbar/>
    <!--nav -->
    <h3>Still working on Ui & Ux design </h3>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
export default {
  name:'Mortgage',
  components:{
    Navbar
  }
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
.mortgage{
  margin-top:80px;
}
</style>