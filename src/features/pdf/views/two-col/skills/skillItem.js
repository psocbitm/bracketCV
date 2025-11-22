import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import { View } from '@react-pdf/renderer'
import { skillsStyles } from './skillsStyles'
import { FormattedText } from '@/features/pdf/formatter/formattedText'

export default function SkillItem({ skillData }) {
  return (
    <ShouldDisplay data={skillData}>
      <View style={skillsStyles.skillItemContainer}>
        <ShouldDisplay data={skillData.name}>
          <View style={skillsStyles.skillTitleContainer}>
            <FormattedText style={skillsStyles.skillTitle}>{skillData.name.value}</FormattedText>
            <FormattedText style={skillsStyles.keywords}>{skillData.keywords.value}</FormattedText>
          </View>
        </ShouldDisplay>
      </View>
    </ShouldDisplay>
  )
}
