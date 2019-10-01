<template>

    <aside id="side_bar_area" class="col-xs-12 col-sm-4 col-md-2 d-sm-none d-md-block d-none d-sm-block">
            <!--logo-->
            <div class="logo-wrapper ng-scope">
                <a href="#/"> <img src="#" alt="Project" class="img-responsive" /> </a>
            </div>
            <!--sidebar items-->
            <ul class="left-nav">
                <li>
                    <router-link to="/trending" class="row">
                        <div class="col-md-3"><i class="fas fa-chart-line fa-2x"></i></div>
                        <div class="col-md-8">Trending</div>
                    </router-link>
                </li>
                <li>
                    <a href="" class="row">
                        <div class="col-md-3"><i class="fas fa-heart fa-2x"></i></div>
                        <div class="col-md-8">Favorites</div>
                    </a>
                </li>
                <li>
                    <a href="" class="row">
                        <div class="col-md-3"><i class="fa fa-plus-circle fa-2x"></i></div>
                        <div class="col-md-8">Playlists</div>
                    </a>
                </li>
            </ul>
            <div class="row">
                <div class="">
<iframe width="224" height="151" src="https://www.youtube.com/embed/tbnLqRW9Ef0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </aside>
</template>
<script>
export default {
    name: 'SideBar'
}
</script>
<style scoped>

</style>