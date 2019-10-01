<template>
  <div id="app">
    <Header v-on:search="search"/>
    <section class="clearfix main-content-area">
    <SideBar />
<div class="clearfix">
    <div class="col-md-9 offset-md-2" id="content">
    
    <SearchResults
      v-if="videos.length > 0"
      v-bind:videos="videos"
      v-bind:reformattedSearchString="reformattedSearchString"
    />
<!-- <router-view v-bind:class="reformattedSearchString?'hide':'show'"></router-view> -->
<router-view></router-view>              
    </div>
</div>
            <Player></Player>
    </section>
           <LoginModal></LoginModal>
        <!--reg popup-->
        <RegModal></RegModal>
        
  </div>
</template>
<script>
import Header from './components/parts/Header.vue'
import SideBar from './components/SideBar.vue'

import Home from './components/Home.vue'
import About from './components/About.vue'

// import TrendingPlaylists from './components/TrendingPlaylists.vue'
// import TrendingTracks from './components/TrendingTracks.vue'
import Player from './components/Player.vue'
import LoginModal from './components/LoginModal.vue'
import RegModal from './components/RegModal.vue'

import SearchResults from './components/SearchResults'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    SideBar,
    // TrendingPlaylists,
    // TrendingTracks,
    Player,
    LoginModal,
    RegModal,
    SearchResults,
    About
  }, 
   data() {
    return {
      videos: [],
      reformattedSearchString: '',
      api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
        part: 'snippet',
        type: 'video',
        order: 'viewCount',
        maxResults: 50,
        q: '',
        key: 'AIzaSyDrCWYgaRiePkRCoddHXvIAJolkv-ZRneg',
        prevPageToken: '',
        nextPageToken: ''
      }
    }
  },
  methods:{
      search(searchParams) {
  this.reformattedSearchString = searchParams.join(' ');
  this.api.q = searchParams.join('+');
  const { baseUrl, part, type, order, maxResults, q, key } = this.api;
  const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`;
  this.getData(apiUrl);
},prevPage() {
  const { baseUrl, part, type, order, maxResults, q, key, prevPageToken } = this.api;
  const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${prevPageToken}`;
  this.getData(apiUrl);
},

nextPage() {
  const { baseUrl, part, type, order, maxResults, q, key, nextPageToken } = this.api;
  const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${nextPageToken}`;
  this.getData(apiUrl);
},getData(apiUrl) {
  axios
    .get(apiUrl)
    .then(res => {
      this.videos = res.data.items;
      this.api.prevPageToken = res.data.prevPageToken;
      this.api.nextPageToken = res.data.nextPageToken;
    })
    .catch(error => console.log(error));
    // console.log(apiUrl);
}
  }
}
</script>

<style>
.hide{display: none !important;}
 body{background: #4D7DAB !important;color: #FFF !important;}
#app {  margin-top: 60px;}
/* .main-content-area{} */
@media (max-width:575px ) {#app{  margin-top: 100px;}}
        .img-thumbnail {
            max-height: 80px;
            cursor: pointer;
            display: block;
            margin: 0 auto !important;
        }
        
        .track {
            
            border-bottom: 1px solid #4D7DAB;
            padding: 10px 0;
            margin: 0 0 0 1px !important;
            background-color:rgb(68, 121, 172);
            font-size: 14px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
color: #FFF;
        }
        
        .track:hover {
            border-bottom: 1px solid #2376a4;
            background: rgba(0, 0, 0, 0.25);
        }
        
         .full-width{width:100%;}

/*header*/
.input-group.md-form.form-sm.form-1 input{
    border: 1px solid #bdbdbd;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
}.bg-dark {
    background-color: #066e9e !important;border-bottom: 1px solid #FFF !important;
}.form-control.my-0.py-1 {
    min-width: 345px;
}
/*sidebar*/
#side_bar_area {
    position: fixed;
    border-right: 1px solid #5096b9;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
    max-height: 100vh;
    z-index: 950;
    background: #066e9e;
}
/*Logo*/
aside .logo-wrapper {
    padding-top: 16px;
    padding-bottom: 26px;
    text-align: center;
}/*Sidebar Items*/
aside * {
    cursor: pointer;
    color:#FFF;
}
aside a{letter-spacing: 1.2px;}
aside ul.left-nav {
    list-style: none;
    margin-left: 0;
    padding-left: 10px;
}
aside ul.left-nav li {
margin-bottom: 25px;
line-height: 32px;
margin-top: 20px;
}
.login-btn, .reg-btn{letter-spacing: 1.5px;text-transform: uppercase;color:#FFF !important;border-color:#FFF !important;font-size: 1em;
                     padding: 6px 26px !important;}
/*CONTENT*/
#content{
    padding: 0 15px;
    margin-top: 76px;
    margin-bottom: 150px;
}
/*PLAYER*/
.stream-mediaPlayer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    height: 80px;
    border-top: 1px solid #FFF;
    padding-top: 0;
    padding-bottom: 10px;
    background: #0e6b9d;
}
.stream-mediaPlayer input[type="range"]#progress-bar, .stream-mediaPlayer .volume-controls input[type="range"]#volume-slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    outline: none;
    display: block;
    width: 100%;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 10;
    cursor: pointer;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
}
.stream-mediaPlayer .volume-controls input[type="range"]#volume-slider {
    position: relative;top: -8px;}
.controls{list-style: none;margin-top:20px;}
.controls li{display:inline-block;padding: 0 20px;}
.controls .control{display:block;color:#FFF;font-size: 2em !important;cursor: pointer;}
.dropdown-toggle::after{display: none !important;}

.modal-content{background:#1D5B95 !important;}
.modal-content .close, .modal-content .close:hover{color:#FFF;}

.pg-title{padding-top:20px !important;padding-bottom:10px !important;}
    </style>
