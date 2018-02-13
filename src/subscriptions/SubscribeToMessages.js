import gql from 'graphql-tag';

export default gql`
subscription subscribeToMessages {
    subscribeToMessages {
        __typename
        id
        timestamp
        text
        username
    }
  }`;