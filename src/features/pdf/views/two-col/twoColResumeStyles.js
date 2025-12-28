import { fontSizes } from '@/constants/constants'
import { StyleSheet } from '@react-pdf/renderer'

export const twoColResumeStyles = StyleSheet.create({
  page: {
    padding: '0.5in',
    fontSize: fontSizes.xs,
    fontFamily: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5in',
  },
  leftContainer: {
    flex: '40',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  rightContainer: {
    flex: '60',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
})
