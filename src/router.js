import Vue from "vue";
import store from "./store";
// import {isMobile} from "mobile-device-detect";
import Router from "vue-router";
import NProgress from "nprogress";
// import authenticate from "./auth/authenticate";

Vue.use(Router);

// create new router

const routes = [
  { path: '/', redirect: '/auth/signIn' },
  {
    path: "/app/pages",
    component: () => import("./views/app"), //webpackChunkName app
    // beforeEnter: authenticate,
    redirect: "/app/pages/blank",
    children: [
      // pages
      {
        path: "/app/pages",
        component: () => import("./views/app/pages"),
        redirect: "/app/pages/profile",
        children: [
          {
            path: "profile",
            component: () => import("./views/app/pages/profile"),
            meta: {
              requiresAuth: true, 
            },
          },
          {
            path: "error",
            component: () => import("./views/app/pages/notFound"),
            meta: {
              requiresAuth: true, 
            },
          },
          {
            path: "icons",
            component: () => import("./views/app/pages/icons"),
            meta: {
              requiresAuth: true, 
            },
          },
          {
            path: "groups",
            component: () => import("./views/app/Groups/Index"),
            meta: {
              requiresAuth: true, 
            },
          },
          {
            path: "search-result",
            component: () => import("./views/app/pages/search-result"),
            meta: {
              requiresAuth: true, 
            },
          },
          {
            path: "pricing-table",
            component: () => import("./views/app/pages/pricingTable"),
            meta: {
              requiresAuth: true, 
            },
          },
          {
            path: "faq",
            component: () => import("./views/app/pages/faq"),
            meta: {
              requiresAuth: true, 
            },
          },
          {
            path: "blank",
            component: () => import("./views/app/pages/blank"),
            meta: {
              requiresAuth: true, 
            },
          },
          
        ]
      },

    

    
    ]
  },
  // sessions
  {
    path: "/auth",
    component: () => import("./views/app/Auth"),
    redirect: "/app/sessions/signIn",
    children: [
      {
        path: "signIn",
        component: () => import("./views/app/Auth/signIn")
      },
      {
        path: "signUp",
        component: () => import("./views/app/Auth/signUp")
      },
      {
        path: "forgot",
        component: () => import("./views/app/Auth/forgot")
      },
      {
        path: "reset/:token",
        component: () => import("./views/app/Auth/reset")
      }
    ]
  },


  {
    path: "*",
    component: () => import("./views/app/pages/notFound")
  }
];

const router = new Router({
  mode: "history",
  linkActiveClass: "open",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0};
  }
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});
function isAuthenticated() {
  // Check if the user is authenticated
  // Modify this logic based on your authentication implementation
  const token = localStorage.getItem('auth_token');
  return !!token;
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // If the route requires authentication and the user is not authenticated, redirect to the login page
    next('/app/sessions/signIn');
  } else {
    // Otherwise, proceed with the navigation
    next();
  }
})
router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);
  // NProgress.done();
  // if (isMobile) {
  if (window.innerWidth <= 1200) {
    // console.log("mobile");
    store.dispatch("changeSidebarProperties");
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
      store.dispatch("changeCompactSidebarProperties");
    }
  } else {
    if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
      store.dispatch("changeSecondarySidebarProperties");
    }

    // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  }
});

export default router;
