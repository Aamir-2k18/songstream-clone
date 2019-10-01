import Home from './components/Home.vue'
import About from './components/About.vue'
import Trending from './components/Trending.vue'
import Playlists from './components/Playlists.vue'
import SearchResults from './components/SearchResults.vue'


export default [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/trending', component: Trending },
    { path: '/playlists', component: Playlists },
    { path: '/search', component: SearchResults }
]