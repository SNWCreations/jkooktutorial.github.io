import { defineConfig } from 'vitepress'
import { nav } from './common/nav'
import { sidebar } from './common/sidebar'
import { socialLinks } from './common/socialLinks'

export default defineConfig({
  base: '/jkooktutorialpages/',
  lang: 'zh-CN',
  title: 'JKookTutorial',
  description: 'The JKook Plugin Development Tutorial for beginners, by the author of JKook framework.',
  srcDir: 'src',
  themeConfig: {
    logo: '/jkook.svg',
    editLink: {
      pattern: 'https://github.com/SNWCreations/jkooktutorialpages/edit/main/docs/src/:path',
      text: '在 Github 上编辑此页面'
    },
    search: {
      provider: 'local'
    },
    nav: nav,
    sidebar: sidebar,
    socialLinks: socialLinks
  },
  ignoreDeadLinks: true
})
