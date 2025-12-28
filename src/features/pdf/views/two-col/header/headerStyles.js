import { colors, fontSizes } from '@/constants/constants'
import { StyleSheet } from '@react-pdf/renderer'

export const headerStyles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    fontSize: fontSizes.huge,
  },
  lastName: {},
  designation: {
    fontSize: fontSizes.md,
    color: colors.neutral,
  },
  contactInfosContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    fontSize: fontSizes['xs'],
    flexWrap: 'wrap',
  },
  contactInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
  },
})
