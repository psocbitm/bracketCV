import { ShouldDisplay } from '@/features/pdf/shouldDisplay'
import Section from '../section/section'
import { View } from '@react-pdf/renderer'
import ProjectItem from './projectItem'
import { projectStyles } from './projectStyles'

export default function Project({ projectsData }) {
  return (
    <ShouldDisplay data={projectsData}>
      <Section title={'Projects'}>
        <View style={projectStyles.projectsContainer}>
          {projectsData.value?.map((projectData, index) => (
            <ProjectItem key={index} projectData={projectData} />
          ))}
        </View>
      </Section>
    </ShouldDisplay>
  )
}
