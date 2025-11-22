import { fontSizes } from '@/constants/constants'
import { StyleSheet } from '@react-pdf/renderer'

export const educationStyles = StyleSheet.create({
  educationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  educationItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    fontSize: fontSizes.xs,
  },
  institution: {
    fontSize: fontSizes.md,
    color: 'blue',
  },
  date: {},
  stream: {},
  score: {
    fontSize: fontSizes['2xs'],
  },
  rowItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  relevantCoursework: {
    fontSize: fontSizes['2xs'],
  },
})
