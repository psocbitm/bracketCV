import { colors, fontSizes } from '@/constants/constants'
import { StyleSheet } from '@react-pdf/renderer'

export const projectStyles = StyleSheet.create({
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  projectItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  link: {
    textDecoration: 'none',
  },
  description: {
    color: colors.neutral,
  },
  projectName: {
    fontSize: fontSizes.md,
    color: 'blue',
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontStyle: 'italic',
    flexWrap: 'wrap',
    fontSize: fontSizes['2xs'],
  },
  highlightsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    marginLeft: 16,
  },
})
