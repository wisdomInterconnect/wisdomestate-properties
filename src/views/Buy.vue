   <template>
  <div id>
    <Navbar/>
    <!-- <div class="header">
      <div class="header1">
      <h1>das</h1>
      </div>
      <div class="header2">
          

      </div>

  </div> -->
    <div class="image">
      <img
        src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1601902440/banner_whykqb.jpg"
      />
    </div>
    <div class="container for">
     <div class="row">
       <div class="col-sm-12 col-md-12 col-lg-12">
    <form class="">
      <h1 class="text-light">Search Confidently for Home, Land & Properties</h1>
      
      <input class="form-control mr-sm-2" style="height:60px; width:55%" type="search" v-model="search" placeholder="Please Enter Location"><span> <a href=""> <i class="fas fa-search text-warning fa-2x search"></i></a></span>
       <!--blog-->
    <div v-for="(country, index) in filteredCountries" :key="index" class="single-blog">
      <h2>{{country.iso}}</h2>
      <h2>{{country.country}}</h2>
      
    </div>
    <!-- <div>{{ countries }}</div> -->
    <!--Latest Home&properties-->
    </form>
    </div>
    </div>
    </div>
   
    
    
    <div class="container-fluid caro pt-5 pb-5">
      <h1 class="mt- text-center text-light">Buy Your Latest Home, Land & Properties</h1>
      <div id="carouselExampleControls" class="carousel slide ml-5" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603956633/Mangolian-Park-home_abrlwm.jpg" alt="First slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603956633/Mangolian-Park-home_abrlwm.jpg" alt="First slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603956633/Mangolian-Park-home_abrlwm.jpg" alt="First slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603956633/Mangolian-Park-home_abrlwm.jpg" alt="First slide">
            </div>
          <div class="carousel-item">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603966886/vantage-house_owoupx.jpg" alt=" Second slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603966886/vantage-house_owoupx.jpg" alt=" Second slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603966886/vantage-house_owoupx.jpg" alt=" Second slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603966886/vantage-house_owoupx.jpg" alt=" Second slide">
            
          </div>
          <div class="carousel-item">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603967469/Landvest-home_xg8w76.jpg" alt="Third slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603967469/Landvest-home_xg8w76.jpg" alt="Third slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603967469/Landvest-home_xg8w76.jpg" alt="Third slide">
            <img class=" m-2 " style="width:23%; height:350px;border-radius:10px" src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603967469/Landvest-home_xg8w76.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
     </div>
  </div>
      
      <!--section card-->
      <div class="container">
      <div class="row mt-5">
          <div class="col-lg-3">
            <div class="card" style="border-radius:10px; height:350px">
              <div class="card-body text-center">
                <h5 class="card-title">Land Vest Property</h5>
                <p class="card-text"></p>
                <img src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603967469/Landvest-home_xg8w76.jpg" class="w-100 h-75" alt="">
                <a href="#" class="btn btn-warning mt-3 col-12">Buy Now</a>
              </div>
            </div>
          </div>
              <div class="col-lg-3">
            <div class="card" style="border-radius:10px; height:350px">
              <div class="card-body text-center">
                <h5 class="card-title">Land Vest Property</h5>
                <p class="card-text"></p>
                <img src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603967469/Landvest-home_xg8w76.jpg" class="w-100 h-75" alt="">
                <a href="#" class="btn btn-warning mt-3 col-12">Buy Now</a>
              </div>
            </div>
          </div>
                 <div class="col-lg-3">
            <div class="card" style="border-radius:10px; height:350px">
              <div class="card-body text-center">
                <h5 class="card-title">Land Vest Property</h5>
                <p class="card-text"></p>
                <img src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603967469/Landvest-home_xg8w76.jpg" class="w-100 h-75" alt="">
                <a href="#" class="btn btn-warning mt-3 col-12">Buy Now</a>
              </div>
            </div>
          </div>
                <div class="col-lg-3">
            <div class="card" style="border-radius:10px; height:350px">
              <div class="card-body text-center">
                <h5 class="card-title">Land Vest Property</h5>
                <p class="card-text"></p>
                <img src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603967469/Landvest-home_xg8w76.jpg" class="w-100 h-75" alt="">
                <a href="#" class="btn btn-warning mt-3 col-12">Buy Now</a>
              </div>
            </div>
          </div>

       </div>
       </div>
       <!--section card2-->
      <div class="container">
      <div class="row mt-5">
          <div class="col-lg-3">
            <div class="card" style="border-radius:10px; height:350px">
              <div class="card-body text-center">
                <h5 class="card-title">Land Vest Property</h5>
                <p class="card-text"></p>
                <img src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603971891/inces_home_n3byro.jpg" class="w-100 h-75" alt="">
                <a href="#" class="btn btn-warning mt-3 col-12">Buy Now</a>
              </div>
            </div>
          </div>
              <div class="col-lg-3">
            <div class="card" style="border-radius:10px; height:350px">
              <div class="card-body text-center">
                <h5 class="card-title">Land Vest Property</h5>
                <p class="card-text"></p>
                <img src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603971891/inces_home_n3byro.jpg" class="w-100 h-75" alt="">
                <a href="#" class="btn btn-warning mt-3 col-12">Buy Now</a>
              </div>
            </div>
          </div>
                 <div class="col-lg-3">
            <div class="card" style="border-radius:10px; height:350px">
              <div class="card-body text-center">
                <h5 class="card-title">Land Vest Property</h5>
                <p class="card-text"></p>
                <img src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603971891/inces_home_n3byro.jpg" class="w-100 h-75" alt="">
                <a href="#" class="btn btn-warning mt-3 col-12">Buy Now</a>
              </div>
            </div>
          </div>
                <div class="col-lg-3">
            <div class="card" style="border-radius:10px; height:350px">
              <div class="card-body text-center">
                <h5 class="card-title">Land Vest Property</h5>
                <p class="card-text"></p>
                <img src="https://res.cloudinary.com/wisdom-interconnect/image/upload/v1603971891/inces_home_n3byro.jpg" class="w-100 h-75" alt="">
                <a href="#" class="btn btn-warning mt-3 col-12">Buy Now</a>
              </div>
            </div>
          </div>

       </div>
       </div>
       <SimpleList/>
       <Footer/>
       <Dropdown/>
       <p>

       </p>
       <p>
         
       </p>
       <Church/>
       
       
 </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SimpleList from "@/components/SimpleList.vue";
