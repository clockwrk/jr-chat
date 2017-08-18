import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class InputBar extends Component {

  render(){
    return (

        <div>
          <RaisedButton>Submit</RaisedButton>
          <TextField></TextField>
        </div>

    )
  }
}

export default InputBar
