import React, { Component } from 'react';


export default class ChatMessage extends Component {

    static defaultProps = {
        onAdd: () => null
    }

    handleOnAdd() {
        this.props.onAdd({
            text: "OH YEAH",
            username: "BOB",
            timestamp: (new Date()).toISOString()
        })
    }

    render(){
        return <button onClick={e => this.handleOnAdd(e)}>SUPER PONY</button>
    }
}