import Church from "@/components/Church.vue";
import Dropdown from '@/components/Dropdown.vue';
export default {
  name:'Buy',
  components:{
    Navbar,
    Footer,
    SimpleList,
    Church,
    Dropdown
  },
  data() {
    return {
      search: "",
      countries: null
    };
  },
  methods: {
    collapse() {},
  },
//   created() {
//     this.$http.get("http://localhost:4600/countries").then((data) => {
//       // this.blogs = data.body.slice(0,10);
//       this.countries = data.data
//     }).catch( (err) => {
//         console.log(err);
//       });
//   },
//   computed: {
//     filteredCountries () {
//       return this.countries.filter((country)=>{
//         return country.country.match(this.search);
//       })
      
//     }
//   }
 }
</script>

<style scoped>
.footer-button {
  width: 200px;
  display: inline-block;
  margin-top: 50px;
  margin-bottom: 50px;
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
hr {
  width: 5px;
}

.max:hover {
  color: white !important;

}
.for{
 position: absolute!important;
 top: 30%!important;
 left: 25%;
/*left: 0px!important; */
}
.search{
 position: absolute;
 top:60%;
 left: 50%;
}
.caro{
  background-image: linear-gradient(rgb(19, 17, 17),#494742,rgb(182, 182, 182));
  margin-top: 0px!important;
}
/* .header {
  background-color: rgb(175, 179, 179);
  width: 600px; 
  height: 300px;
}
.header1{
    display: inline-block;
    width: 400px;
    height: 100px;
    background-color: rgba(124, 6, 6, 0.596);
}
.header2{
    display: inline-block;
    width: 200px;
    background-color: red;
    height: 100px;
}
.header2 h4{
    
} */
</style>
