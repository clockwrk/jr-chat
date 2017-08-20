import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

class Profile extends Component {

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <h2>Profile!</h2>
        </div>
        
      </MuiThemeProvider>
    )
  }
}

export default Profile
