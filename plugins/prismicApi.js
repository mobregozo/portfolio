export const getPrismicFirstParagraph = (post) => {
  const textLimit = 500
  const slices = post.data.body_content
  let firstParagraph = ''
  let haveFirstParagraph = false
  slices.map(function(slice) {
    if (!haveFirstParagraph && slice.type === 'paragraph') {
      firstParagraph += slice.text
      haveFirstParagraph = true
    }
  })

  const limitedText = firstParagraph.substr(0, textLimit)

  if (firstParagraph.length > textLimit) {
    return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...'
  } else {
    return firstParagraph
  }
}
