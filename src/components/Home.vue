<template>
<div>
        <!-- <TrendingPlaylists></TrendingPlaylists> -->
        <div class="clearfix">&nbsp;</div>
        <!-- <TrendingTracks></TrendingTracks> -->
</div>
</template>

<script>
import TrendingPlaylists from './TrendingPlaylists.vue'
import TrendingTracks from './TrendingTracks.vue'
export default {
  name: 'Home',
    components:{
        TrendingPlaylists,
        TrendingTracks
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
