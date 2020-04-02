# Resume - Portfolio 

This is a small project I did to have a simple skeleton of an application that can be used as a resume/portfolio when presenting yourself to the rest of the world.

I focused on having something simple with a clean UI that is easy to read and performance enough to be rendered in any device.

Please, feel free to fork it and create your own!

## Tech Stack

#### Taildwind CSS
Low-level CSS [framework](https://tailwindcss.com/) that provides utility classes that let you build custom designs without ever leaving your HTML, and keeping your custom CSS files pretty small.

### Netlify
I personally used Netlify to deploy and host the website, and I recommend this because of its simplicity. Find more info [here](https://www.netlify.com/).

## Demo

> [Manuel Obregozo](https://www.manuelobregozo.com)

## Build Setup

The project is running under the 'universal' mode in Nuxt, which means it has server-side rendering and client-side navigation.

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Credits

I created the design of the website inspired by the following two projects:
https://github.com/wahyuway/nuxtjs-resume-template
https://startbootstrap.com/themes/resume/

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


netlify login
netlify link

dependencies:


brew install git-lfs
brew upgrade git-lfs


netlify plugins:install netlify-lm-plugin
netlify lm:install


Delete a site with Large Media enabled
When you configure a repository to use Git LFS and Large Media, your designated LFS-tracked files will no longer be stored in your repository on your Git provider. Instead, they will be stored in the Large Media store for your connected Netlify site. This means that if you delete that site, you will not be able to recover the files at your Git provider.

Don't forget to make a copy!

To avoid permanent file loss, always clone your entire repository locally before deleting a site with Large Media enabled.

To clone your entire repository with all branches and history, run the following command:

git clone --mirror YOUR_REPOSITORY_URL
Make sure your files have downloaded properly before deleting the connected site on Netlify.