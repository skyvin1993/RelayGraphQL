/**
 * @flow
 * @relayHash 7d5c42b00e64243df972b4861dc044ee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QueriesOrdersQueryVariables = {|
  category: string
|};
export type QueriesOrdersQueryResponse = {|
  +orders: ?{|
    +list: ?$ReadOnlyArray<?{|
      +id: string,
      +status: string,
      +status_color: ?string,
      +name: string,
      +favorite: ?boolean,
      +subject: string,
      +customer: ?{|
        +id: string,
        +login: string,
        +small_avatar: string,
        +profile_link: string,
        +date_registration: string,
        +date_last_visit: ?string,
      |},
    |}>
  |}
|};
export type QueriesOrdersQuery = {|
  variables: QueriesOrdersQueryVariables,
  response: QueriesOrdersQueryResponse,
|};
*/


/*
query QueriesOrdersQuery(
  $category: String!
) {
  orders(page: 1, category: $category) {
    list {
      id
      status
      status_color
      name
      favorite
      subject
      customer {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "category",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "orders",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "category",
        "variableName": "category"
      },
      {
        "kind": "Literal",
        "name": "page",
        "value": 1
      }
    ],
    "concreteType": "orders_list",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "list",
        "storageKey": null,
        "args": null,
        "concreteType": "order",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "status",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "status_color",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "favorite",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "subject",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "customer",
            "storageKey": null,
            "args": null,
            "concreteType": "user",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "login",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "small_avatar",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profile_link",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "date_registration",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "date_last_visit",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QueriesOrdersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "QueriesOrdersQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "QueriesOrdersQuery",
    "id": null,
    "text": "query QueriesOrdersQuery(\n  $category: String!\n) {\n  orders(page: 1, category: $category) {\n    list {\n      id\n      status\n      status_color\n      name\n      favorite\n      subject\n      customer {\n        id\n        login\n        small_avatar\n        profile_link\n        date_registration\n        date_last_visit\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b3857c8e626ae8b2dcf42923f37452ca';
module.exports = node;
