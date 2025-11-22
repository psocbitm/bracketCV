import { View } from '@react-pdf/renderer'
import { sectionStyles } from './sectionStyles'
import { FormattedText } from '@/features/pdf/formatter/formattedText'

export default function Section({ children, title }) {
  return (
    <View style={sectionStyles.sectionContainer}>
      <FormattedText style={sectionStyles.sectionText}>{title}</FormattedText>
      <View>{children}</View>
    </View>
  )
}
