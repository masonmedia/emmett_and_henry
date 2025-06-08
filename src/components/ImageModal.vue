<template>
  <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-transparent border-0">
        <div class="modal-body p-0 position-relative">
          <button 
            type="button" 
            class="close-button position-absolute" 
            data-bs-dismiss="modal" 
            aria-label="Close"
          >×</button>
          <img 
            :src="imageSrc" 
            :alt="imageAlt" 
            class="img-fluid rounded"
            style="width: 100%; height: auto;"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modalId: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: ''
  }
})

// Close modal on escape key
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    const modal = document.getElementById(props.modalId)
    if (modal) {
      const bsModal = bootstrap.Modal.getInstance(modal)
      if (bsModal) {
        bsModal.hide()
      }
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.modal-content {
  background-color: rgba(0, 0, 0, 0.8) !important;
}

.modal-body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button {
  top: 1rem;
  right: 1rem;
  z-index: 1060;
  background-color: white;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  line-height: 1;
  color: black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.close-button:hover {
  transform: scale(1.1);
}
</style> 