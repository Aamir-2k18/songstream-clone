<template>
  <div class="clearfix stream-mediaPlayer">
<input type="range" id="progress-bar" value="0" max="player.duration" step="1" />
<div class="row">
    <div class="col-md-4 col-sm-12">Video Information Here</div>
    <div class="col-md-4 col-sm-6">
        <ul class="controls">
            <li class="previous_btn" title="Previous" data-toggle="tooltip"> 
              <i class="fa fa-backward control"></i> 
              </li>
            <li class="play_pause_btn" title="Play/Pause" data-toggle="tooltip"> 
            <i class="fa fa-play control"></i> 
            </li>
            <li class="next_btn" title="Next" data-toggle="tooltip"> 
              <i class="fa fa-forward control"></i> 
              </li>
        </ul>
    </div>
    <div class="col-md-4 col-sm-6">
        <ul class="controls">
            <li class="previous_btn" title="" data-toggle="tooltip"> 
              <i class="fa fa-volume-up control" aria-hidden="true"></i> 
              </li>
            <li class="volume-controls" title="" data-toggle="tooltip">
                <input type="range" class="" id="volume-slider" value="100" min="0" max="116.11665344238281" step="1">
            </li>
        </ul>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Player',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controls{display: flex;}
@media (max-width:575px ) {
  .stream-mediaPlayer{max-height: 180px;height: 180px;}
  .controls li {    min-width: 33% !important;}
}
.stream-mediaPlayer .volume-controls input[type="range"]#volume-slider {    position: relative;    top: 15px;}
</style>