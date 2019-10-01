<template>
<div class="clearfix trending">
    <h2 class="pg-title">Trending</h2>
    <div class="float-right"><router-link to="/playlists" class="btn btn-outline-light">View All</router-link></div>
        <TrendingPlaylists></TrendingPlaylists>
        <div class="clearfix">&nbsp;</div>
        <TrendingTracks></TrendingTracks>
</div>
</template>

<script>
import TrendingPlaylists from './TrendingPlaylists.vue'
import TrendingTracks from './TrendingTracks.vue'
export default {
  name: 'Trending',
    components:{
        TrendingPlaylists,
        TrendingTracks
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>