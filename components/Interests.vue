<template>
  <div class="my-auto">
    <h2 class="mb-5 text-6xl font-bold leading-none">Interests</h2>
    <p class="mb-2 mt-8 text-gray-600 font-semibold text-justify">
      Besides work, I usually spend my free time outdoors playing sports and
      travelling around, taking pictures of everything I see.
    </p>
    <p class="mb-2 mt-2 text-gray-600 font-semibold text-justify">
      Related to sports I am passionate about football, love to read and talk
      about it, and of course play as much as I can.
    </p>
    <p class="mb-2 mt-2 text-gray-600 font-semibold text-justify">
      When I am not running outside, I am behind my drums, instrument that I
      play since I was a little kid, and I still enjoy playing the good old punk
      rock songs that I used to listen to when I was at high school.
    </p>
    <div class="mt-10 gallery">
      <div
        v-for="img in interestPics"
        :key="img.link"
        class="hover-text relative gallery-panel rounded-lg shadow-lg border-solid border-8 border-white"
      >
        <img
          :src="`/${img.link}.jpg`"
          :alt="img.description"
          class="img-gallery"
        />
        <div class="py-2">
          {{ img.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;
  margin: 5rem auto;
}
.gallery-panel img {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}
</style>

<script>
export default {
  data: () => {
    return {
      interestPics: [
        { link: 'beach', description: 'Necochea, Argentina' },
        { link: 'drums', description: 'Rehearsal' },
        { link: 'drums1', description: 'Rehearsal' },
        { link: 'football', description: 'Warming Up' },
        { link: 'snow', description: 'Snowboarding in Bariloche' },
        { link: 'snow1', description: 'Snowboarding in Bariloche' }
      ]
    }
  }
}
</script>
