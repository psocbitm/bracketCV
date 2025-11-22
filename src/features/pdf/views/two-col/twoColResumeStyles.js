import { fontSizes } from '@/constants/constants'
import { StyleSheet } from '@react-pdf/renderer'

export const twoColResumeStyles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: fontSizes.xs,
    fontFamily: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  leftContainer: {
    flex: '40',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  rightContainer: {
    flex: '60',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
})
