import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import { Link, View } from '@react-pdf/renderer'
import { projectStyles } from './projectStyles'
import LinkIcon from '@/icons/Link'
import { FormattedText } from '@/features/pdf/formatter/formattedText'

export default function ProjectItem({ projectData }) {
  return (
    <ShouldDisplay data={projectData}>
      <View style={projectStyles.projectItemContainer}>
        <ShouldDisplay data={projectData.name}>
          <View style={projectStyles.projectName}>
            {projectData.url.display ? (
              <View style={projectStyles.linkContainer}>
                <Link style={projectStyles.link} src={projectData.url.value}>
                  {projectData.name.value}
                </Link>
                {projectData.url.value && <LinkIcon />}
              </View>
            ) : (
              <FormattedText>{projectData.name.value}</FormattedText>
            )}
          </View>
        </ShouldDisplay>
        <ShouldDisplay data={projectData.description}>
          <FormattedText style={projectStyles.description}>
            {projectData.description.value}
          </FormattedText>
        </ShouldDisplay>
        <ShouldDisplay data={projectData.skills}>
          <FormattedText>{projectData.skills.value}</FormattedText>
        </ShouldDisplay>
        <ShouldDisplay
          data={
            projectData.highlights &&
            projectData.highlights.value.filter((highlight) => highlight.display === true).length >
              0
          }
        >
          <View style={projectStyles.highlightsContainer}>
            {projectData.highlights.value.map((highlight, index) => (
              <FormattedText key={index}>{`• ${highlight.value}`}</FormattedText>
            ))}
          </View>
        </ShouldDisplay>
      </View>
    </ShouldDisplay>
  )
}
