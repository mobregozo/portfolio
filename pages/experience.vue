/* eslint-disable prettier/prettier */
<template>
  <div class="">
    <h1 class="mb-5 text-6xl font-bold">Experience</h1>
    <div class="mb-8">
      <p class="mb-2 text-gray-700">
        I have been working as a developer since 2011. Due to the fact that I
        have always liked UI / UX related topics, I made a switch to Frontend in
        2013. Something that I have been enjoying ever since.
      </p>
      <p class="mb-2 text-gray-700">
        I consider myself a true team player who understands the importance of
        teamwork, proactivity, collaboration, continuous feedback, and open
        communication.
      </p>
      <p class="mt-4 text-gray-700 bg-gray-200 rounded-md p-4">
        Apart from my full-time job, together with other colleagues we have been
        developing an e-commerce platform called
        <a
          href="https://www.serviteonline.com"
          target="_blank"
          class="font-semibold hover:underline text-primary-700"
          >ServiteOnline </a
        >, with the aim of helping stores to digitize their order management
        process, you will find more information below!
      </p>
    </div>

    <div
      v-for="job in experiences"
      v-bind:key="job.companyName"
      class="flex flex-nowrap flex-col md:flex-row border-solid border-t-2 border-gray-200 pt-10 pb-6"
    >
      <div class="mr-auto">
        <div class="md:flex items-center md:justify-between">
          <h2 class="m-0 font-bold text-gray-700 text-3xl">
            {{ job.role }}
          </h2>
          <div class="text-primary-700 font-bold whitespace-nowrap">
            {{ job.period }}
          </div>
        </div>

        <div class="flex items-center mt-4 mb-4">
          <img
            :alt="job.companyName"
            :src="`/${job.logo}`"
            width="64"
            height="64"
            class="w-16 h-16 shadow-md rounded-full border-solid border-4 border-white"
          />
          <div class="pl-4 ">
            <div class="text-lg text-gray-700">
              <span class="font-bold">{{ job.companyName }} </span>•
              {{ job.location }}
            </div>
          </div>
        </div>
        <div class="text-gray-700 font-semibold">
          <p class="whitespace-pre-line">{{ job.description }}</p>
        </div>
        <div
          v-for="project in job.projects"
          :key="project.description"
          class="my-6 last:mb-0"
        >
          <div class="pl-3">
            <div
              class="w-full text-xl text-secondary-700 font-semibold border-b pb-1 mb-3"
            >
              {{ project.client }}
            </div>
            <div class="text-gray-700 break-words">
              <p class="whitespace-pre-line">{{ project.description }}</p>
            </div>
            <div class="mt-2 text-gray-700">
              <div class="font-semibold text-primary-700">
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
  head: {
    title: 'Experience'
  },
  async asyncData({ $content }) {
    const experiences = await $content('experiences').fetch()
    return { experiences }
  }
}
</script>
