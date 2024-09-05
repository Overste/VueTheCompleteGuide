import { createApp } from 'vue';    
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UsersFooter.vue';

const app = createApp(App);
/**
 * The routes option defines the routes themselves, mapping URL paths to components. 
 * The component specified by the component option is 
 * the one that will be rendered by the <RouterView> in our earlier App.vue. 
 * These route components are sometimes referred to as views, though they are just normal Vue components.
 */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams', path: '/teams', components: { default: TeamsList, footer: TeamsFooter }, 
            children: [
                // TeamMembers will be rendered inside teams's <router-view>
                // when /teams/:id is matched
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ]
        },
        {
            path: '/users', components: { default: UsersList, footer: UserFooter }, beforeEnter: (to, from, next) => {
                next();
            }
        },
        // will match everything and put it under `route.params.pathMatch`
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return { left: 0, top: 0 };
    }
})

router.beforeEach((to, from, next) => {

    next();
});

// router.router.afterEach((to, from) => {
//     // to and from are both route objects.
// })


app.use(router);

app.mount('#app');
