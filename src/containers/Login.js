import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends Component {

  render(){
    return (
      <MuiThemeProvider>
        <div >
          <div ref="facebook"></div>
          <div ref="twitter"></div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Profile
