<template>
  <div class="">
    <!-- <nav
      class="navbar navbar-dark sticky-top bg-secondary flex-md-nowrap p-0 shadow"
    >
      <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3 text-warning" href="#"
        >navbar</a
      >
      <button
        class="navbar-toggler position-absolute collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link text-warning" href="#">Sign out</a>
        </li>
      </ul>
    </nav> -->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-secondary">
      <a class="navbar-brand text-warning ml-5" href="#">Navbar</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control input1 mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <span
            class="fas fa-search text-warning"
            style="margin-left: -30px"
          ></span>
        </form>
        <a class="nav-link text-warning mr-0" href="#">
          <span
            ><img
              src=""
              class="rounded-circle text-warning"
              style="width: 1%; height: 10px"
              alt="wisdom"
          /></span>
        </a>
        <a class="nav-link text-warning mr-0" href="#">
          <router-link to="/" class="text-warning">
            <span><i class="fas fa-sign-out-alt"></i></span>

            Logout
          </router-link>
        </a>
        <ul class="nav flex-column d-block d-md-none">
          <li class="nav-item">
            <a class="nav-link active text-warning" href="#">
              <span data-feather="home" class="fa fa-dashboard"></span>
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-warning" href="#">
              <span class="fas fa-user"></span>
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-warning" href="#">
              <router-link to="/post">
                <span class="fas fa-blog"></span>
                Post
              </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-warning" href="#">
              <span class="fa fa-pencil"></span>
              Update
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-warning" href="#">
              <span class="fas fa-file-chart-line">
                <i class="fa fa-flag"></i
              ></span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-warning" href="#">
              <span class="fa fa-calendar"></span>
              Calendar
            </a>
          </li>
        </ul>
      </div>
      <button
        class="navbar-toggler bg-warning"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 d-none d-md-block col-lg-2 bg-secondary sidebar"
        >
          <hr class="bg-warning mt-0 mb-0" style="width: 100%" />
          <div class="sidebar-sticky pt-3 position-fixed">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active text-warning" href="#">
                  <span data-feather="home" class="fa fa-dashboard"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  <span class="fas fa-user"></span>
                  Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  <router-link to="/post">
                    <span class="fas fa-blog"></span>
                    Post
                  </router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  <span class="fa fa-pencil"></span>
                  Update
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  <span class="fas fa-file-chart-line">
                    <i class="fa fa-flag"></i
                  ></span>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="#">
                  <span class="fa fa-calendar"></span>
                  Calendar
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="main col-md-9 col-lg-10 px-md-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">Real Estate</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Share
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Export
                </button>
              </div>
              <button
                type="button"
                class="btn btn-sm btn-outline-dark bg-secondary dropdown-toggle text-light"
              >
                <span class="fas fa-house-user text-warning"></span>
                Estate Views
              </button>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-3 p-1 col-lg-3">
                <div
                  class="card pt-3"
                  style="
                    border-radius: 10px;
                    border-color: white;
                    width: 90%;
                    height: 150px;
                  "
                >
                  <div class="row">
                    <div class="col-md-1">
                      <span
                        class="fas fa-house-user fa-3x mt-4 text-warning ml-3"
                      ></span>
                    </div>
                    <div class="col-md- card-body ml-5 text-light">
                      <p class="card-text">520</p>
                      <hr class="mb-0 bg-light" />
                      <a href="#" class="text-warning">All Properties</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 p-1 col-lg-3">
                <div
                  class="card pt-3"
                  style="
                    border-radius: 10px;
                    border-color: white;
                    width: 90%;
                    height: 150px;
                  "
                >
                  <div class="row">
                    <div class="col-md-1">
                      <span
                        class="fas fa-cart-arrow-down fa-3x mt-4 text-warning ml-3"
                      ></span>
                    </div>
                    <div class="col-md- card-body ml-5 text-light">
                      <p class="card-text">520</p>
                      <hr class="mb-0 bg-light" />
                      <a href="#" class="text-warning"> Sale Properties</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-3 p-1">
                <div
                  class="card pt-3"
                  style="
                    border-radius: 10px;
                    border-color: white;
                    width: 90%;
                    height: 150px;
                  "
                >
                  <div class="row">
                    <div class="col-md-1">
                      <span
                        class="fas fa-store-alt fa-3x mt-4 text-warning ml-3"
                      ></span>
                    </div>
                    <div class="col-md- card-body ml-5 text-light">
                      <p class="card-text">520</p>
                      <hr class="mb-0 bg-light" />
                      <a href="#" class="text-warning">Rent Properties</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-3 p-1">
                <div
                  class="card pt-3"
                  style="
                    border-radius: 10px;
                    border-color: white;
                    width: 90%;
                    height: 150px;
                  "
                >
                  <div class="row">
                    <div class="col-md-1">
                      <span
                        class="fas fa-ad fa-3x mt-4 text-warning ml-3"
                      ></span>
                    </div>
                    <div class="col-md- card-body ml-5 text-light">
                      <p class="card-text">520</p>
                      <hr class="mb-0 bg-light" />
                      <a href="#" class="text-warning">Advertise</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--chart-->
          <div class="container bg-light mb-3">
            <h2 class="mt-5">Performance of Properties</h2>
            <line-chart :data="chartData" class="mt-5"></line-chart>
            <button @click="updateChart" type="button" class="btn btn-warning">
              Warning
            </button>
          </div>
          <!--chart-->
          <!--piehart-->
          <div class="container bg-light mt-5">
            <div class="row">
              <div class="col-md-4">
                <h2 class="mt-4 text-center">Statistic of Rental</h2>
                <pie-chart
                  :data="[
                    ['Jan', 10],
                    ['FEB', 30],
                    ['MAR', 10],
                    ['APR', 20],
                    ['MAY', 12],
                    ['JUN', 12],
                    ['JUL', 12],
                    ['AUG', 12],
                    ['SEP', 12],
                    ['OCT', 12],
                  ]"
                ></pie-chart>
              </div>
              <div class="col-md-4">
                <h2 class="mt-4 text-center">Statistic of Sale</h2>
                <pie-chart
                  :data="[
                    ['Jan', 20],
                    ['FEB', 30],
                    ['MAR', 15],
                    ['APR', 20],
                    ['MAY', 5],
                    ['JUN', 7],
                    ['JUL', 9],
                    ['AUG', 12],
                    ['SEP', 12],
                    ['OCT', 12],
                  ]"
                ></pie-chart>
              </div>
              <div class="col-md-4">
                <h2 class="mt-4 text-center">Statistic of Ad</h2>
                <pie-chart
                  :data="[
                    ['Jan', 10],
                    ['FEB', 40],
                    ['MAR', 10],
                    ['APR', 20],
                    ['MAY', 1],
                    ['JUN', 8],
                    ['JUL', 12],
                    ['AUG', 10],
                    ['SEP', 12],
                    ['OCT', 12],
                  ]"
                ></pie-chart>
              </div>
            </div>
          </div>
          <div class="container bg-light mt-5">
            <geo-chart
              :data="[
                ['Nigeria', 44],
                ['Germany', 23],
                ['United States', 22],
              ]"
            ></geo-chart>
          </div>
          <!--Table-->
          <div class="container mt-5 bg-light text-center">
            <div class="py-5">
              <table class="table table-bordered table-secondary">
                <thead>
                  <tr>
                    <th scope="col">Properties</th>
                    <th scope="col">Rent</th>
                    <th scope="col">Sale</th>
                    <th scope="col">Company</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>1 bedroom</td>
                    <td>2plot of land</td>
                    <td>landwey</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>4 bed rooms flat</td>
                    <td>5plots of land</td>
                    <td>Oga for properties</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
    <!-- <div
      class="sidebar"
      data-color="purple"
      data-image="assets/img/slider-5-jpg"
    >
      <div class="sidebar-sticky">
        <div class="logo">
          <a href="">Navbar</a>
        </div>
        <ul class="nav">
          <li class="active">
            <a href="">
              <i class="fa fa-facebook"></i>
              <p>Dashboard</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <nav class="navbar navbar-default navbar-fixed">
        <div class="container-fluid">
          <div class="navbar-header">
            <button class="navbar-toggle" data-toggle="collapse" type="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a href="">Dashboard</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
              <li>
                <a href="" class="fa fa-dashboard"></a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href=""> Account </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <div class="row">

          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container-fluid">
          <nav class="pull-left">
            <ul>
              <li>
                <a href="">
                  Home
                </a>
              </li>
            </ul>
          </nav>
          <p class="copyright pull-right">
            &copy;2016 <a href=""> made with love</a>
          </p>
        </div>
      </footer>
    </div> -->

  </div>
</template>

<script>
export default {
  name: "NavbarD",
  data() {
    return {
      chartData: {
        JAN: 1,
        FEB: 30,
        MAR: 10,
        APR: 3,
        MAY: 12,
        JUN: 4,
        JUL: 10,
        AUG: 22,
        SEP: 10,
        OCT: 20,
      },
    };
  },
  methods: {
    updateChart() {
      this.chartData = {
        JAN: 1,
        FEB: 10,
        MAR: 10,
        APR: 23,
        MAY: 8,
        JUN: 14,
        JUL: 10,
        AUG: 22,
        SEP: 10,
        OCT: 20,
      };
    },
  },
};
</script>

<style scoped>
.form-control::placeholder {
  color: rgb(252, 195, 10);
}
.input1 {
  width: 500px !important;
  border-radius: 10px !important;
}
.main {
  background-color: rgb(238, 238, 238) !important;
}
.card {
  background-image: linear-gradient(
    180deg,
    rgb(172, 167, 167),
    rgb(87, 87, 78)
  ) !important;
}
.nav-item .nav-link a {
  text-decoration: none;
  color: rgb(247, 183, 7);
}
</style>