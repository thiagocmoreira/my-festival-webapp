import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import axios from 'axios'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default async function ({ store, ssrContext }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async (to, from, next) => {
    let toPath = to.path
    if (toPath !== '/') {
      let fetchedArtirts = store.getters['festivalConfigs/festivalArtists']
      if (!fetchedArtirts.length) {
        try {
          let response = await axios.get('https://myfestival-api/api/top-artists', {
            withCredentials: true,
            headers: {}
          })
          let data = response && response.data
          let artists = data && data.items
          let user = data && data.user
          store.dispatch('festivalConfigs/setTopArtists', artists)
          store.dispatch('user/setProfile', user)
        } catch (err) {
          let message = err.message
          if (/status code 403/.test(message)) {
            let a = document.createElement('a')
            a.href = `https://myfestival-api/api/login?target=${to.path}`
            a.click()
            return
          }
        }
      }
    }
    next()
  })
  return Router
}
