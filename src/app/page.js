'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useResume, ResumeProvider } from '@/context/resumeContext'
import Layout from '@/components/layout/split-layout'
import CompileButton from '@/components/compileButton'
import GlobalErrorBoundary from '@/components/global-error-boundary'
import CrashError from '@/components/crash-error'

const EditorModule = dynamic(() => import('@/features/editor'), {
  ssr: false,
  loading: () => <div className="p-8 text-sm text-gray-400">Loading Editor...</div>,
})

const PdfModule = dynamic(() => import('@/features/pdf/viewer'), {
  ssr: false,
  loading: () => <div className="p-8 text-sm text-gray-400">Loading PDF Engine...</div>,
})

function ResumeWorkspace() {
  const { pdfData, updateCode, initialCode, compilerError, triggerCompile } = useResume()

  const left = (
    <section className="flex flex-col h-full relative border-r border-gray-200">
      <div className="flex-1 relative">
        <EditorModule
          initialValue={initialCode}
          onChange={(val) => {
            updateCode(val)
          }}
        />
        <div className="absolute bottom-6 right-6 z-20">
          <CompileButton />
        </div>
      </div>
    </section>
  )

  const right = (
    <div className="h-full w-full flex items-center justify-center relative bg-gray-100/50 overflow-hidden">
      {compilerError ? (
        <CrashError
          error={compilerError}
          resetType="soft"
          onReset={() => {
            triggerCompile()
          }}
        />
      ) : (
        <GlobalErrorBoundary fallback={(err) => <CrashError error={err} resetType="hard" />}>
          <PdfModule data={pdfData} />
        </GlobalErrorBoundary>
      )}
    </div>
  )

  return <Layout left={left} right={right} />
}

export default function Page() {
  return (
    <ResumeProvider>
      <ResumeWorkspace />
    </ResumeProvider>
  )
}
