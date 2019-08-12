import router from './index'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' 

import base from './base'
import extend from './extend'

NProgress.configure({ showSpinner: false })

let has = false

router.beforeEach(async (to,from,next)=>{

    NProgress.start()

    if(has) {
        next()
        NProgress.done()
    }else {
        if(to.path === '/home') {
            const d  = await store.dispatch('user/getInfo')
            let routers = parse(extend,d.data.routers)
            let menus = base.concat(routers)
            
            await router.addRoutes(routers)
            await store.dispatch('route/setMenus',menus)
            
            has = true
            next()
            NProgress.done()
        }
    }
})

function parse(r,m){
     return r.filter(item => {
        for(var i =0;i<m.length;i++) {
            if(item.path === m[i].path) {
                if(item.children) {
                    item.children = parse(item.children,m[i].children)
                }
                return item
            }
        }
    })
}