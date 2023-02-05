import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: () => import('../views/headerChild/Login/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/headerChild/Login/Login.vue')
  },
  {
    path: '/header',
    name: 'header',
    meta: {
      keepAlive: false
    },

    component: () => import('../components/Header.vue'),
    children: [{
        path: '/index',
        name: 'index',
        meta: {
          keepAlive: false
        },

        component: () => import('@/views/headerChild/index/index.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        meta: {
          keepAlive: false
        },

        component: () => import('@/views/headerChild/Contact/Contact.vue')
      },
      {
        path: '/gallery',
        name: 'gallery',
        meta: {
          keepAlive: false
        },

        component: () => import('@/views/headerChild/Gallery/Gallery.vue')
      },
      {
        path: '/peopertylistening',
        name: 'peopertylistening',
        meta: {
          keepAlive: false
        },

        component: () => import('@/views/headerChild/PeopertyListening/PeopertyListening.vue')
      },
      {
        path: '/singleproperty/:id',
        name: 'singleproperty',
        meta: {
          keepAlive: false
        },
        component: () => import('@/views/headerChild/SingleProperty/SingleProperty.vue')
      },
      {
        path: '/map',
        name: 'map',
        meta: {
          keepAlive: false
        },

        component: () => import('../views/headerChild/Map/Map.vue')
      }, {
        path: '/epidemicInfo',
        name: 'epidemicInfo',
        component: () => import('@/views/headerChild/EpidemicInfo/EpidemicInfo.vue')
      },
      {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import('@/views/headerChild/UserInfo/UserInfo.vue'),
        children: [{
            path: '/',
            name: 'userIndex',
            component: () => import('@/views/userInfo/index/index.vue')
          },
          {
            path: '/userIndex',
            name: 'userIndex',
            component: () => import('@/views/userInfo/index/index.vue')
          },
          {
            path: '/changeInfo',
            name: 'changeInfo',
            component: () => import('@/views/userInfo/changeInfo/changeInfo.vue')
          },
          {
            path: '/avatar',
            name: 'avatar',
            component: () => import('@/views/userInfo//avatar/avatar.vue')
          },
          {
            path: '/codeSafe',
            name: 'codeSafe',
            component: () => import('@/views/userInfo/codeSafe/codeSafe.vue')
          },
          {
            path: '/record',
            name: 'record',
            component: () => import('@/views/userInfo/record/record.vue')
          },
          {
            path: '/verified',
            name: 'verified',
            component: () => import('@/views/userInfo/verified/verified.vue')
          },
          {
            path: '/aboutUs',
            name: 'aboutUs',
            component: () => import('@/views/userInfo/aboutUs/aboutUs.vue')
          },
          {
            path: '/changePassword',
            name: 'changePassword',
            component: () => import('@/views/userInfo/changePassword/changePassword.vue')
          },
          {
            path: '/order',
            name: 'order',
            component: () => import('@/views/userInfo/order/order.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/userinfo') {
    let key = localStorage.getItem('user')
    if (key) {
      next();
    } else {
      alert("您还未登录，请先登录再访问个人信息！")
      next('/login');
    }
  } else {
    next();
  }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router