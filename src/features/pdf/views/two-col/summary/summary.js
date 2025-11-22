import Section from '../section/section'
import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import { summaryStyles } from './summaryStyles'
import { FormattedText } from '@/features/pdf/formatter/formattedText'

export default function Summary({ summaryData }) {
  return (
    <ShouldDisplay data={summaryData}>
      <Section title={'Summary'}>
        <FormattedText style={summaryStyles.summaryText}>{summaryData.value}</FormattedText>
      </Section>
    </ShouldDisplay>
  )
}
