import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import { Link, View } from '@react-pdf/renderer'
import { experienceStyles } from './experienceStyles'
import LinkIcon from '@/icons/Link'
import { FormattedText } from '@/features/pdf/formatter/formattedText'

export default function ExperienceItem({ experienceData }) {
  return (
    <ShouldDisplay data={experienceData}>
      <View style={experienceStyles.experienceItemContainer}>
        <View style={experienceStyles.rowItem}>
          <ShouldDisplay data={experienceData.name}>
            <View style={experienceStyles.nameContainer}>
              {experienceData.url.display ? (
                <View style={experienceStyles.linkContainer}>
                  <Link style={experienceStyles.link} src={experienceData.url.value}>
                    {experienceData.name.value}
                  </Link>
                  <LinkIcon />
                </View>
              ) : (
                <FormattedText>{experienceData.name.value}</FormattedText>
              )}
            </View>
          </ShouldDisplay>
          <ShouldDisplay data={experienceData.startDate}>
            <FormattedText
              style={experienceStyles.date}
            >{`${experienceData.startDate.value} — ${experienceData.endDate.value ?? 'Present'}`}</FormattedText>
          </ShouldDisplay>
        </View>
        <View style={experienceStyles.rowItem}>
          <ShouldDisplay data={experienceData.position}>
            <FormattedText>{experienceData.position.value}</FormattedText>
          </ShouldDisplay>
          <ShouldDisplay data={experienceData.location}>
            <FormattedText style={experienceStyles.location}>
              {experienceData.location.value}
            </FormattedText>
          </ShouldDisplay>
        </View>
        <ShouldDisplay
          data={
            experienceData.highlights &&
            experienceData.highlights.value.filter((highlight) => highlight.display === true)
              .length > 0
          }
        >
          <View style={experienceStyles.highlightsContainer}>
            {experienceData.highlights.value.map((highlight, index) => (
              <FormattedText key={index}>{`• ${highlight.value}`}</FormattedText>
            ))}
          </View>
        </ShouldDisplay>
      </View>
    </ShouldDisplay>
  )
}
