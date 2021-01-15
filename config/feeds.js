const webURL = 'https://www.manuelobregozo.com'

export const feed = [
  {
    path: '/feed.xml',
    async create(feed) {
      const baseUrlArticles = `${webURL}/thoughts`

      feed.options = {
        title: 'Manuel Obregozo',
        description:
          'These posts are random thoughts that constantly come to my mind, on a daily basis.',
        link: `${webURL}/feed.xml`
      }

      const Prismic = require('@prismicio/client')

      const apiEndpoint = process.env.PRISMIC_API_URL

      const api = await Prismic.client(apiEndpoint)
      const blogPosts = await api.query(
        Prismic.Predicates.at('document.type', 'blog-post')
      )

      const articles = blogPosts.results

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.uid}`
        feed.addItem({
          title: article.data.title[0].text,
          id: url,
          link: url,
          date: new Date(article.data.date),
          content: article.data.body_content,
          author: '@ManuelObre'
        })
      })
    },
    cacheTime: 1000 * 60 * 15,
    type: 'rss2'
  }
]
