import { createRouter, createWebHistory } from "vue-router"

//path -> component
const routes = [
    {
        path:'/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
        meta:{
            title:'首頁',
            requiredLogin: false
        }
    },
    {
        path:'/Dashboard',
        name: 'Dashboard',
        component: () => import('@/pages/Dashboard.vue'),
        meta:{
            title:'儀表板',
            requiredLogin: false
        }
    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL), //vite 設定檔中 base: /
    routes:routes
})

router.beforeEach((to,from,next) => {
    if(to.meta.requiredLogin){
        let isAuthenticated = ture
        if(isAuthenticated){
            document.title = to.meta.title
            next()
        }else{
            next('/')
        }
    }else{
        document.title = to.meta.title
        next()
    }
})

export default router