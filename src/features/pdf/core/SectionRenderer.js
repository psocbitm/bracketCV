import React from 'react'
import { View } from '@react-pdf/renderer'
import { resumeRegistry } from './resumeRegistry'

const SectionRenderer = ({ sectionIds, data, style }) => {
  if (!sectionIds || sectionIds.length === 0) {
    return null
  }

  return (
    <View style={style}>
      {sectionIds.map((sectionId) => {
        const config = resumeRegistry[sectionId]

        if (!config) {
          return null
        }
        if (!config.isVisible(data)) {
          return null
        }

        const Component = config.component
        const props = config.getProps(data)

        return <Component key={sectionId} {...props} />
      })}
    </View>
  )
}

export default SectionRenderer
