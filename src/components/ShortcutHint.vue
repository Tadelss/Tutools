<template>
  <span class="shortcut-hint">{{ keys }}</span>
</template>

<script setup>
const props = defineProps({
  keys: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.shortcut-hint {
  font-family: monospace;
  font-size: 0.85rem;
  background: #eee;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 0.5rem;
  color: #555;
}
</style>