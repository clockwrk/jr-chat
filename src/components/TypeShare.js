import React, {Component} from 'react'
import InputBar from './InputBar.js'

class TypeShare extends Component {

  render(){
    return (
        <div>
          <div ref="chatBox"></div>
          <InputBar></InputBar>
        </div>
    )
  }
}

export default TypeShare
