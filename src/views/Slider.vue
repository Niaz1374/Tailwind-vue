<template>
  <div class="about relative">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" class="p-20 text-center-web">
        <img :src="currentImg" class="w-9/12 h-96 object-cover" />
      </div>
    </transition-group>
    <a
      class="prev z-10 text-gray-200 absolute top-64 text-7xl left-16"
      @click="prev"
      href="#"
      >&#10094;</a
    >
    <a
      class="next z-10 text-gray-200 absolute top-64 text-7xl right-16"
      @click="next"
      href="#"
      >&#10095;</a
    >
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/collection/190727/1600x900",
        "https://source.unsplash.com/WLUHO9A_xik/1600x900",
        "https://source.unsplash.com/user/erondu/daily",
        "https://source.unsplash.com/1600x900/nature",
        "https://source.unsplash.com/collection/190727/1600x900",
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 8000);
    },

    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>
