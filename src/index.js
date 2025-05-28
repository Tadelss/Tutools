import ShortcutOverlay from './components/ShortcutOverlay.vue'
import CommandPalette from './components/CommandPalette.vue'
import ShortcutHint from './components/ShortcutHint.vue'
import StepTooltip from './components/StepTooltip.vue'
import ContextGuide from './components/ContextGuide.vue'

export {
  ShortcutOverlay,
  CommandPalette,
  ShortcutHint,
  StepTooltip,
  ContextGuide
}

export default {
  install(app) {
    app.component('ShortcutOverlay', ShortcutOverlay)
    app.component('CommandPalette', CommandPalette)
    app.component('ShortcutHint', ShortcutHint)
    app.component('StepTooltip', StepTooltip)
    app.component('ContextGuide', ContextGuide)
  }
}