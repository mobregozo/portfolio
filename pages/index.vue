<template>
  <div>
    <avatar class="mr-4 md:mr-0 md:mb-5 flex-shrink-0" />
    <h1 class="text-gray-800 text-4xl md:text-7xl font-bold leading-tight">
      Hello there! I am
    </h1>
    <h1
      class="font-bold text-5xl md:text-8xl leading-none md:leading-none shadow-inner-under w-fit text-secondary-200 mb-2"
    >
      <span class="text-gray-800">MANUEL</span>
      <span class="text-secondary-700">OBREGOZO</span>
    </h1>
    <div class="font-bold md:text-xl mb-3 text-gray-700 flex items-center">
      <img
        width="24"
        height="24"
        class="h-6"
        src="/location.svg"
        alt="location"
      />BARCELONA, SPAIN
    </div>
    <p class="mb-2 mt-8 text-gray-700 font-semibold md:text-xl">
      Enthusiastic Frontend developer. <br />
      Born and raised in a small town in Argentina. <br />
      Passionate about software development in its whole.
    </p>
    <div class="rounded bg-gray-200 p-3 mt-6 w-fit">
      <p>
        Supporting new devs at
        <a
          href="https://twitter.com/FrontEndCafe"
          target="_blank"
          class="font-semibold hover:underline text-primary-700"
          >@FrontendCafé
        </a>
        discord community, Come on and join us!
      </p>
      <p class="mt-2">
        I have recently started blogging, find my latest posts under
        <NuxtLink
          to="thoughts"
          class="font-semibold hover:underline text-primary-700"
          >/Thoughs
        </NuxtLink>
      </p>
    </div>
    <div class="mt-10 flex items-center">
      <a
        target="blank"
        class="mr-4 bg-gray-600 w-10 h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
        href="https://twitter.com/ManuelObre"
        ><span class="hidden">twitter</span>
        <img width="24" height="24" src="/logo-twitter.svg" alt="twitter" />
      </a>
      <a
        target="blank"
        class="mr-4 bg-gray-600 w-10 h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
        href="https://www.linkedin.com/in/manuelobregozo/?locale=en_US"
      >
        <span class="hidden">linkedin</span>
        <img width="24" height="24" src="/logo-linkedin.svg" alt="linkedin" />
      </a>
      <a
        target="blank"
        class="mr-4 bg-gray-600 w-10 h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
        href="https://github.com/mobregozo"
        ><span class="hidden">github</span>
        <img width="24" height="24" src="/logo-github.svg" alt="github" />
      </a>
      <a
        target="blank"
        class="mr-4 bg-gray-600 w-10 h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
        href="https://stackoverflow.com/users/6098430/manuel-obregozo"
        ><span class="hidden">stackoverflow</span>
        <img
          width="24"
          height="24"
          src="/logo-stackoverflow.svg"
          alt="stackoverflow"
        />
      </a>
      <a
        target="blank"
        class="mr-4 bg-gray-600 w-10 h-10 p-2 rounded-full hover:scale-110 transform duration-300 hover:opacity-50"
        href="/feed.xml"
        ><span class="hidden">twitter</span>
        <img width="24" height="24" src="/logo-rss.svg" alt="rss" />
      </a>
    </div>
  </div>
</template>
<script>
import Avatar from '@/components/Avatar'

export default {
  head: {
    title: 'About'
  },
  components: {
    Avatar
  }
}
</script>
