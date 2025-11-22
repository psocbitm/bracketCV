import { colors, fontSizes } from '@/constants/constants'
import { StyleSheet } from '@react-pdf/renderer'

export const headerStyles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
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
    gap: 3,
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
