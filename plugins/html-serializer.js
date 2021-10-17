/**
 * To learn more about HTML Serializer check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/html-serializer
 */

import prismicDOM from 'prismic-dom'
import linkResolver from './link-resolver'

const Elements = prismicDOM.RichText.Elements

export default function (type, element, content, children) {
  // Generate links to Prismic Documents as <router-link> components
  // Present by default, it is recommended to keep this
  if (type === Elements.hyperlink) {
    let result = ''
    const url = prismicDOM.Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<a href="${url}" class="text-primary-700 font-semibold hover:underline dark:text-primary-500" data-nuxt-link>${content}</a>`
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener"`
        : ''
      result = `<a href="${url}" class="text-primary-700 dark:text-primary-500 font-semibold hover:underline" ${target}>${content}</a>`
    }
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <router-link> component
  // Present by default, it is recommended to keep this
  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${element.alt ||
      ''}" copyright="${element.copyright || ''}">`

    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver)

      if (element.data.link_type === 'Document') {
        result = `<a href="${url}" data-nuxt-link>${result}</a>`
      } else {
        const target = element.data.target
          ? `target="'${element.data.target}'" rel="noopener"`
          : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`
    return result
  }

  if (type === Elements.list) {
    const id = element.text.replace(/\W+/g, '-').toLowerCase()
    return (
      '<ul class="list-disc list-inside my-4" id="' +
      id +
      '">' +
      children.join('') +
      '</ul>'
    )
  }

  if (type === Elements.listItem) {
    const id = element.text.replace(/\W+/g, '-').toLowerCase()
    return '<li class="mb-2" id="' + id + '">' + children.join('') + '</li>'
  }

  if (type === Elements.heading2) {
    const id = element.text.replace(/\W+/g, '-').toLowerCase()
    return (
      '<h2 class="text-3xl dark:text-white tracking-tighter" id="' +
      id +
      '">' +
      children.join('') +
      '</h2>'
    )
  }

  if (type === Elements.heading2) {
    return '<p>' + children.join('') + '</p>'
  }

  if (type === Elements.strong) {
    return '<span class="font-semibold">' + children.join('') + '</span>'
  }

  if (type === Elements.em) {
    return '<em>' + children.join('') + '</em>'
  }

  if (type === Elements.heading3) {
    const id = element.text.replace(/\W+/g, '-').toLowerCase()
    return '<h3 id="' + id + '">' + children.join('') + '</h3>'
  }

  if (type === Elements.paragraph) {
    return '<p class="my-4" >' + children.join('') + '</p>'
  }

  if (type === Elements.preformatted) {
    return (
      '<p class="my-4 p-4 rounded-md bg-gray-200 dark:text-gray-600" >' +
      children.join('') +
      '</p>'
    )
  }

  // Return null to stick with the default behavior for everything else
  return null
}
