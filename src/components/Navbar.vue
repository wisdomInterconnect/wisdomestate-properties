<template>
  <!--nav -->
  <nav class="navbar navbar-expand-lg navbar-light bg-dark p-3 fixed-top">
    <div class="container">
      <a class="navbar-brand w-75" style="font-size: 20px;">
        <router-link to="/">Aspire</router-link>
      </a>
      <button
        class="navbar-toggler bg-warning"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        sty
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/" exact exact-active-class>Home</router-link>
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/buy" exact-active-class>Buy</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/sell" exact-active-class>Sell</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/rent" exact-active-class>Rent</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/mortgage" exact-active-class
                >Mortgage</router-link
              >
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/advertise" exact-active-class
                >Advertise</router-link
              >
            </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link">
              <router-link to="/chartjs" exact-active-class
                >VueChart</router-link
              >
            </a>
          </li> -->
          <li class="nav-item">
            <router-link to="/Login">
              <button
                class="max btn btn-outline-warning my-2 m-4 my-sm-0"
                type="submit"
                style="font-size: 20px"
              >
                Login
              </button>
            </router-link>
          </li>

          <!-- 
              <button
                class="btn btn-outline-warning m-4 my-2 my-sm-0 max"
                type="submit"
                style="font-size: 20px"
              >
                Login
                
              </button>
            </router-link> -->
          <li class="nav-item">
            <div class="dropdown">
              <a
                class="nav-link max btn btn-outline-warning text-warning dropdown-toggle my-2 m-4 my-sm-0"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="font-size: 20px"
              >
                Signup
              </a>

              <div
                class="dropdown-menu bg-light"
                aria-labelledby="dropdownMenuLink "
                style="border-radius: 10px"
              >
                <router-link to="/Signup" style="text-decoration: none">
                  <a class="dropdown-item min text-dark" style="font-size: 20px"
                    >As a Realtor</a
                  >
                </router-link>
                <router-link to="/Customer" style="text-decoration: none">
                  <a class="dropdown-item min text-dark" style="font-size: 20px"
                    >Customer</a
                  >
                </router-link>
                <router-link to="/EstateComLogin" style="text-decoration: none">
                  <a class="dropdown-item min text-dark" style="font-size: 20px"
                    >Estate Company</a
                  >
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--nav -->
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav-item .nav-link a {
  text-decoration: none;
  color: rgb(247, 183, 7);
  padding: 5px;
  font-size: 20px;
}
.navbar-brand a {
  color: rgb(247, 183, 7) !important;
  font-size: 20px;
}

.router-link-active {
  color: white !important;
  text-decoration: none;
  font-size: 20px;
}
.nav-item {
  padding-left: 30px;
}
.max:hover {
  color: white !important;
}
.min:hover {
  color: rgb(247, 183, 7) !important;
  background-color: black;
}
.dropdown-menu a {
  color: !important;
}
</style>