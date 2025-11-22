import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import Section from '../section/section'
import { View } from '@react-pdf/renderer'
import ExperienceItem from './experienceItem'
import { experienceStyles } from './experienceStyles'

export default function Experience({ experiencesData }) {
  return (
    <ShouldDisplay data={experiencesData}>
      <Section title={'Work Experience'}>
        <View style={experienceStyles.experiencesContainer}>
          {experiencesData.value
            ?.filter((experienceData) => experienceData.display === true)
            ?.map((experienceData, index) => (
              <ExperienceItem key={index} experienceData={experienceData} />
            ))}
        </View>
      </Section>
    </ShouldDisplay>
  )
}
