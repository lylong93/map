import layout from '@/layout'

export default [
    {
        path: '/login',
        component: resolve => require(['@/views/entry/login'], resolve),
        meta: { hidden: true }
    },
    {
        path: '/',
        redirect: '/home',
        name:'主页',
        component: layout,
        children: [
            {
                path: '/home',
                name:'home',
                component: resolve => require(['@/views/home'], resolve),
            },
            {
                path: '/about',
                name:'about',
                component: resolve => require(['@/views/about'], resolve),
            }
        ],
    },
    {
        path: '/404',
        component: resolve => require(['@/views/404'], resolve),
        meta: { hidden: true }
    },
    { path: '*', redirect: '/404',meta: { hidden: true }}
]