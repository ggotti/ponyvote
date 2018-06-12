import React, {Component} from 'react'

export default class Vote extends Component {

  constructor(props) {
    super(props)
    this.state = props
  }

  /**
   * I've used this function to copy values from the supplied props into the state object
   * due to the lack of optimisticResponse in AWS Amplify. See <a href="https://github.com/aws/aws-amplify/issues/949">
   *   here</a> for details.
   * @param props
   * @param state
   * @return {*}
   */
  static getDerivedStateFromProps(props, state) {
    const isStateVotesHigherThanPropVotes = Math.max(props.votes, state.votes) <= state.votes
    if (props == null || isStateVotesHigherThanPropVotes) {
      return null
    }
    return props
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
