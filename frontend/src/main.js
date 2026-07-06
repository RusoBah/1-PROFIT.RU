import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { seo } from './data/seo'

document.title = seo.title

const metaTags = [
  ['name', 'description', seo.description],
  ['name', 'keywords', seo.keywords],
  ['name', 'robots', 'index, follow'],
  ['property', 'og:type', 'website'],
  ['property', 'og:locale', seo.locale],
  ['property', 'og:site_name', seo.siteName],
  ['property', 'og:title', seo.title],
  ['property', 'og:description', seo.description],
  ['property', 'og:url', seo.url],
  ['name', 'twitter:card', 'summary'],
  ['name', 'twitter:title', seo.title],
  ['name', 'twitter:description', seo.description],
]

metaTags.forEach(([attr, key, content]) => {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.append(tag)
  }

  tag.setAttribute('content', content)
})

createApp(App).mount('#app')
