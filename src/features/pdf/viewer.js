'use client'
import React, { memo } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import TwoColResume from './views/two-col/twoColResume'
import { registerFonts } from './fontRegister'

registerFonts()

const PdfView = ({ data }) => {
  const renderKey = JSON.stringify(data)

  return (
    <PDFViewer
      key={renderKey}
      width="100%"
      height="100%"
      style={{ border: 'none', fontFamily: 'Noto Sans' }}
      showToolbar={true}
    >
      <TwoColResume data={data} />
    </PDFViewer>
  )
}

export default memo(
  PdfView,
  (prev, next) => JSON.stringify(prev.data) === JSON.stringify(next.data)
)
