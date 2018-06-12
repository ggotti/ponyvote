import Amplify from 'aws-amplify'
import React, {Component} from 'react'

import aws_exports from './aws-exports'
import CandidatesConnected from './components/Candidates.connected'

import './App.css'

Amplify.configure(aws_exports)

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="ballot">
          <h1>What's your favourite kind of Pony?</h1>
          <CandidatesConnected />
        </div>
      </div>
    )
  }
}

export default App
