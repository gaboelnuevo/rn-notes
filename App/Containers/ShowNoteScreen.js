import React, {PropTypes} from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import { Notes } from '../Fixtures'
import RoundedButton from '../Components/RoundedButton'
//import I18n from '../I18n/I18n.js'

import { Alert } from 'react-native'

// Styles
import styles from './Styles/ShowNoteScreenStyle'

export default class ShowNoteScreen extends React.Component {

  static propTypes = {
    passProps: PropTypes.object.isRequired
  }

  constructor(props){
    super(props)
  }

  componentWillMount () {
    this.setState(
      {
        isLoading: true
      },
      function () {
        this.loadNote(this.props.passProps.id);
      }
    );
  }

  loadNote (id) {
    var _ = require('lodash');
    var data = _.find(Notes, function(n) { return n.id == id; });
    this.setState({
      data: data,
      isLoading: false
    });
  }

  renderNote(data){
    return (
      <View>
        <View style={styles.tittleContainer}>
          <Text style={styles.tittle}>{data.tittle}</Text>
        </View>
        <Text style={styles.content}>{data.content}</Text>
      </View>
    )
  }

  render () {
    if(this.state.isLoading){
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        {this.renderNote(this.state.data)}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ShowNoteScreen)
