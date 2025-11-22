import React from 'react'
import { AlertTriangle, RefreshCcw, Trash2 } from 'lucide-react'

export default function CrashError({ error, resetType, onReset }) {
  const isSyntaxError = error?.name === 'SyntaxError'

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-red-50/30 p-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="bg-white p-4 rounded-full shadow-xl shadow-red-100 mb-6 ring-1 ring-red-50">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
        {isSyntaxError ? 'Invalid JSON Format' : 'Rendering Failed'}
      </h2>

      <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
        {isSyntaxError
          ? "There's a syntax error in your code. Check for missing commas or brackets."
          : "The data structure doesn't match what the resume template expects."}
      </p>

      <div className="w-full max-w-md bg-red-100/50 rounded-lg p-3 mb-6 overflow-hidden">
        <code className="text-xs text-red-800 font-mono break-all whitespace-pre-wrap line-clamp-4">
          {error?.message || 'Unknown error'}
        </code>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {resetType === 'soft' ? (
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all active:scale-95"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Compiling Again
          </button>
        ) : (
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all active:scale-95 shadow-lg shadow-red-200"
          >
            <Trash2 className="w-4 h-4" />
            Reset Workspace
          </button>
        )}
      </div>
    </div>
  )
}
