import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Buy from "../views/Buy.vue";
import Login from "../views/Login.vue";
import Customer from "../views/Customer.vue";
import CustomerDashboard from "../views/CustomerDashboard.vue";
import EstateCompany from "../views/EstateCompany.vue";
import EstateComLogin from "../views/EstateComLogin.vue";
import Sell from "../views/Sell.vue";
import Signup from "../views/Signup.vue";
import Mortgage from "../views/Mortgage.vue";
import Adertise from "../views/Adertise.vue";
import Dashboard from "../views/Dashboard.vue";
import VueChartJS from "../views/VueChart.vue";
import Post from "../views/Post.vue";


Vue.use(VueRouter);


const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/buy",
        name: "Buy",
        component: Buy,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/mortgage",
        name: "Mortgage",
        component: Mortgage,
    },
    {
        path: "/advertise",
        name: "Adertise",
        component: Adertise,
    },
    {
        path: "/dashboard/:users",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/customerdashboard/:users",
        name: "CustomerDashboard",
        component: CustomerDashboard,
    },
    {
        path: "/estatecompany/:users",
        name: "EstateCompany",
        component: EstateCompany,
    },
    {
        path: "/customer",
        name: "Customer",
        component: Customer,
    },
    {
        path: "/post",
        name: "Post",
        component: Post,
    },
    {
        path: "/chartjs",
        name: "VueChartJS",
        component: VueChartJS,
        props: true,
        beforeEnter: (to, from, next) => {
            if (to.params.name) {
                next()
            } else {
                next({ name: 'Chart' })
            }


        }
    },
    {
        path: "/estatecomlogin",
        name: "EstateComLogin",
        component: EstateComLogin,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },

    {
        path: "/sell",
        name: Sell,
        component: Sell,
    },
    {
        path: "/rent",
        name: "Rent",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Rent" */ "../views/Rent.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;