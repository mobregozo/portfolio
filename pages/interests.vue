<template>
  <div>
    <h2 class="mb-5 text-6xl font-bold">Interests</h2>
    <p class="my-2 text-gray-700 ">
      I was attached to art since I was born, which eventually developed my
      interest in Frontend Development. Influenced by my mother (art teacher)
      and my father (engineer) I managed to find the perfect balance between art
      and logic that I was looking for.
    </p>
    <p class="my-6 text-gray-700 tex bg-gray-200 rounded-md p-4">
      After the pandemic started, I have joined a developer community on Discord
      called
      <a
        href="https://twitter.com/FrontEndCafe"
        class=" hover:underline text-primary-700 font-semibold"
        target="_blank"
        >@FrontEndCafe </a
      >, where I usually help and support new devs to get their first job in the
      IT world, giving back to the community what I got at the beginning of my
      career.
    </p>
    <p class="my-2 text-gray-700 ">
      Besides work and technology, I usually spend my free time outdoors doing
      sports and traveling, taking pictures of everything I see.
    </p>
    <p class="mb-2 mt-2 text-gray-700 ">
      Related to sports, I am passionate about football, I love reading and
      talking about it, and of course, playing as much as I can.
    </p>
    <p class="mb-2 mt-2 text-gray-700 ">
      When I'm not running outside, I'm behind my drums, an instrument I've
      played since I was a kid, and I still enjoy playing the old punk rock
      songs that I used to listen to when I was in high school.
    </p>
    <div class="my-10 grid gap-8 grid-cols-1 md:grid-cols-3">
      <div v-for="img in interestPics" :key="img.link" class="hover-text">
        <img
          :src="`/${img.link}.jpg`"
          :alt="img.description"
          width="320"
          height="256"
          class="w-full object-cover h-64 rounded-md shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Interests'
  },
  data: () => {
    return {
      interestPics: [
        { link: 'drums', description: 'Rehearsal' },
        { link: 'football', description: 'Warming Up' },
        { link: 'snow', description: 'Snowboarding in Bariloche' }
      ]
    }
  }
}
</script>
