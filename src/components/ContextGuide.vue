<template>
  <div class="context-guide-wrapper" ref="wrapper">
    <slot />
    <button class="guide-button" @click="visible = !visible">?</button>
    <div v-if="visible" class="guide-box">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  text: { type: String, required: true }
})

const visible = ref(false)
const wrapper = ref(null)
</script>

<style scoped>
.context-guide-wrapper {
  position: relative;
  display: inline-block;
}

.guide-button {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  cursor: pointer;
  z-index: 10;
}

.guide-box {
  position: absolute;
  top: 28px;
  right: 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 8px 10px;
  font-size: 13px;
  border-radius: 6px;
  width: max-content;
  max-width: 240px;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>