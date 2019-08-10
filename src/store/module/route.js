const state = {
    menus:[]
}


const mutations={
    SET_MENUS:(state,menus)=>{
        state.menus = menus
    }
}

const actions ={
    setMenus({commit},menus) {
        let n = menus.filter(item=> {
            return !item.meta||!item.meta.hidden 
        })  
        commit('SET_MENUS',n)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}