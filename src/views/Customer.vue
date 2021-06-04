
<template>
  <div class="login-container">
    <div class="col-md-12">
      <div class="card" style="width: 400px; text-align: center">
        <div class="card-body">
          <h3 class="card-title mb-4">Login</h3>
          <p>Use your email account</p>
          <hr>
          
          <form @submit="log">
            <div class="mb-4 form-group">
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="email"
                value=""
                placeholder="Email"
                required
              />
            </div>
            <div class="mb-4 form-group">
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="password"
                value=""
                placeholder="password"
                required
              />
            </div>
             <a href="#" class="card-link text mb-4">Forget your Password?</a>

          <p>
            <button
                type="submit"
                value="submit"
                class="btn btn-success mt-4"
                style="width: 100%; border-radius: 20px"
              >
                LOGIN
              </button>
              </p>
              <hr>
              <p>
            <i class="fab fa-facebook text-primary m-3 fa-2x"></i>
            <i class="fab fa-linkedin text-primary m-3 fa-2x"></i>
            <i class="fab fa-twitter text-primary m-3 fa-2x"></i>
            <i class="fab fa-instagram text-primary m-3 fa-2x"></i>
          </p>
          <p>Or use your social Media account</p>
          <hr>
          <router-link to="/signup"><p>Get Register</p></router-link>
           <hr>
              <p v-if="error.length">
                <b>Enter correct Email and Password</b>
                <ul>
                  <li v-for="e in error" v-bind:key='e.id'>
                    {{e}}

                  </li>
                </ul>

              </p>
          
          </form>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Customer",
  
  data: function () {
    return {
      error: [],
      email: null,
      password: null,
    };
  },

  methods: {
    log(e) {
      if (this.email && this.validEmail && this.password) {
        this.$router.push({ name: "CustomerDashboard", params: { users: this.email } });
        console.log("Login function called");
      }
      this.error = [];
      if (!this.password) {
        this.error.push("Password is Required");
      }
      if (!this.email) {
        this.error.push("Email is Required");
      } else if (!this.validEmail(this.email)) {
        this.error.push("valid email required");
      }
      if (!this.errors.length) {
        return true;
      }

      // console.warn("error", this.error);
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>


<style scoped>
.login-container {
  background-image: url("https://res.cloudinary.com/wisdom-interconnect/image/upload/v1601902440/banner_whykqb.jpg");
  height: 900px;
  width: 100%;
  margin-left: 0;
  position: absolute;
}
.card {
  margin-top: 80px;
  border-radius: 20px;
  padding-bottom: 30px;
  padding-top: 30px;
  outline-style: none;
}
.form-control {
  background-color: whitesmoke;
  border-radius: 10px;
}
text {
  text-decoration-line: underline !important;
}
.hr {
  width: 7px;
  height: 40px;
}
</style>