import { StyleSheet } from 'react-native'
import { Colors, Metrics, CommonStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
    padding: 20
  },
  tittleContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.charcoal,
    marginBottom: 6,
    paddingBottom: 2
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.charcoal,
  },
  content: {
    textAlign: 'justify',
    color: Colors.coal
  }
})
