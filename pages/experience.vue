/* eslint-disable prettier/prettier */
<template>
  <div class="">
    <h1 class="mb-5 text-6xl font-semibold text-gray-700 dark:text-gray-300">
      Experience
    </h1>
    <div class="mb-8 text-gray-700 dark:text-white">
      <p class="mb-2">
        After working as a frontend developer since 2011, I have recently
        switched to a product management position.
      </p>
      <p class="mb-2">
        I have been told that I am a team player who understands the importance
        of teamwork, collaboration, continuous feedback, and open communication.
      </p>
      <p class="mb-2">
        I co-founded an e-commerce platform called
        <a
          href="https://www.serviteonline.com"
          target="_blank"
          class="font-semibold hover:underline text-primary-700 dark:text-primary-500"
        >ServiteOnline</a>, with the aim of helping stores to digitize their order management
        process, you will find more information below!
      </p>
      <p class="mb-2">
        Apart from my full-time job, I do volunteering work at
        <a
          href="https://twitter.com/FrontEndCafe"
          target="_blank"
          class="font-semibold hover:underline text-primary-700 dark:text-primary-500"
        >@FrontendCafé
        </a>
        discord community, come on and join us!
      </p>
    </div>
    <div
      v-for="job in experiences"
      :key="job.period"
      class="flex flex-nowrap flex-col md:flex-row border-solid border-t border-gray-200 dark:border-gray-700 pt-10 pb-6"
    >
      <div class="mr-auto">
        <div class="flex items-start">
          <img
            :alt="job.companyName"
            :src="`/${job.logo}`"
            width="64"
            height="64"
            class="w-16 h-16"
          >
          <div class="ml-4">
            <h2 class="font-bold text-gray-700 text-xl dark:text-white">
              {{ job.companyName }}
            </h2>
            <div
              class="text-primary-700 text-sm font-bold whitespace-nowrap dark:text-white leading-4"
            >
              {{ job.period }}
            </div>
            <div class="text-gray-600 dark:text-gray-400 leading-4 text-sm">
              {{ job.location }}
            </div>
          </div>
        </div>
        <div class="text-gray-700 dark:text-gray-200 mt-2">
          {{ job.description }}
        </div>
        <div
          v-for="project in job.projects"
          :key="project.description"
          class="my-2 last:mb-0"
        >
          <div>
            <div class="w-full text-xl text-secondary-700 font-semibold dark:text-white">
              {{ project.role }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-500 dark:font-semibold">
              {{ project.period }}
            </div>
            <div class="text-gray-700 break-words dark:text-gray-300 whitespace-pre-line text-sm">
              <p>{{ project.description }}</p>
            </div>
            <div
              v-if="project.technologies"
              class="mt-2 text-gray-700 dark:text-white text-sm"
            >
              <div
                class="font-semibold text-primary-700 dark:text-primary-500 "
              >
                Main Technologies
              </div>
              <p>
                {{ project.technologies }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $content }) {
    const experiences = await $content('experiences').fetch()
    return { experiences }
  },
  head: {
    title: 'Experience'
  }
}
</script>
