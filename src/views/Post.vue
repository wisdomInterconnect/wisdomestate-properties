<template>
  <div>
    <!-- <NavbarD/> -->
    <h1 class="mt-5">Welcome to Post.js</h1>
    <!-- <div ref="local"></div> -->
    
    <!---image upload-->
    <!-- <div id="submitBox">
  <form method="POST" onSubmit="return false;" data-parsley-validate="true" v-on:submit="handelSubmit($event);">
    <input name="username" type="text" class="form-control" id="name" placeholder="Name" required="required" v-model="username" data-parsley-minlength="4"/>
    <select title="Select" v-model="category" name="category" ref="category">
      <option v-for-key="post in articles" v-bind:value="post.name" >{{post.name}}</option>
    </select>
    <input class="form-control" type="file" id="property-images" @change="onFileChange">
  </form>
</div> -->
    <!-- card -->

    <!-- <select class="form-control" @change="changeCountry($event)">
    <option value="" selected disabled>Choose</option>
    <option v-for="st in state" :value="st.state.name" :key="st.state.id">{{ st.state.name }}</option>
  </select> -->
    <br /><br />
    <!-- <p><span>Selected country name: {{ st.state.name }}</span></p> -->
    <!-- <p><span>User country: {{ user.address.country }}</span></p> -->

    <div class="card text-center w-50 bg-secondary" style="border-radius: 20px">
      <!-- <div class="card-header">
      </div> -->
      <div class="card-body">
        <form v-if="!submitted" class="mt-5 mb-5">
          <input
            style="display: none"
            class="form-control"
            type="file"
            id="property-images"
            @change="onFileSelected"
            ref="fileInput"
          />
          <button
            @click="$refs.fileInput.click()"
            class="btn btn-warning w-100"
          >
            <i class="fas fa-upload mr-5"></i>Upload Image
          </button>

          <div class="form-row mt-5">
            <div class="col-md-6 mb-3 mt-4">
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                value="Otto"
                v-model="blog.title"
                placeholder="Input Land Title"
                required
              />
            </div>
            <div class="col-md-6 mb-3 mt-4">
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                value=""
                v-model="blog.content"
                placeholder="Enter Land Name"
                required
              />
            </div>
          </div>
          <div class="form-row mt-5">
            <div class="col-md-6 mb-3">
              <select class="custom-select" ref="selectLocal" required>
                <option selected disabled value="">Select LGA...</option>
                
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <select
                class="custom-select"
                id="selectState"
                @change="stateName($event)"
                required
              >
                <option selected disabled value="">Select State...</option>
                <option
                  :value="c.state.name"
                  :key="c.state.id"
                  v-for="c in state"
                  class="lead"
                >
                  {{ c.state.name }} {{ c.state.id }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-row mt-5">
            <div class="col-md-6 mb-3">
              <input
                type="text"
                class="form-control"
                id="validationDefault03"
                required
                placeholder="Enter Plot Size"
              />
            </div>
            <div class="col-md-6 mb-3">
              <input
                type="text"
                class="form-control"
                id="validationDefault03"
                v-model="blog.catergories"
                placeholder="Enter Price"
                required
              />
            </div>
          </div>
          <!--           
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div> -->
          <a
            href="#"
            @click="onUpload"
            class="btn btn-success w-50"
            v-on:click.prevent="post"
            style="border-radius: 10px"
            >post</a
          >
          <!-- <button  class="btn btn-danger">Upload</button> -->
        </form>
        <div v-if="submitted">
          <h3 class="text-light">Thanks for adding your post</h3>
        </div>
      </div>
    </div>
    <!--json api-->
    <!-- <div id="show-blogs">
      <h1>All Blog Article</h1>
      <div
        v-for="blob in blogs" :key="blob.id"
        class="single-blog"
      ></div>
      <h2>{{ blob.title }}</h2>
      <article>{{ blob.body }}</article>
    </div> -->
    <!-- <table>
      <thead>
        <tr>
          <th>albumId</th>
          <td>id</td>
          <td>title</td>
          <td>url</td>
          <td>thumbnailUrl</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{;{ photo.albumId; }}</td>
          <td>{;{ photo.id; }}</td>
          <td>{;{ photo.title; }}</td>
          <td>{;{ photo.url; }}</td>
          <td>{;{ photo.thumbnailUrl; }}</td>
        </tr>
      </tbody>
    </table> -->
    <!--photo-->
    <!-- <div class="mt-5" >welcome to photo</div>
    <div class="">
      <div class="photo">
        <div class="" v-for="p in photoList" :key="p.id">
          <div>{{ p.albumId }}</div>
          <div class="">
           <p class="til"> {{ p.title }}</p>
            <p class="tophoto"><img :src="p.url" /></p>
           <button class="btn btn-danger m-5 w-25"> <i class="fa fa-trash" @click="deleteIng(p)"></i></button>
          <button class="btn btn-success m-5 w-25"> <i class="fa fa-edit" @click="editIng(p)"></i></button>
          </div>
          <div>{{ p.id }}</div>
      <div><img :src="p.url" /></div>
      <div><img :src="p.thumbnailUrl" /></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
//import NavbarD from "@/components/NavbarD.vue"
export default {
  name: "Post",
  //components: {
  //NavbarD
  //}
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      estateInfo: [],
      authors: ["wisdom", "friday", "okon"],
      submitted: false,
      photoList: [],
      blogs: [],
      state: null,
      locals: null,
      // nameOfState: "",
      lga: [],
      blob: "",
      title: "",
      body: "",
      image: "",
      selectedFile: null,
      //   countries: [
      //     { code: 'GB', name: 'Great Britain' },
      //     { code: 'US', name: 'United States' },
      //     { code: 'KZ', name: 'Kazakhstan' }
      //   ],
      //   selectedCountry: null,
      //   user: {
      //   	address: {
      //     	country: null
      //     }
      //   }
    };
  },

  methods: {
    // changeCountry (event) {
    //   // this.user.address.country = event.target.value
    //   // this.selectedCountry = event.target.options[event.target.options.selectedIndex].text
    //   console.log(event.target.value, event.target.options.selectedIndex, event.target.options[event.target.options.selectedIndex].text)
    // },
    post: function () {
      // this.$http
      //   .post("https://jsonplaceholder.typicode.com/posts", {
      //     title: this.blog.title,
      //     body: this.blog.content,
      //     userId: 1,
      //   })
      //   .then(function (data) {
      //     console.log(data);
      //     this.submitted = true;
      //   });
      // console.log(this.nameOfState)
     
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", fd, {
          onUploadProgress: (uploadEvent) => {
            console.log(
              "upload progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          },
        })

        .then((res) => {
          console.log(res);
        });
    },
    stateName(event) {
      console.log(
        // event.target.value,
        event.target.options[event.target.options.selectedIndex].text,
        event.target.options.selectedIndex
      );
      // this.state.forEach((st) => {
      //   console.log(st)
      // })
      this.locals = this.state[
        event.target.options.selectedIndex - 1
      ].state.locals;
      // va state = document.querySelector("#selectState").value;
      // console.log(state);
      console.log(this.locals);
       

          
        // this.$refs['local'].innerHTML= this.locals
        this.locals.forEach((loc) => {
          let selectLocal = this.$refs['selectLocal']
          let option = document.createElement('option')
          option.value = loc.name
          option.innerHTML = loc.name
          selectLocal.appendChild(option)
          // selectLocal.innerHTML = `<option value="${loc.name}">${loc.name}</option>`
        })
    
    },
    changeLocal(){
      console.log('wisdom')
    }

    // deleteIng(p){
    //   this.photoList = this.photoList.filter(photoLists =>{
    //     return photoLists != p
    //   })
    // },
    // editIng(p){
    // this.photoList= this.photoList.title.edit(photoLists =>{
    //   return photoLists!=p
    // })
    // }
    // onFileChange(e) {
    //   var files = e.target.files || e.dataTransfer.files;
    //   if (!files.length)
    //     return;
    //   this.createImage(files[0]);
    // },
    // createImage(file) {
    //   let image = new Image();
    //   let reader = new FileReader();
    //   let vm = this;

    //   reader.onload = (e) => {
    //     vm.image = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
  },
  computed: {
    
  },
  created: function () {
    axios
      .get(
        `https://res.cloudinary.com/wisdom-interconnect/raw/upload/v1605271271/gistfile1_jvnsfu.txt`
      )
      .then((resp) => {
        // v.state = resp.data;
        this.state = resp.data;
        // this.locals= resp.data;
        console.log(resp);
      })
      .catch(function (err) {
        console.log(err);
      });
    
  },
  //   created() {
  //     fetch("http://localhost:3000/photo").then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         this.photo = data;
  //       });
  //   },
  //created() {
  // axios
  //   .get(`https://jsonplaceholder.typicode.com/photos`)
  //   .then((resp) => {
  //     this.photoList = resp.data;
  //     // console.log(resp);
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  // this.$http
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then(function (data) {
  //   //console.log(data);
  //     this.blogs = data.body.slice(0,10);
  //   });
  //},
};
</script>

<style>
.photo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-auto-rows: 50px;
  grid-auto-columns: 70px;
  justify-items: start; */
}
.tophoto img {
  width: 100%;
  height: 400px;
  padding: 10px;
  margin-top: 5px;
}
.til {
  width: 100%;
  height: 10px;
  padding: 10px;
  font-size: 12pt;
  text-transform: capitalize;
}
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
  color: aqua;
}
input {
  border-radius: 10px !important;
}
select {
  border-radius: 10px !important;
}
</style>