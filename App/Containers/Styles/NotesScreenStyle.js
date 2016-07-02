import { StyleSheet } from 'react-native'
import { Colors, Metrics, CommonStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    backgroundColor: Colors.background,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.silver
  },
  rowLabel: {
    fontWeight: 'bold',
    color: Colors.charcoal
  },
  description: {
    color: Colors.coal
  }
})
