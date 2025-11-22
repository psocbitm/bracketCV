'use client'
import React, { useEffect, useState, useMemo, useRef } from 'react'
import { pdf } from '@react-pdf/renderer'
import TwoColResume from './views/two-col/twoColResume'
import { registerFonts } from './fontRegister'
import { Loader2, FileText } from 'lucide-react'

registerFonts()

const PdfView = ({ data }) => {
  const [pdfUrl, setPdfUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const urlRef = useRef(null) // track current blob URL safely

  const document = useMemo(() => <TwoColResume data={data} />, [data])

  const isMobile =
    typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  useEffect(() => {
    let active = true
    const generatePdf = async () => {
      setLoading(true)
      setError(null)

      try {
        const blob = await pdf(document).toBlob()
        if (!active) return
        const url = URL.createObjectURL(blob)

        // cleanup previous URL
        if (urlRef.current) URL.revokeObjectURL(urlRef.current)
        urlRef.current = url
        setPdfUrl(url)
        setLoading(false)

        if (isMobile) {
          window.open(url, '_blank')
        }
      } catch (err) {
        if (!active) return
        setError(err)
        setLoading(false)
      }
    }

    generatePdf()

    return () => {
      active = false
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    }
  }, [document, isMobile]) // pdfUrl is no longer needed here

  if (isMobile) {
    return (
      <div className="p-4 flex justify-center">
        <button
          onClick={() =>
            pdf(document)
              .toBlob()
              .then((blob) => window.open(URL.createObjectURL(blob)))
          }
          disabled={loading}
          className={`
            group relative flex items-center gap-2
            h-9 px-4 rounded-md
            text-sm font-medium
            transition-all duration-200 ease-in-out
            border
            ${
              loading
                ? 'bg-zinc-900/50 border-zinc-800 text-zinc-500 cursor-not-allowed'
                : 'bg-[#0A0A0A] hover:bg-zinc-900 border-white/1 hover:border-white/2 text-zinc-200 hover:text-white cursor-pointer shadow-sm'
            }
          `}
        >
          <div className="relative flex items-center justify-center w-4 h-4">
            {loading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-zinc-500" />
            ) : (
              <FileText
                className="w-3.5 h-3.5 text-blue-400 transition-colors group-hover:text-blue-300 group-hover:fill-blue-400/10"
                strokeWidth={2}
              />
            )}
          </div>
          <span>{loading ? 'Opening...' : 'Open PDF'}</span>
        </button>
      </div>
    )
  }

  if (loading) return <div className="p-8 text-sm text-gray-400">Generating PDF...</div>
  if (error) return <div className="p-8 text-sm text-red-500">Error generating PDF</div>

  return (
    <iframe
      src={pdfUrl}
      width="100%"
      height="100%"
      className="border-none"
      title="Resume Preview"
    />
  )
}

export default PdfView
