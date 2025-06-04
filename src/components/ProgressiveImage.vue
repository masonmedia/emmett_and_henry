<template>
  <div class="progressive-image-wrapper">
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      class="progressive-image"
      :class="{ 'loaded': loaded }"
      @load="onLoad"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})

const loaded = ref(false)

const onLoad = () => {
  loaded.value = true
}
</script>

<style scoped>
.progressive-image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.progressive-image {
  width: 100%;
  height: auto;
  filter: blur(10px);
  transform: scale(1.1);
  transition: filter 0.3s ease-out, transform 0.3s ease-out;
}

.progressive-image.loaded {
  filter: blur(0);
  transform: scale(1);
}
</style> 