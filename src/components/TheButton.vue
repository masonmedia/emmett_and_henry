<template>
  <!-- If ButtonLink exists, wrap the button in an anchor tag -->
  <template v-if="ButtonLink">
    <a :href="ButtonLink" :target="ButtonTarget">
      <button class="btn px-4 rounded-5" :class="ButtonClass">
        <slot></slot>
      </button>
    </a>
  </template>
  <!-- If ButtonLink doesn't exist, render a regular button -->
  <template v-else>
    <button class="btn px-4 rounded-5" :class="ButtonClass">
      <slot></slot>
    </button>
  </template>
</template>

<script setup>
// Define the props for the component
const props = defineProps({
  ButtonClass: {
    type: String,
    required: false,
    default: ''
  },
  ButtonLink: {
    type: String,
    required: false,
    default: ''
  },
  ButtonTarget: {
    type: String,
    required: false,
    default: '_self' // Default to opening in the same tab
  }
});
</script>
