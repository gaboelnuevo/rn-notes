import React, {PropTypes} from 'react'
import { ScrollView, ListView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import { Notes } from '../Fixtures'
import RoundedButton from '../Components/RoundedButton'
//import I18n from '../I18n/I18n.js'

import { Alert } from 'react-native'

// Styles
import styles from './Styles/NotesScreenStyle'

export default class NotesScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
       dataSource: ds.cloneWithRows(Notes)
    }
    this.renderRow = this.renderRow.bind(this);
    this.tapRow = this.tapRow.bind(this);
  }

  tapCreate () {
    Alert.alert('Create Notes')
  }

  tapRow (rowData) {
    const { navigator } = this.props
    const route = Routes.ShowNoteScreen({
      tittle: rowData.tittle,
      id: rowData.id
    })
    navigator.push(route)
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
    // Configure the right nav button
    this.props.navigator.state.tapCreate = this.tapCreate.bind(this)
  }

  renderRow(rowData){
    return (
      <TouchableOpacity onPress={() => this.tapRow(rowData)}>
        <View style={styles.row}>
          <Text style={styles.rowLabel} numberOfLines={1} >{rowData.tittle}</Text>
          <Text style={styles.description} numberOfLines={1}>{rowData.content}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <ListView dataSource={this.state.dataSource}  renderRow={this.renderRow} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(NotesScreen)
