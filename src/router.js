import { createRouter, createWebHistory } from "vue-router"
import Login from "./views/Login.vue"
import Record from "./views/Record.vue"
import Trivia from "./views/Trivia.vue"

const routes = [{
        path: "/",
        component: Login,
        name: "Login"
    },
    {
        path: "/trivia",
        component: Trivia,
        name: "Trivia"
    },
    {
        path: "/record",
        component: Record,
        name: "Record"
    }

]

export default createRouter({
    history: createWebHistory(),
    routes
})