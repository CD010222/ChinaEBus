import { defineConfig } from 'vitepress';
import { themeConfig } from './themeConfig';
import { viteConfig } from './viteConfig';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChinaEBus",
  base: '/ChinaEBus/',
  themeConfig: themeConfig,
  vite: viteConfig,
  head:[
    ['link',{ rel:'icon', href:'/ChinaEBus/favicon.ico' }]
  ]
})
