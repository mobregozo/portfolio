<template>
  <div class="self-center flex-1">
    <h1 class="font-bold text-gray-800 text-6xl">
      MANUEL
      <span class="font-bold text-secondary-400">OBREGOZO</span>
    </h1>
    <h3 class="font-bold text-gray-600 mb-2 text-2xl">
      FRONT END DEVELOPER ·
      <a
        class="font-bold text-primary-500 hover:text-primary-400"
        href="mailto:obregozo.manuel@gmail.com"
      >
        OBREGOZO.MANUEL@GMAIL.COM
      </a>
    </h3>
    <div class="font-bold mb-3 text-gray-500">
      <i class="fas fa-map-marker-alt"></i> AMSTERDAM, NETHERLANDS
    </div>
    <p class="mb-2 mt-8 text-gray-600 font-semibold text-justify">
      I am an enthusiastic Front End Developer from a little town called
      Necochea in the coast of Argentina. Passionate about software development
      and developer communities.
    </p>
    <p class="mb-2 text-gray-600 font-semibold text-justify">
      Currently, I am centered on web, desktop, and hybrid mobile applications,
      using different JavaScript related Frameworks. I have worked as a
      developer for more than 8 years, in different kinds of business domains,
      across a variety of platforms. I executed and contributed to full-stack
      development projects from design to testing and up to production
      deployment, with an emphasis on front end features.
    </p>
    <p class="text-gray-600 font-semibold text-justify">
      I consider myself a real team player who understands the importance of
      teamwork, proactivity, collaboration, continuous feedback, and open
      communication.
    </p>
    <div class="mt-10">
      <a
        target="blank"
        class="mr-4 text-gray-600 hover:text-gray-500"
        href="https://www.linkedin.com/in/manuelobregozo/?locale=en_US"
      >
        <span class="hidden">Linkedin</span>
        <span class="fa-stack">
          <fa :icon="['fas', 'circle']" class="fa-stack-2x" />
          <fa
            :icon="['fab', 'linkedin-in']"
            class="fa-stack-1x fa-inverse h-6"
          />
        </span>
      </a>
      <a
        target="blank"
        class="mr-4 text-gray-600 hover:text-gray-500"
        href="https://github.com/mobregozo"
      >
        <span class="hidden">Github</span>
        <span class="fa-stack">
          <fa :icon="['fas', 'circle']" class="fa-stack-2x" />
          <fa
            :icon="['fab', 'github-alt']"
            class="fa-stack-1x h-6 fa-inverse"
          />
        </span>
      </a>
      <a
        target="blank"
        class="mr-4 text-gray-600 hover:text-gray-500"
        href="https://stackoverflow.com/users/6098430/manuel-obregozo"
      >
        <span class="hidden">Stack Overflow</span>
        <span class="fa-stack">
          <fa :icon="['fas', 'circle']" class="fa-stack-2x" />
          <fa
            :icon="['fab', 'stack-overflow']"
            class="fa-stack-1x fa-inverse h-6"
          />
        </span>
      </a>
    </div>
  </div>
</template>
<style></style>
<script>
export default {
  data: () => {
    return {
      showElement: false
    }
  }
}
</script>
