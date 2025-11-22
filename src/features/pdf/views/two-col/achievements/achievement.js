import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import Section from '../section/section'
import { View } from '@react-pdf/renderer'
import { achievementStyles } from './achievementStyles'
import { FormattedText } from '@/features/pdf/formatter/formattedText'

export default function Achievements({ achievementsData }) {
  return (
    <ShouldDisplay data={achievementsData}>
      <Section title={'Achievements'}>
        <View style={achievementStyles.achievementsContainer}>
          {achievementsData.value.map((achievement, index) => (
            <FormattedText key={index}>{`• ${achievement}`}</FormattedText>
          ))}
        </View>
      </Section>
    </ShouldDisplay>
  )
}
