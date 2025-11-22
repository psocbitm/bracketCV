'use client'

import { useState } from 'react'
import Navbar from '../navbar'
import MobileTabs from './mobile-tabs'
import Panel from './panel'
import { VIEW_MODES } from './constants'

export default function SplitLayout({ left, right }) {
  const [activeMode, setActiveMode] = useState(VIEW_MODES.EDITOR)

  return (
    <div className="flex flex-col h-dvh w-full bg-zinc-900 bg-linear-to-bl from-zinc-800 via-zinc-900 to-zinc-950">
      <header className="z-50 relative">
        <Navbar />
      </header>

      <div>
        <MobileTabs activeMode={activeMode} onModeChange={setActiveMode} />
      </div>

      <main className="flex flex-1 overflow-hidden relative items-stretch z-10">
        <Panel isVisibleOnMobile={activeMode === VIEW_MODES.EDITOR}>
          <div className="h-full w-full backdrop-blur-md">{left}</div>
        </Panel>
        <Panel isVisibleOnMobile={activeMode === VIEW_MODES.PREVIEW}>
          <div className="h-full w-full backdrop-blur-md">{right}</div>
        </Panel>
      </main>
    </div>
  )
}
