import Home from '../components/Home';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactMe
        }            
    ]
});