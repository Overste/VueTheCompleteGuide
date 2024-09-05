import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachesDetail from "./pages/coaches/CoachesDetail.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import RequestReceived from "./pages/requests/RequestReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id', component: CoachesDetail, props: true, children: [
            { path: 'contact', component: ContactCoach }
        ]},
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;