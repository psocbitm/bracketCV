import React from 'react'
import { Document, Page, View } from '@react-pdf/renderer'
import { twoColResumeStyles } from './twoColResumeStyles'
import SectionRenderer from '../../core/SectionRenderer'
import { SECTION_KEYS } from '../../core/resumeRegistry'

const TwoColResume = ({ data, layout }) => {
  const activeLayout = layout || {
    header: SECTION_KEYS.HEADER,
    columns: [
      {
        id: 'left-col',
        style: twoColResumeStyles.leftContainer,
        sections: [SECTION_KEYS.SUMMARY, SECTION_KEYS.EDUCATION, SECTION_KEYS.PROJECTS],
      },
      {
        id: 'right-col',
        style: twoColResumeStyles.rightContainer,
        sections: [SECTION_KEYS.WORK, SECTION_KEYS.SKILLS, SECTION_KEYS.ACHIEVEMENTS],
      },
    ],
  }

  return (
    <Document title="Resume" author="User">
      <Page size="A4" style={twoColResumeStyles.page}>
        <SectionRenderer sectionIds={[activeLayout.header]} data={data} />

        <View style={twoColResumeStyles.mainContainer}>
          {activeLayout.columns.map((column, index) => (
            <SectionRenderer
              key={column.id || index}
              style={column.style}
              sectionIds={column.sections}
              data={data}
            />
          ))}
        </View>
      </Page>
    </Document>
  )
}

export default TwoColResume
