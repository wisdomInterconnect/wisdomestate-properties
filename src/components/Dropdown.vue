<template>
  <div>
      <h1>Dropdowm</h1>
      <!-- <div class="drop">
         <select name="" id="" class="select">
             <option value="">
                
             </option>
             <option value="">
                 we care
             </option>

          </select>
        
      </div> -->
      <div class="drop" >
        <div class="dropdown mt-3">
               
            <!-- <button type="input" class="btn btn-secondary  dropdown-toggle drop1" data-toggle="dropdown">
                
              
            </button> -->
            <input type="text" autocomplete="off" v-model="search" placeholder="search for inforamtion" class="dropdown-toggle drop1" id="usr" data-toggle="dropdown">
            <div class="dropdown-menu drop1 mb-2">
                <hr>
                <div class="mb-2" v-for="(blog, i) in filteredBlogs" :key="i">
                   {{ blog }}
                    <!-- <button type="button" class="btnn btn btn-secondary buttin">
                        <a class="" href="">Marital Status</a>
                    </button> -->
                </div>
                <hr>
                <div class="mb-2">
                    {{ blog }}
                    <!-- <button type="button" class="btnn btn btn-secondary buttin">
                        <a class="" href="">Option 1</a>
                    </button> -->
                </div>
                <div class="mb-2">
                    {{ blog }}
                    <!-- <button type="button" class="btnn btn btn-secondary buttin">
                        <a class="" href="">Option 2</a>
                    </button> -->
                </div>
                <div class="mb-2">
                    {{ blog }}
                    
                    <!-- <button type="button" class="btnn btn btn-secondary buttin">
                        <a class="" href="">Option 2</a>
                    </button> -->
                </div>
                <div class="d-flex justify-content-center">
                    <button type="button" class="btn bg-white text-primary  ">Add Event</button>

                </div>
                
            </div>
            
        </div>
        
</div>
  </div>
</template>

<script>
export default {
    name: "Dropdown",
    data(){
        return{
           blogs:['Marital Status','Option 1','Option 2','Option 3'],
           search: '',
        }

    },
    computed:{
        filteredBlogs: function(){
            return this.blogs.filter((blog) =>{
                return blog.toLowerCase().match(this.search.toLowerCase())
            })
         

        }
        

    },
    }
</script>

<style scoped>
.drop{
    border-style: solid;
    border-color: rgb(163, 163, 163);
    width: 30%;
    padding: 5px;
    height: 270px;
    border-radius: 7px;
}
.drop1{
    width: 100%;
    height: 40px;
    outline: none;
}
.dropdown-menu {
    border-style: none!important;
}
 hr{
    width:100%;
}
::placeholder{
    color: rgb(10, 7, 7);
}
@media(max-width: 600px){

hr{
    width:65%;
    margin-left: 0px;
}
}
</style>