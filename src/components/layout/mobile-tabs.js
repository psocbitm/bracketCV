import { FileCode2, Eye } from 'lucide-react'
import { VIEW_MODES } from './constants'

export default function MobileTabs({ activeMode, onModeChange }) {
  return (
    <div className="flex-none md:hidden border-b border-white/5 bg-black/10 backdrop-blur-xl p-3">
      {/* Tab Pill Container */}
      <div
        className="flex items-center rounded-lg bg-black/40 p-1 border border-white/5 shadow-inner"
        role="tablist"
      >
        <TabButton
          label="Editor"
          icon={FileCode2}
          isActive={activeMode === VIEW_MODES.EDITOR}
          onClick={() => onModeChange(VIEW_MODES.EDITOR)}
        />

        <TabButton
          label="Preview"
          icon={Eye}
          isActive={activeMode === VIEW_MODES.PREVIEW}
          onClick={() => onModeChange(VIEW_MODES.PREVIEW)}
        />
      </div>
    </div>
  )
}

function TabButton({ label, icon: Icon, isActive, onClick }) {
  const baseStyles =
    'relative flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50'

  // Dark mode specific active/inactive styles
  const activeStyles = 'bg-zinc-800 text-white shadow-lg shadow-black/50 ring-1 ring-white/10'

  const inactiveStyles = 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'

  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
    >
      {/*
        Using the same Blue-400 from the CompileButton for the active icon
        to create visual consistency across the UI.
      */}
      <Icon
        size={16}
        className={`transition-colors ${isActive ? 'text-blue-400' : 'currentColor'}`}
      />
      <span>{label}</span>
    </button>
  )
}
