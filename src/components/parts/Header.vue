<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<div class="container"> <a class="navbar-brand" href="#"><img src="#"></a>
  <button class="btn btn-outline-secondary navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span> 
  </button>

  <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item  d-md-none d-lg-none"><router-link to="/" class="mob-logo-cont"><img src="#"> </router-link></li>
          <li class="nav-item">
              <div class="input-group md-form form-sm form-1 pl-0  pb-2 pt-2">
                <button @click="parseSearchString" class="btn btn-outline-secondary" type="button">
                  <i class="fas fa-search"></i>
                </button>
                  <input aria-label="Search"
                  v-model="searchString"
          @keydown.13.prevent="parseSearchString"
          type="text"
          class="form-control my-0 py-1"
          placeholder="Search...">
              </div>
              <!-- <Search v-on:search="search"/> -->
          </li>
          <li class="nav-item">&nbsp; </li>
      </ul>
      <ul class="navbar-nav ml-auto">
          <li class="nav-item  pb-2"> <a class="nav-link btn  btn-outline-primary login-btn" data-toggle="modal" data-target="#modalLoginForm">Sign In</a> </li>
          <li class="nav-item  d-sm-none d-md-block d-none d-sm-block">&nbsp; </li>
          <li class="nav-item pb-2"> <a class="nav-link btn  btn-outline-primary reg-btn" data-toggle="modal" data-target="#modalRegForm">Sign Up</a> </li>
      </ul>
      <ul class="navbar-nav ml-auto d-md-none d-lg-none">
          <li class="nav-item  pb-2">
              <a href="#" class="nav-link btn  btn-outline-light ">
                  <!--<i class="fas fa-chart-line fa-2x"></i>-->Trending
              </a>
          </li>
          <!--<li class="nav-item">&nbsp; </li>-->
          <li class="nav-item  pb-2">
              <a href="#" class="nav-link btn btn-outline-light ">
                  <!--<i class="fas fa-heart fa-2x"></i> -->Favorites
              </a>
          </li>
          <!--<li class="nav-item">&nbsp; </li>-->
          <li class="nav-item  pb-2">
              <a href="#" class="nav-link btn   btn-outline-light ">
                  <!--           <i class="fa fa-plus-circle fa-2x"></i>  -->Playlists
              </a>
          </li>
          <!--<li class="nav-item">&nbsp; </li>-->
      </ul>
  </div>
</div>
</nav>
</template>

<script>
// import Search from '../items/Search.vue'
export default {
name: 'Header',
components:{
  // Search,
},
  data() {
    return {
      searchString: '',
    };
  },
  methods: {
    parseSearchString() {
      // Trim search string
      const trimmedSearchString = this.searchString.trim();

      if (trimmedSearchString !== '') {
        // Split search string
        const searchParams = trimmedSearchString.split(/\s+/);
        // Emit event
        this.$emit('search', searchParams);
        // Reset input field
        this.searchString = '';
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn.btn-outline-secondary {
    color: #FFF;
    border-color: #4D7DAB;
    background: #4D7DAB;
}.btn.btn-outline-secondary:hover {
    color: #FFF;
    border-color: #4D7DAB;
    background: #4D7DAB;
}
.input-group.md-form.form-sm.form-1 input {
    outline: none !important;
    border: 1px solid #4D7DAB;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    background: #4D7DAB;
    margin-left: -3px;
    color: #FFF !important;
}
.input-group.md-form.form-sm.form-1 input:focus , .input-group.md-form.form-sm.form-1 input:focus-within {
  outline: none !important;border: none !important;box-shadow: none !important;
}
.form-control::placeholder {
    color: #fff;
    opacity: 1;
}

.navbar-brand{margin-left: -80px;}
.mob-logo-cont, .mob-logo-cont img{margin: 0 auto !important;display: block;}

.navbar.navbar-expand-lg.fixed-top.navbar-dark.bg-dark {
    background: #0E6B9D !important;
}
.btn.btn-outline-secondary.navbar-toggler:hover {
    background: #0E6B9D !important;
}
.navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255,255,255,.75);
    background: transparent !important;
}
</style>
