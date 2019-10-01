<template>
  <div>
   <!-- <div class="card-body">
       <div class="flex">
           <a :href="'https://www.youtube.com/watch?v=' + video.id.videoId" target="_blank" class="row">
      <img class="col-xs-1 col-sm-1 col-md-1 img-responsive" :src="video.snippet.thumbnails.medium.url" alt="YouTube thumbnail">
     <p class="col-xs-11 col-sm-11 col-md-11 ng-binding">{{ video.snippet.title }}</p></a>
      </div>
     <h6
        class="card-subtitle mb-2 text-muted"
      >{{ video.snippet.channelTitle }} | {{ video.snippet.publishedAt | formatDate }}</h6>
      <p class="card-text">{{ video.snippet.description }}</p>
    </div> -->

    <div class="row track">
    <div class="col-md-1 d-none d-md-block d-lg-block"><i class="fa fa-play-circle fa-2x play"></i> </div>
    <div class="col-md-4 d-none d-md-block d-lg-block vid-title">  <a :href="'https://www.youtube.com/watch?v=' + video.id.videoId" target="_blank" class="row">{{ video.snippet.title }}</a></div>
    <div class="col-md-3 d-none d-md-block d-lg-block channel">{{ video.snippet.channelTitle }} <!--<br/> {{ video.snippet.publishedAt | formatDate }} ---></div>
    <div class="">
        <div class="row track-actions">
 <div class="col-4 d-none d-md-block d-lg-block "><i class="far fa-heart"></i></div>
<div class="dropdown col-4 d-none d-md-block d-lg-block">
  <a class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i class="fa fa-share-alt"></i>
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Share On</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#"><i class="far fa-facebook" title="Facebook"></i></a>
    <a class="dropdown-item" href="#"><i class="far fa-twitter" title="Twitter"></i></a>
  </div>
</div>
        <div class="col-4 d-none d-md-block d-lg-block "><i class="fa fa-list-alt" title="Add to Queue"></i></div>
        </div>
    </div>
    <div class="col-md-2 d-none d-md-block d-lg-block add-to-playlist">
        <i class="fa fa-plus float-right" title="Add to playlist"></i>
    </div>

    <!--sm-->
    <div class="d-md-none d-lg-none full-width">
        <div class="float-left col-6">{{ video.snippet.title }}
            <div class="d-md-none d-lg-none text-danger">{{ video.snippet.channelTitle }}</div>
        </div>
        <div class="float-right col-5"><i class="fa fa-ellipsis-h float-right" id="mobdd" data-toggle="dropdown" ></i>
            <div class="dropdown-menu mob-only" aria-labelledby="mobdd">
            <a class="dropdown-item" href="#"><i class="far fa-facebook" title="Facebook"></i> Share On Facebook</a>
            <a class="dropdown-item" href="#"><i class="far fa-twitter" title="Twitter"></i>Share On Twitter</a>
            <a class="dropdown-item" href="#"><i class="far fa-twitter" title="Favorites"></i>Add to Favorites</a>
            <a class="dropdown-item" href="#"><i class="far fa-twitter" title="Que"></i>Add to Que</a>
            <a class="dropdown-item" href="#"><i class="far fa-twitter" title="Playlist"></i>Add to Playlist</a>
            </div>
        </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
};
</script>
<style scoped>
.dropdown-menu.show.mob-only {
    margin-right: 36px !important;
    z-index: 999999 !important;
    overflow: visible;
    right: -44px;
    padding: 0;
}
.dropdown-menu.show.mob-only a{
  padding: 6px 8px;
}
/* .play{color:#fff;margin-top:10px;}
.track-actions, .channel {margin-top: 10px;}
.add-to-playlist{margin-top: 15px;} */
.vid-title{   overflow: hidden;max-width: 45ch;height: 24px;}
  .vid-title a{text-decoration: none;color:#FFF !important;}
</style>