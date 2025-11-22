import { useResume } from '@/context/resumeContext'
import { Zap, Loader2 } from 'lucide-react'

export default function CompileButton() {
  const { triggerCompile, isCompiling, isEditorReady } = useResume()

  if (!isEditorReady) {
    return null
  }

  return (
    <button
      onClick={triggerCompile}
      disabled={isCompiling}
      className={`
        group relative flex items-center gap-2
        h-9 px-4 rounded-md
        text-sm font-medium
        transition-all duration-200 ease-in-out
        border
        ${
          isCompiling
            ? 'bg-zinc-900/50 border-zinc-800 text-zinc-500 cursor-not-allowed'
            : 'bg-[#0A0A0A] hover:bg-zinc-900 border-white/1 hover:border-white/2 text-zinc-200 hover:text-white cursor-pointer shadow-sm'
        }
      `}
    >
      <div className="relative flex items-center justify-center w-4 h-4">
        {isCompiling ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-zinc-500" />
        ) : (
          <Zap
            className="w-3.5 h-3.5 text-blue-400 transition-colors group-hover:text-blue-300 group-hover:fill-blue-400/10"
            strokeWidth={2}
          />
        )}
      </div>

      <span>{isCompiling ? 'Compiling' : 'Compile'}</span>
    </button>
  )
}
