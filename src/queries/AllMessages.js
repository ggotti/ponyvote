import gql from 'graphql-tag';

export default gql`
query AllPosts {
    allMessages {
        items {
          id,
          timestamp,
          text,
          username
        }
    }
}`;