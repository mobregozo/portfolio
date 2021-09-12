import Url from 'url-parse'

export default (req, res, next) => {
  const url = new Url(req.url)
  if (url.href.includes('thoughts')) {
    redirect(res, url.href.replace('thoughts', 'blog'))
    return
  }
  next()
}

function redirect(res, location) {
  res.writeHead(301, {
    location
  })
  res.end()
}
