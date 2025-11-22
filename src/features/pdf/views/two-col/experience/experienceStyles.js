import { fontSizes } from '@/constants/constants'
import { StyleSheet } from '@react-pdf/renderer'

export const experienceStyles = StyleSheet.create({
  experiencesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  experienceItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  nameContainer: {
    fontSize: fontSizes.md,
    color: 'blue',
  },
  highlightsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    marginLeft: 16,
  },
  rowItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
})
