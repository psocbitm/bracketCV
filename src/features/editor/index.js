'use client'

import React from 'react'
import Editor from '@monaco-editor/react'
import { useResume } from '@/context/resumeContext'
import { createModernMinimalTheme, modernMinimalOptions } from './editorConfig'

export default function EditorView({ initialValue, onChange }) {
  const { handleEditorReady } = useResume()

  return (
    <Editor
      height="100%"
      defaultLanguage="json"
      defaultValue={initialValue}
      onChange={onChange}
      theme="modern-minimal"
      onMount={(editor, monaco) => {
        handleEditorReady()
        createModernMinimalTheme(monaco)
        monaco.editor.setTheme('modern-minimal')
      }}
      options={modernMinimalOptions}
      loading="Loading Editor..."
    />
  )
}
