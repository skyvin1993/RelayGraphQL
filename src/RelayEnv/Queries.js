import { graphql } from 'react-relay'

export const GET_MESSAGES = graphql`
query GetMsgs($page: Int!) {
    messages(page:$page per_page: 4){
        list {
            id
            mobile_message
        }
    }
}
`;
