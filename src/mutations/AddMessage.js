import gql from 'graphql-tag';

export default gql`
mutation addMessage($text: String!, $username: String!, $timestamp: String!) {
  addMessage(text: $text, username: $username, timestamp: $timestamp ) {
    __typename
    id
    timestamp
    text
    username
  }
}
`;