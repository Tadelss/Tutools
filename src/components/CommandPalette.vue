<template>
  <div v-if="open" class="palette-overlay">
    <div class="palette-box">
      <input type="text" v-model="query" placeholder="Type a command..." class="palette-input" />
      <ul class="palette-list">
        <li v-for="(cmd, i) in filteredCommands" :key="i" @click="cmd.action" class="palette-item">
          {{ cmd.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  commands: Array,
  triggerKey: {
    type: String,
    default: 'k'
  }
})

const open = ref(false)
const query = ref('')

const filteredCommands = computed(() => {
  return props.commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.value.toLowerCase())
  )
})

const handleKey = (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === props.triggerKey.toLowerCase()) {
    e.preventDefault()
    open.value = !open.value
  }
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

<style scoped>
.palette-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.palette-box { background: white; padding: 1rem; border-radius: 8px; width: 400px; box-shadow: 0 2px 8px rgba(0,0,0,0.3); }
.palette-input { width: 100%; padding: 0.5rem; font-size: 1rem; margin-bottom: 0.5rem; }
.palette-list { max-height: 200px; overflow-y: auto; list-style: none; padding: 0; margin: 0; }
.palette-item { padding: 0.5rem; cursor: pointer; }
.palette-item:hover { background: #f0f0f0; }
</style>