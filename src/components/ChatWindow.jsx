import React, { Component } from 'react';

class Message extends Component {

    render() {
        const {
            text,
            username,
            timestamp
        } = this.props.message;


        return <div className="message">
            <div className="iconWrapper">
                <div className="icon">{username.substring(0,1)}</div>
            </div>
            <div className="textWrapper">
                <p className="user">{username}</p>
                <p className="text">{text}</p>
            </div>
        </div>
    }
}

export default class ChatWindow extends Component {


    static defaultProps = {
    }

    componentWillMount(){
        this.props.subscribeToNewMessages();
    }

    componentWillUpdate() {
        console.log("Will update?");
    }

    render(){
        const {allMessages} = this.props;

        console.log("Props for the ChatWindow: " , this.props);

        console.log("SUPER WINDOW");
        return <div className="chatWindow">
            {allMessages.map((message, i) => {
                return <Message message={message} key={i} />;
            })}
        </div>
    }
}
