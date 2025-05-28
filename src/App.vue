<template>
  <main class="app-container">
    <h1>Tutools Demo</h1>
    <p>This page demonstrates all components from the Tutools package.</p>

    <section class="demo-box">
      <h2>🔑 Keyboard Shortcut Overlay</h2>
      <p>Press <kbd>?</kbd> (<kbd>SHIFT</kbd>+<kbd>/</kbd>) to open the shortcut list.</p>
      <ShortcutOverlay :shortcuts="shortcuts" />
    </section>

    <section class="demo-box">
      <h2>⚡ Command Palette</h2>
      <p>Press <kbd>Ctrl + K</kbd> to open the palette.</p>
      <CommandPalette :commands="commands" />
    </section>

    <section class="demo-box">
      <h2>💡 Shortcut Hint</h2>
      <button @click="save" class="demo-button">
        Save
        <ShortcutHint keys="Ctrl+S" />
      </button>
    </section>

    <section class="demo-box">
      <h2>🎯 Step Tooltip</h2>
      <p>Hover over or auto-show a tooltip on any element:</p>

      <div style="display: flex; gap: 1rem; align-items: center;">
        <StepTooltip text="Click to save your progress" position="top">
          <button class="demo-button">Save</button>
        </StepTooltip>

        <StepTooltip text="This option is required" position="right" :autoShow="true">
          <span class="tag">Required</span>
        </StepTooltip>
      </div>
    </section>

    <section class="demo-box">
      <h2>❓ Context Guide</h2>
      <p>Click the floating question mark to reveal help text:</p>

      <ContextGuide text="This button saves your settings. You should do this often.">
        <button class="demo-button">Save Settings</button>
      </ContextGuide>
    </section>

  </main>
</template>

<script setup>
import ShortcutOverlay from './components/ShortcutOverlay.vue'
import CommandPalette from './components/CommandPalette.vue'
import ShortcutHint from './components/ShortcutHint.vue'
import StepTooltip from './components/StepTooltip.vue'
import ContextGuide from './components/ContextGuide.vue'

const shortcuts = [
  { keys: 'Ctrl+S', description: 'Save changes' },
  { keys: '?', description: 'Toggle this shortcut list' },
  { keys: 'Ctrl+K', description: 'Open command palette' },
]

const commands = [
  { label: 'Say Hello', action: () => alert('Hello! 👋') },
  { label: 'Log Message', action: () => console.log('Logging something...') },
  { label: 'Open Google', action: () => window.open('https://google.com', '_blank') },
]

function save() {
  alert('Saved successfully!')
}
</script>

<style scoped>
.app-container {
  font-family: Arial, sans-serif;
  padding: 2rem;
  max-width: 700px;
  margin: auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.demo-box {
  margin-bottom: 2.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

kbd {
  background: #eee;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.demo-button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag {
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>