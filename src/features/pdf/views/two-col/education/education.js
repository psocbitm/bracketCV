import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import Section from '../section/section'
import { View } from '@react-pdf/renderer'
import EducationItem from './educationItem'
import { educationStyles } from './educationStyles'

export default function Education({ educationData }) {
  return (
    <ShouldDisplay data={educationData}>
      <Section title={'Education'}>
        <View style={educationStyles.educationsContainer}>
          {educationData.value?.map((education, index) => (
            <EducationItem key={index} educationData={education} />
          ))}
        </View>
      </Section>
    </ShouldDisplay>
  )
}
