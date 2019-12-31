// eslint-disable-next-line no-undef
WebFontConfig = {
  google: {
    families: [
      'Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900',
      'Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i'
    ]
  }
}
;(function() {
  const wf = document.createElement('script')
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
  wf.type = 'text/javascript'
  const s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(wf, s)
})()
