import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search.vue';
import Profile from './components/Profile.vue';

// Method to actually use router.
Vue.use(Router);

// Router instance, 
export default new Router({
    // Removes / from URL.
    mode: 'history',
    routes: [
        {
            // Home page.
            path: '/',
            // Home page name.
            name: 'search',
            component: Search
        },
        {
            // Profile page.
            path: '/profile/:platform/:gamertag',
            name: 'profile',
            component: Profile
        }
    ]
});