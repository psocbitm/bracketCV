import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import Section from '../section/section'
import { View } from '@react-pdf/renderer'
import SkillItem from './skillItem'
import { skillsStyles } from './skillsStyles'

export default function Skills({ skillsData }) {
  return (
    <ShouldDisplay data={skillsData}>
      <Section title={'Skills'}>
        <View style={skillsStyles.skillsContainer}>
          {skillsData.value?.map((skill, index) => (
            <SkillItem key={index} skillData={skill} />
          ))}
        </View>
      </Section>
    </ShouldDisplay>
  )
}
