
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'configs', component: () => import('pages/FestivalConfigs.vue') },
      { path: 'headliners', component: () => import('pages/Headliners.vue') },
      { path: 'lineup', component: () => import('pages/Lineup.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
