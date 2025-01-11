<script setup>
import { defineEmits, defineProps } from 'vue'

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}

const isVisible = computed(() => props.modelValue)
</script>

<template>
  <div
    v-if="isVisible"
    class="modal-overlay"
    @click.self="close"
  >
    <div class="modal-content">
      <header class="modal-header">
        <slot name="header">
          <h3>Default Header</h3>
        </slot>
        <button class="close-button" @click="close">
          ×
        </button>
      </header>
      <main class="modal-body">
        <slot>Default Content</slot>
      </main>
      <footer class="modal-footer">
        <slot name="footer">
          <button @click="close">
            Close
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-header,
.modal-footer {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 1rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
