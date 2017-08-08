import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import DrawShare from '../components/DrawShare.js'
import TypeShare from '../components/TypeShare.js'
import styled from 'styled-components'


class Main extends Component {

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <DrawShare></DrawShare>
          <TypeShare></TypeShare>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main
