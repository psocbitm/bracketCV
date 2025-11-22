'use client'
import React, { createContext, useContext, useRef, useCallback, useState } from 'react'
import { useCompiler } from '@/hooks/use-compiler'
import { INITIAL_STRING } from '@/config/defaults'

const ResumeContext = createContext(null)

export function ResumeProvider({ children }) {
  const { data, compile } = useCompiler()
  const bufferRef = useRef(INITIAL_STRING)

  const [isCompiling, setIsCompiling] = useState(false)
  const [isEditorReady, setIsEditorReady] = useState(false)

  const updateCode = useCallback((newCode) => {
    bufferRef.current = newCode || ''
  }, [])

  const handleEditorReady = useCallback(() => {
    setIsEditorReady(true)
  }, [])

  const triggerCompile = useCallback(async () => {
    if (isCompiling) {
      return
    }

    setIsCompiling(true)

    try {
      await Promise.resolve(compile(bufferRef.current))
    } catch (error) {
      console.error('Compilation failed:', error)
    } finally {
      setTimeout(() => setIsCompiling(false), 500)
    }
  }, [compile, isCompiling])

  const value = {
    pdfData: data,
    updateCode,
    triggerCompile,
    initialCode: INITIAL_STRING,

    isCompiling,
    isEditorReady,
    handleEditorReady,
  }

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider')
  }
  return context
}
