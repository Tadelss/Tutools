<template>
  <div class="step-tooltip-wrapper" ref="wrapper">
    <slot />
    <div v-if="visible" :class="['step-tooltip', position]" role="tooltip">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  position: { type: String, default: 'top' }, // top, right, bottom, left
  autoShow: { type: Boolean, default: false }
})

const visible = ref(false)
const wrapper = ref(null)

function showTooltip() {
  visible.value = true
}
function hideTooltip() {
  visible.value = false
}

onMounted(() => {
  if (props.autoShow) {
    showTooltip()
  } else if (wrapper.value) {
    wrapper.value.addEventListener('mouseenter', showTooltip)
    wrapper.value.addEventListener('mouseleave', hideTooltip)
  }
})

onUnmounted(() => {
  if (wrapper.value) {
    wrapper.value.removeEventListener('mouseenter', showTooltip)
    wrapper.value.removeEventListener('mouseleave', hideTooltip)
  }
})
</script>

<style scoped>
.step-tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.step-tooltip {
  position: absolute;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 10;
  opacity: 0.95;
  pointer-events: none;
}

.step-tooltip.top    { bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-6px); }
.step-tooltip.right  { left: 100%; top: 50%; transform: translateX(6px) translateY(-50%); }
.step-tooltip.bottom { top: 100%; left: 50%; transform: translateX(-50%) translateY(6px); }
.step-tooltip.left   { right: 100%; top: 50%; transform: translateX(-6px) translateY(-50%); }
</style>