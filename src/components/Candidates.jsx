import React, {Component} from 'react'
import Vote from "./Vote"
import Loader from "./Loader"

const FIXED_CANDIDATES = [
  {
    candidateId: 'carnival',
    emoji: "🎠",
    caption: "Carnival Pony"
  },
  {
    candidateId: 'racing',
    emoji: "🏇",
    caption: "Racing Pony"
  },
  {
    candidateId: 'close',
    emoji: "🎠",
    caption: "Close Up"
  },
  {
    candidateId: 'unicorn',
    emoji: "🦄",
    caption: "Unicorn Pony"
  }
]

export default class Candidates extends Component {

  candidatedRender(candidate, votes, voteHandler) {
    const {
      candidateId,
      emoji,
      caption
    } = candidate
    const calculatedVotesObj = votes.find(vote => vote.candidateId === candidateId)
    const calculatedVotes = calculatedVotesObj ? calculatedVotesObj.votes : 0

    return <Vote key={candidateId}
                 candidateId={candidateId}
                 emoji={emoji}
                 caption={caption}
                 votes={calculatedVotes}
                 voteHandler={voteHandler}/>
  }

  renderCandidates(votes, voteHandler) {
    return <div className="vote-options">
      {FIXED_CANDIDATES.map(candidate => this.candidatedRender(candidate, votes, voteHandler))}
    </div>
  }

  render() {
    const {
      votes,
      voteHandler
    } = this.props

    return <div>
      {votes &&
        this.renderCandidates(votes, voteHandler)
      }
      {!votes &&
        <Loader/>
      }
    </div>
  }
}
