<template>
  <div class="container mb-3">
    <div class="d-flex mb-3">
      <div class="mr-auto">
        <h3 class="pg-title">Search Results for "{{ reformattedSearchString }}"</h3>
      </div>
     </div>
    <div>
      <div class="video" v-bind:key="video.id.videoId" v-for="video in videos">
        <VideoListItem v-bind:video="video"/>
      </div>
    </div>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem';
// import VideoGridItem from './VideoGridItem';

export default {
  name: 'SearchResults',
  components: {
    VideoListItem,
    // VideoGridItem
  },
  data() {
    return {
      title: 'Search Results',
    //   displayMode: 'grid'
    };
  },
  methods: {
    // changeDisplayMode(displayMode) {
    //   this.displayMode = displayMode;
    // }
  },
  props: ['videos', 'reformattedSearchString']
};

// console.log(reformattedSearchString);
</script>

<style scoped>
button:focus {
  box-shadow: none !important;
}
.video *{cursor: pointer}

#dropdownMenuButton {
    padding: 5px;
}
</style>