import React, {Component} from 'react'
import {graphqlOperation} from "aws-amplify"
import {Connect} from "aws-amplify-react"

import Candidates from "./Candidates"


const listCandidates = `query ListEvents {
  getCandidates {
    candidateId
    votes
  }        
}`

const voteMutation = `mutation vote($candidateId: ID!) {
	vote (candidateId: $candidateId) {
	  candidateId,
    votes
  }
}`

const voteSubscription = `subscription {
  onUpdateCandidate {
    candidateId,
    votes
  }
}`


export default class Ballot extends Component {

  _voteHandler(candidateId, mutation) {
    mutation({
      "candidateId": candidateId
    })
  }

  _onSubscription(prev, eventData) {
    const newCandidate = eventData.onUpdateCandidate
    const newVotes = newCandidate.votes
    const existingCandidateIndex = prev.getCandidates.findIndex(cand => cand.candidateId === newCandidate.candidateId)

    if (existingCandidateIndex >= 0) {
      const existingCandidate = prev.getCandidates[existingCandidateIndex]
      prev.getCandidates[existingCandidateIndex] = {
        ...existingCandidate,
        votes: newVotes
      }
    } else {
      prev.getCandidates.push({
        candidateId: newCandidate.candidateId,
        votes: newCandidate.votes
      })

    }

    return prev
  }


  render() {
    return <Connect query={graphqlOperation(listCandidates)}
                    subscription={graphqlOperation(voteSubscription)}
                    mutation={graphqlOperation(voteMutation)}
                    onSubscriptionMsg={this._onSubscription}>
      {({data: {getCandidates}, mutation}) => (
        <Candidates votes={getCandidates}
                    voteHandler={(candidateId) => this._voteHandler(candidateId, mutation)}/>
      )}
    </Connect>
  }
}
