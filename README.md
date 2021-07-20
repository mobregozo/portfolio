# Resume - Portfolio 

This is a small project I did to have a simple skeleton of an application that can be used as a resume/portfolio when presenting yourself to the rest of the world.
I have focused on having something simple with a clean UI.

Please, feel free to fork it and create your own!!

[![Netlify Status](https://api.netlify.com/api/v1/badges/b7c84929-dd55-4f5e-80c3-5ea8e9f0e340/deploy-status)](https://app.netlify.com/sites/sharp-cori-9743b8/deploys)

<b>DEMO HERE:</b> [Manuel Obregozo](https://www.manuelobregozo.com)

# Contributing
Pull requests are always welcome!

# How to run it

```
yarn dev
```

Generate the `/dist` folder
```
yarn generate
```
## ENV Variables

For GA or Prismic as a CMS the following variables need to be defined to make it work

- Prismic API URL
`PRISMIC_API_URL = https://<your-repository>.cdn.prismic.io/api/v2`
# Tech Stack
### Nuxt
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
### Taildwind CSS
Low-level CSS [framework](https://tailwindcss.com/) that provides utility classes that let you build custom designs without ever leaving your HTML, and keeping your custom CSS files pretty small.

### Prismic
In order to load the posts I am writing I have use a CDN called [Prismic](https://prismic.io/)

### Netlify
I personally used Netlify to deploy and host the website, and I recommend this because of its simplicity.
Find more info [here](https://www.netlify.com/).
# Credits

[Google Fonts loader](https://google-webfonts-helper.herokuapp.com/): I used this tool to get the necessary info when loading custom fonts locally, without using the CDN to prevent render blocking resources

[Ionicons](https://ionicons.com/): All the SVGs are part of Ionicons.

The Design of this website is inspired by the following two projects:
- https://github.com/wahyuway/nuxtjs-resume-template
- https://startbootstrap.com/themes/resume/



