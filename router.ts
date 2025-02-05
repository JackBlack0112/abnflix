import { createRouter, createWebHistory } from 'vue-router';

const useComponent = (component: string) => (): Promise<any> =>
    import(`./src/pages/${component}.vue`);

const routes = [
    {
        path: '/',
        name: 'home',
        meta: { title: 'ABNFlix - Home' },
        component: useComponent('Index'),
    },
    {
        path: '/show/:id',
        name: 'show',
        meta: { title: 'ABNFlix - Show details' },
        component: useComponent('Show'),
    },
    {
        path: '/search/:query',
        name: 'search',
        meta: { title: 'ABNFlix - Search' },
        component: useComponent('Search'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = (to.meta?.title as string) || 'ABNFlix';
    next();
});

export default router;
