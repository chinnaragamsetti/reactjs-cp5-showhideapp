// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstname: true, lastname: true}

  onFirstname = () => {
    this.setState(prevState => ({firstname: !prevState.firstname}))
  }

  onLastname = () => {
    this.setState(prevState => ({lastname: !prevState.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state

    return (
      <div className="maincontainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="subcontainer">
          <div className="eachcontainer">
            <button className="button" type="button" onClick={this.onFirstname}>
              Show/Hide Firstname
            </button>
            {firstname && <p className="para">Joe</p>}
          </div>

          <div className="eachcontainer">
            <button className="button" type="button" onClick={this.onLastname}>
              Show/Hide Lastname
            </button>
            {lastname && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
