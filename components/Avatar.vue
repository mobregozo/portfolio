<template>
  <div>
    <transition name="zoom-left" appear>
      <img
        src="/profile.jpg"
        alt="avatar"
        class="h-12 w-12 md:h-40 md:w-40 object-cover rounded-full md:border-4"
      />
    </transition>
  </div>
</template>
<style>
.zoom-left-enter-active,
.zoom-left-leave-active {
  transition: all 0.6s;
  transition-delay: 1s;
  opacity: 1;
  transform: translateZ(0) scale(1);
}
.zoom-left-enter,
.zoom-left-leave-to {
  opacity: 0;
  transform: translate3d(-100px, 0, 0) scale(0.6);
}
</style>
