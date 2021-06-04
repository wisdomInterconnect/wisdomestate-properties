<template>
  <div class="image">
    <Navbar />
    <div class="card" style="width: 400px">
      <div class="card-body">
        <form
          action=""
          id="signup-form"
          @sumbit.prevent="signup"
          v-on:submit.prevent="submit"
          
        >
          <div class="form m-5" style="width: 300px">
            <div class="row">
              <div class="form-group col-md-12 lead">
                <label for="text">Full Name </label>
                <input
                  type="text"
                  v-model="fullname"
                  v-model.trim="$v.fullname.$model"
                  :class="{ 'is-invalid': validationStatus($v.fullname) }"
                  class="form-control form-control-lg"
                  id="Full-name"
                  required
                  minlength="3"
                  maxlength="20"
                />
                <div v-if="!$v.fullname.required" class="invalid-feedback">
                  The full name is required
                </div>
              </div>
              <div class="form-group col-md-12 lead">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  v-model="email"
                  v-model.trim="$v.email.$model"
                  :class="{ 'is-invalid': validationStatus($v.email) }"
                  class="form-control"
                  id="inputEmail4"
                  required
                />
                <div v-if="!$v.email.email.required" class="invalid-feedback">
                  The email is not valid
                </div>
              </div>
              <div class="form-group col-md-12">
                <label for="" class="lead">Country</label>
                <select
                  name=""
                  id=""
                  v-model="country"
                  v-model.trim="$v.country.$model"
                  :class="{ 'is-invalid': validationStatus($v.country) }"
                  class="form-control lead"
                >
                  <option value="" class="lead">Select Country</option>
                  <option
                    :value="c.iso"
                    :key="c.iso"
                    v-for="c in countryList"
                    class="lead"
                  >
                    {{ c.country }}
                  </option>
                </select>
                <div v-if="!$v.country.required" class="invalid-feedback lead">
                  The country is required
                </div>
              </div>

              <div class="form-group col-md-12">
                <label for="Password" class="lead">Password</label>
                <input
                  type="password"
                  v-model="password"
                  v-model.trim="$v.password.$model"
                  :class="{ 'is-invalid': validationStatus($v.password) }"
                  class="form-control lead"
                  id="inputPassword4"
                  required
                />
                <div v-if="!$v.password.required" class="invalid-feedback">
                  The password is required
                </div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">
                  You must have at least
                  {{ $v.password.$params.minLength.min }} Character
                </div>
                <div v-if="!$v.password.maxLength" class="invalid-feedback">
                  You must not have greater
                  {{ $v.password.$params.maxLength.min }}
                </div>
              </div>
              <p class="text-danger" v-if="feedback">{{ feedback }}</p>

              <div class="col-md-12 form-group text-center mt-3">
                <button
                  class="btn btn-success btn-lg col-12 lead"
                  style="border-radius: 20px"
                >
                  Submit
                </button>
              </div>
              <hr />
              <span class="lead text-center"
                >Already Signup
                <router-link to="/login">Login</router-link></span
              >
              <hr />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import {
  required,
  email,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";
import slugify from "slugify";
import db from "../firebase/init";
import firebase from "firebase";
export default {
  name: "Signup",
  components: {
    Navbar,
  },
  data: function () {
    return {
      fullname: null,
      email: null,
      country: null,
      password: null,
      countryList: [],
      feedback: null,
      slug: null,
    };
  },
  validations: {
    fullname: { required },
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(20) },
    country: { required },
  },
  mounted: function () {
    let v = this;
    v.$http
      .get(`http://localhost:4600/countries`)
      .then(function (resp) {
        v.countryList = resp.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },

  methods: {
    resetData: function () {
      this.fullname = "";
      this.email = "";
      this.country = "";
      this.password = "";
    },
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit: function () {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      this.$router.push({ name: "Dashboard", params: { users: this.email } });
      console.log("submit function called");
      // alert("thanks for sign up");
      // this.$v.$reset();
      // this.resetData();
    },

    signup() {
      if (this.email && this.password) {
        this.slug = slugify(this.email, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        });
        let ref = db.collection("cons").doc(this.slug);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.feedback = "This email already exists";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .catch((err) => {
                console.log(err);
                this.feedback = err.message;
              });
            this.feedback = "This email is free to use";
          }
        });
        console.log(this.slug);
      } else {
        this.feedback = "you must enter an email";
      }
    },
  },
};
</script>
<style scoped>
.card {
  /* margin-top: 80px; */
  border-radius: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  outline-style: none;
  margin-top: 100px !important;
}
.form-control {
  background-color: whitesmoke;
  border-radius: 10px;
  height: 40px;
}
.image {
  background-image: url("https://res.cloudinary.com/wisdom-interconnect/image/upload/v1601902440/banner_whykqb.jpg");
  width: 100%;
  height: 700px;
  position: absolute;
}
</style>