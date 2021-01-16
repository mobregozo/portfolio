import { global } from './global'

export const feed = [
  {
    path: '/feed.xml',
    async create(feed) {
      const baseUrlArticles = `${global.webURL}/${global.postsPath}`

      feed.options = {
        title: global.fullName,
        description: global.postDescription,
        link: `${global.webURL}/feed.xml`
      }

      const Prismic = require('@prismicio/client')
      const PrismicDOM = require('prismic-dom')
      const linkResolver = require('./../plugins/link-resolver')

      const apiEndpoint = process.env.PRISMIC_API_URL

      const api = await Prismic.client(apiEndpoint)
      const blogPosts = await api.query(
        Prismic.Predicates.at('document.type', 'post')
      )

      const articles = blogPosts.results
      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.uid}`
        feed.addItem({
          title: article.data.title[0].text,
          id: url,
          link: url,
          date: new Date(article.data.date),
          content: PrismicDOM.RichText.asHtml(
            article.data.body_content,
            linkResolver
          ),
          author: global.author
        })
      })
    },
    cacheTime: 1000 * 60 * 15,
    type: 'rss2'
  }
]
