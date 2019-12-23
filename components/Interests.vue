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
    <div class="mt-10 flex flex-wrap items-center justify-around">
      <div
        v-for="img in interestPics"
        :key="img.link"
        class="hover-text relative"
      >
        <div
          class="description bottom-0 left-0 pl-4 font-semibold pb-2 z-50 text-white"
        >
          {{ img.description }}
        </div>
        <img
          :src="`/${img.link}.jpg`"
          class="img-gallery mx-1 z-10 rounded-lg shadow-lg mt-5 border-solid border-8 border-white"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-text .description {
  visibility: hidden;
  position: absolute;
}

.hover-text:hover .description {
  visibility: visible;
}
.hover-text:hover img {
  filter: brightness(0.5);
}

.img-gallery {
  height: 300px;
  width: 400px;
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
