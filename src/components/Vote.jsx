import React, {Component} from 'react'

export default class Vote extends Component {

  constructor(props) {
    super(props)
    this.state = props
  }

  static getDerivedStateFromProps(props, state) {
    if (props != null &&
      Math.max(props.votes, state.votes) > state.votes) {
      return props
    } else {
      return null
    }
  }

  vote() {
    const {
      candidateId,
      voteHandler
    } = this.props

    this.setState({
      ...this.state,
      votes: this.state.votes + 1
    })

    voteHandler(candidateId)
  }

  render() {
    const {
      emoji,
      caption,
      votes,
    } = this.state

    return <div className="vote" onClick={() => this.vote()}>
      <h2>{emoji}</h2>
      <p>{caption}</p>
      <p>Votes: {votes} </p>
    </div>
  }
}
