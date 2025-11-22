import React, { useMemo } from 'react'
import { Text } from '@react-pdf/renderer'

const TAG_RE = /<\/?(?:b|i|u)>/gi

const parseStyledText = (text) => {
  const txt = String(text || '')

  if (!txt) {
    return []
  }

  const segments = []
  let match
  let lastIndex = 0

  let b = 0
  let i = 0
  let u = 0

  TAG_RE.lastIndex = 0

  while ((match = TAG_RE.exec(txt)) !== null) {
    const index = match.index

    if (index > lastIndex) {
      segments.push({
        text: txt.substring(lastIndex, index),
        b,
        i,
        u,
      })
    }

    const tag = match[0]
    const isClosing = tag.charCodeAt(1) === 47
    const charCode = tag.charCodeAt(isClosing ? 2 : 1)

    if (charCode === 98) {
      b = isClosing ? 0 : 1
    } else if (charCode === 105) {
      i = isClosing ? 0 : 1
    } else if (charCode === 117) {
      u = isClosing ? 0 : 1
    }

    lastIndex = TAG_RE.lastIndex
  }

  if (lastIndex < txt.length) {
    segments.push({
      text: txt.substring(lastIndex),
      b,
      i,
      u,
    })
  }

  return segments
}

export const FormattedText = React.memo(({ children, style }) => {
  const parts = useMemo(() => parseStyledText(children), [children])

  return (
    <Text style={style}>
      {parts.map((part, index) => (
        <Text
          key={index}
          style={{
            fontWeight: part.b ? '600' : '300',
            fontStyle: part.i ? 'italic' : 'normal',
            textDecoration: part.u ? 'underline' : 'none',
          }}
        >
          {part.text}
        </Text>
      ))}
    </Text>
  )
})

FormattedText.displayName = 'FormattedText'
