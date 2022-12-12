import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import ContactsPage from "../views/ContactsPage.vue";



const routes = [{
        path: '/',
        name: 'LogIn',
        component: () =>
            import ("../views/LogIn.vue")
    },
    {
        path: "/api/allposts",
        name: "AllPosts",
        component: AllPosts,
    },
    {
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
    },
    {
        path: "/api/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/api/login",
        name: "LogIn",
        component: LogIn,
    },
    {
        path: "/api/contactspage",
        name: "ContactsPage",
        component: ContactsPage,
    },
    { //will route to AllPosts view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "LogIn",
        component: LogIn,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router