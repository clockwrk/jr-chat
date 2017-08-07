import React, {Component} from 'react'

import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

class ShareView extends Component {

  render(){
    return (

        <div>
          <RaisedButton ref="facebook" >FACEBOOK</RaisedButton>
          <RaisedButton ref="twitter" >TWITTER</RaisedButton>
          <RaisedButton ref="download" >DOWNLOAD</RaisedButton>
          <RaisedButton ref="back" >BACK</RaisedButton>
        </div>

    )
  }
}

export default ShareView
