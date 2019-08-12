import layout from '@/layout'

export default [
    {
        path: '/one',
        redirect: '/one/ttt',
        name: '业务一',
        component: layout,
        children: [
            {
                path: '/one/ttt',
                name: 'onettt',
                component: resolve => require(['@/views/one/onettt'], resolve),
            },
            {
                path: '/one/eee',
                name: 'oneeee',
                component: resolve => require(['@/views/one/oneeee'], resolve),
            }
        ]
    },
    {
        path: '/tow',
        component: resolve => require(['@/views/tow/index'], resolve)
    },
    {
        path: '/live',
        name:'live',
        redirect:'/live/index',
        component: layout,
        children:[
            {   
                path:'/live/index',
                name:'live',
                component: resolve => require(['@/views/live/index'], resolve),
            }
        ]
    },
]
