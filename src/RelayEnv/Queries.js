import { graphql } from 'react-relay'

export const GET_MESSAGES = graphql`
query QueriesMessagesQuery($page: Int!) {
    messages(page:$page per_page: 4){
        list {
            id
            mobile_message
        }
    }
}
`;

export const AUTH_INFO = graphql`
query QueriesAuthQuery{
    auth_info{
        account{
          login
          small_avatar
          orders_statistics{
            rating
          }
        }
    }  
}
`;

export const ORDERS = graphql`
query QueriesOrdersQuery($category: String!){
    orders(page: 1 category:$category){
        list{
          id
          status
          status_color
          name
          favorite
          subject
          customer{
            id
            login
            small_avatar
            profile_link
            date_registration
            date_last_visit
          }
        }
      }
}   
`;
