import { fontSizes } from '@/constants/constants'
import { StyleSheet } from '@react-pdf/renderer'

export const sectionStyles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  sectionText: {
    textTransform: 'uppercase',
    borderBottom: 1,
    borderBottomColor: 'black',
    fontSize: fontSizes.md,
  },
})
