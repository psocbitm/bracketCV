import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import { Link, View } from '@react-pdf/renderer'
import { educationStyles } from './educationStyles'
import { FormattedText } from '@/features/pdf/formatter/formattedText'

export default function EducationItem({ educationData }) {
  return (
    <ShouldDisplay data={educationData}>
      <View style={educationStyles.educationItemContainer}>
        <View style={educationStyles.rowItem}>
          <ShouldDisplay data={educationData.institution}>
            <View style={educationStyles.institution}>
              {educationData.url.display ? (
                <Link src={educationData.url.value}>{educationData.institution.value}</Link>
              ) : (
                <FormattedText>{educationData.institution.value}</FormattedText>
              )}
            </View>
          </ShouldDisplay>
        </View>
        <ShouldDisplay data={educationData.stream}>
          <FormattedText style={educationStyles.stream}>{educationData.stream.value}</FormattedText>
        </ShouldDisplay>
        <View style={educationStyles.rowItem}>
          <ShouldDisplay data={educationData.score}>
            <FormattedText style={educationStyles.score}>{educationData.score.value}</FormattedText>
          </ShouldDisplay>
          <ShouldDisplay data={educationData.startDate}>
            <FormattedText
              style={educationStyles.date}
            >{`${educationData.startDate.value} — ${educationData.endDate.value ?? 'Present'}`}</FormattedText>
          </ShouldDisplay>
        </View>
        <ShouldDisplay data={educationData.relevantCoursework}>
          <FormattedText style={educationStyles.relevantCoursework}>
            {educationData.relevantCoursework.value}
          </FormattedText>
        </ShouldDisplay>
      </View>
    </ShouldDisplay>
  )
}
