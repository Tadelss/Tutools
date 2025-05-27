<template>
  <div v-if="visible" class="overlay">
    <div class="modal">
      <h2>Keyboard Shortcuts</h2>
      <ul>
        <li v-for="(s, i) in shortcuts" :key="i">
          <span class="key">{{ s.keys }}</span> — {{ s.description }}
        </li>
      </ul>
      <button @click="visible = false">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  shortcuts: Array,
  triggerKey: {
    type: String,
    default: '?'
  }
})

const visible = ref(false)

const toggleOverlay = (e) => {
  if (e.key === props.triggerKey && document.activeElement.tagName !== 'INPUT') {
    visible.value = !visible.value
  }
}

onMounted(() => window.addEventListener('keydown', toggleOverlay))
onUnmounted(() => window.removeEventListener('keydown', toggleOverlay))
</script>

<style scoped>
.overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 9999; }
.modal { background: white; padding: 2rem; border-radius: 8px; max-width: 500px; width: 100%; }
.key { background: #eee; padding: 0.2rem 0.5rem; border-radius: 4px; font-family: monospace; }
</style>