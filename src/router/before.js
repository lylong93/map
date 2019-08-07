import router from './index'

const routers =  [
    {
        path: '/aaaa',
        component:  resolve => require(['@/views/about'], resolve),
    },
    {
        path: '/bbbb',
        component:  resolve => require(['@/views/about'], resolve),
    },
    {
        path: '/cccc',
        component:  resolve => require(['@/views/about'], resolve),
    }
]
// 在router实例生成后载入
let has = false
setTimeout(() => {
    router.beforeEach((to,from,next)=>{
    if(has) {
        next()
    }else {
        console.log(to)
        if(to.path === '/home') {
            router.addRoutes(routers)
            has = true
            next()
            // next({ ...to })
           }
           console.log(router)
    }
    })
}, 0);
