import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class InputBar extends Component {

  render(){
    return (
        <div>
          <RaisedButton>Share</RaisedButton>
          <RaisedButton>Color</RaisedButton>
          <RaisedButton>Clear</RaisedButton>
        </div>
    )
  }
}

export default InputBar
