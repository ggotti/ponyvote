import React, { Component } from 'react';
import logo from './logo.svg';
import * as AWS from 'aws-sdk';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { graphql, ApolloProvider, compose } from 'react-apollo';
import awsconfig from './aws-exports';
import { v4 as uuid } from "uuid";

import ChatMessage from './components/ChatMessage';
import ChatWindow from './components/ChatWindow';

import AddMessage from './mutations/AddMessage';
import AllMessages from './queries/AllMessages';
import SubscribeToMessages from './subscriptions/SubscribeToMessages';


import './App.css';

AWS.config.update({
  region: awsconfig.REGION
});

const client = new AWSAppSyncClient({
  url: awsconfig.ENDPOINT,
  region: awsconfig.REGION,
  auth: {
    type: awsconfig.AUTH_TYPE,
    apiKey: awsconfig.API_KEY
  }
});


class App extends Component {

  render() {
    return (
      <div className="App">
        <ChatWindowSync />
        <ChatAppSync />
      </div>
    );
  }
}

const ChatWindowSync = compose(
  graphql(
    AllMessages,
    {
        options: {
            fetchPolicy: 'cache-and-network',
        },
        props: (props) => {
          console.log("All messages props", props);
        return {
          allMessages: (props.data.allMessages) ? props.data.allMessages.items : [],
          subscribeToNewMessages: params => {
            props.data.subscribeToMore({
                document: SubscribeToMessages,
                updateQuery: (prev, { subscriptionData: { data : { subscribeToMessages } } }) => {

                  console.log("Previous", prev);
                  console.log("Suscbribed: ", subscribeToMessages);
                  // console.log("Response", resp);

                  const response = {
                    ...prev,
                    ... {
                      allMessages: {
                        ...prev.allMessages,
                        items: [subscribeToMessages, ...prev.allMessages.items.filter(message => message.id !== subscribeToMessages.id)]
                      }
                    }
                  };

                  console.log("Generted repsonse," ,response);


                  return response;
                }
            });
          }
        }
      }
    }
  )
)(ChatWindow)

const ChatAppSync = compose(
  graphql(AddMessage, {
    props: (props) => ({
      onAdd: msg => props.mutate({
        variables: msg,
        optimisticResponse: () => ({ addMessage: {id: `gen${uuid()}`, ...msg, __typename: 'Message', version: 1} }),
      })
    }),
  }
))(ChatMessage);

/*
  Based on this: https://docs.aws.amazon.com/appsync/latest/devguide/building-a-client-app-react.html
*/
const WithProvider = () => (
  <ApolloProvider client={client}>
      <Rehydrated>
          <App /> 
      </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
