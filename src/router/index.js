import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'helloWorld',
            component: () => import("@/components/HelloWorld")
        },
        {
            path: "/helloWorld",
            name: 'helloWorld',
            component: () => import("@/components/HelloWorld")
        },
    ]
})
