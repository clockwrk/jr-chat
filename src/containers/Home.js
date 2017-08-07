import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

class Home extends Component {

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <h2>Home!</h2>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Home
