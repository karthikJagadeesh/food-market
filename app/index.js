import React, { Component } from 'react'
import { render } from 'react-dom'

// Store Picker

class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        <h2 className="store-selector-heading">Please enter a store</h2>
        <input className="store-selector-textbox" type="text" ref="storeID" placeholder="Enter name"/>
        <input className="store-selector-submit" type="submit" value="SUBMIT"/>
      </form>
    )
  }
}

render(<StorePicker />, document.querySelector('#app'))
