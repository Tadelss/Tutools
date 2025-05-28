# 🧰 Tutools UI

A Vue 3 component toolkit designed to help you build in-app tutorials, onboarding flows, and keyboard-driven productivity UIs. Perfect for dashboards, admin panels, or educational apps.

![npm](https://img.shields.io/npm/v/tutools-ui?color=%2300b894&style=flat-square)
![License](https://img.shields.io/npm/l/tutools-ui?style=flat-square)
![Vue 3](https://img.shields.io/badge/Vue-3.x-green?style=flat-square)

---

## 🚀 Features

- ✅ Keyboard shortcut overlay (`ShortcutOverlay`)
- ✅ Command palette (`CommandPalette`)
- ✅ Keybind hints (`ShortcutHint`)
- ✅ Guided step tooltips (`StepTooltip`)
- ✅ Contextual help popups (`ContextGuide`)

---

## 📦 Installation
In your terminal write:

```bash
npm install tutools-ui
```

And you're good to go!

---

## 🔧 Usage

### 1. Register globally (optional)
```js
import { createApp } from 'vue'
import App from './App.vue'
import Tutools from 'tutools-ui'

createApp(App).use(Tutools).mount('#app')
```

### 2. Or import components on demand
```js
import { ShortcutOverlay, StepTooltip } from 'tutools-ui'
```
---

## 🧱 Components

### 🔑ShortcutOverlay
Display all active keybindings in an overlay.

**Example:**
```vue
<ShortcutOverlay :shortcuts="[{ keys: 'Ctrl+S', description: 'Save' }]" />
```

### ⚡CommandPalette
A fuzzy-search popup for quick commands (like VS Code's ⌘+P).

**Example:**
```vue
<CommandPalette :commands="[{ name: 'Open Settings', handler: () => {} }]" />
```

### 💡ShortcutHint
Display a small keyboard shortcut hint next to an element.

**Example:**
```vue
<ShortcutHint keys="Ctrl+P" />
```

### 🎯StepTooltip
Simple hover or auto-triggered tooltip for guiding steps.

**Example:**
```vue
<StepTooltip text="Click here to begin" position="top">
  <button>Start</button>
</StepTooltip>
```
### ❓ContextGuide
Clickable question mark that shows contextual help.

**Example:**
```vue
<ContextGuide text="This button saves your settings.">
  <button>Save</button>
</ContextGuide>
```
---

## 📜 License
This project is licensed under the MIT License.