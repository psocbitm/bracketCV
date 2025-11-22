import { StyleSheet } from '@react-pdf/renderer'

export const skillsStyles = StyleSheet.create({
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  skillItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  skillTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  skillTitle: {
    flex: 30,
  },
  keywords: {
    flex: 70,
  },
  skills: {
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontStyle: 'italic',
  },
})
