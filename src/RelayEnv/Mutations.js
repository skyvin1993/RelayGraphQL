import { graphql } from 'react-relay'

export const ADD_FAVOR = graphql`
mutation MutationsAddFavorQuery($orderID: ID!){
    add_favorit_order(order_id: $orderID){
      order {
        id
      }
    }
}
`;

export const REMOVE_FAVOR = graphql`
mutation MutationsRemoveFavorQuery($orderID: ID!){
    remove_favorit_order(order_id: $orderID){
      order {
        id
      }
    }
  }
`;
