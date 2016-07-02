import { Transitions } from '../Themes/'

// I18n
import I18n from '../I18n/I18n.js'

export default new class Routes {

  // Here are the "Containers" in our app (e.g. Screens).
  //
  // These routes are implemented as getter functions
  // because I like the simple calling notation, but
  // they're lazily evaluated to prevent recursion
  // when the screens themselves use this Routes file.

  get IntroScreen () {
    return {
      title: '',
      component: require('../Containers/IntroScreen').default,
      hideNavbar: true
    }
  }

  get NotesScreen () {
    return {
      title: I18n.t('notes'),
      component: require('../Containers/NotesScreen').default,
      leftButton: 'HAMBURGER',
      rightButton: 'CREATE'
    }
  }

  get LoginScreen () {
    return {
      title: I18n.t('login'),
      component: require('../Containers/LoginScreen').default,
      customConfiguration: Transitions.modal,
      leftButton: 'BACK'
    }
  }

  ShowNoteScreen (data) {
    return {
      title: data.tittle,
      component: require('../Containers/ShowNoteScreen').default,
      leftButton: 'BACK',
      passProps: {
        id: data.id
      }
    }
  }

}
