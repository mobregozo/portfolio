<template>
  <div class="h-full flex-col flex w-full">
    <sidebar />
    <div
      id="main-view"
      class="flex-1 z-10 justify-between w-full mx-auto overflow-y-auto pb-4 pt-8"
    >
      <nuxt class="container max-w-3xl mx-auto px-4" />
    </div>
    <div class="text-white z-20 p-4 text-sm w-full bg-gray-800 font-semibold">
      <div class="container max-w-3xl px-4 mx-auto flex items-center">
        <img
          width="16"
          height="16"
          class="mr-2"
          src="/logo-github.svg"
          alt="github"
        />
        <span
          >Curious about the code of this website? it is available in&nbsp;
          <a
            class="text-primary-500 hover:underline"
            href="https://github.com/mobregozo/portfolio"
          >
            here.</a
          ></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-display: swap;
}

body {
  font-family: 'Open Sans', serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Saira Extra Condensed', serif-serif;
}

.page-enter-active {
  transition: opacity 0.4s, transform 0.4s;
  transition-timing-function: ease-in;
}
.page-leave-active {
  transition: opacity 0.2s, transform 0.2s;
  transition-timing-function: ease-in;
}

.page-enter-to,
.page-leave {
  opacity: 1;
  transform: translateX(0);
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}

/* saira-extra-condensed-regular - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  src: local(''),
    url('~assets/fonts/saira-extra-condensed-v6-latin-regular.woff2')
      format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/saira-extra-condensed-v6-latin-regular.woff')
      format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* saira-extra-condensed-600 - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-display: swap;
  font-style: normal;
  font-weight: 600;
  src: local(''),
    url('~assets/fonts/saira-extra-condensed-v6-latin-600.woff2')
      format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/saira-extra-condensed-v6-latin-600.woff')
      format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* saira-extra-condensed-700 - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-display: swap;
  font-style: normal;
  font-weight: 700;
  src: local(''),
    url('~assets/fonts/saira-extra-condensed-v6-latin-700.woff2')
      format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/saira-extra-condensed-v6-latin-700.woff')
      format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* saira-extra-condensed-800 - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-display: swap;
  font-style: normal;
  font-weight: 800;
  src: local(''),
    url('~assets/fonts/saira-extra-condensed-v6-latin-800.woff2')
      format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/saira-extra-condensed-v6-latin-800.woff')
      format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* saira-extra-condensed-900 - latin */
@font-face {
  font-family: 'Saira Extra Condensed';
  font-display: swap;
  font-style: normal;
  font-weight: 900;
  src: local(''),
    url('~assets/fonts/saira-extra-condensed-v6-latin-900.woff2')
      format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/saira-extra-condensed-v6-latin-900.woff')
      format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* open-sans-300 - latin */
@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 300;
  src: local(''),
    url('~assets/fonts/open-sans-v18-latin-300.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/open-sans-v18-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  src: local(''),
    url('~assets/fonts/open-sans-v18-latin-regular.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/open-sans-v18-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-italic - latin */
@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: italic;
  font-weight: 400;
  src: local(''),
    url('~assets/fonts/open-sans-v18-latin-italic.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/open-sans-v18-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-600 - latin */
@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 600;
  src: local(''),
    url('~assets/fonts/open-sans-v18-latin-600.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/open-sans-v18-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-700 - latin */
@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 700;
  src: local(''),
    url('~assets/fonts/open-sans-v18-latin-700.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/open-sans-v18-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* open-sans-800 - latin */
@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 800;
  src: local(''),
    url('~assets/fonts/open-sans-v18-latin-800.woff2') format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('~assets/fonts/open-sans-v18-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
</style>
