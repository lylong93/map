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
    },{
        path:'/table',
        component:layout,
        redirect:'/table/onetable',
        name:'table',
        children:[
            {
                path:'/table/onetable',
                name:'onetable',
                component:resolve=> require(['@/views/table/onetable'],resolve)
            },
            {
                path:'/table/towtable',
                name:'towtable',
                component:resolve=> require(['@/views/table/towtable'],resolve)
            }
        ]
        
    },
    {
        path: '/404',
        component: resolve => require(['@/views/404'], resolve),
        meta: { hidden: true }
    },
    { path: '*', redirect: '/404',meta: { hidden: true }}
]