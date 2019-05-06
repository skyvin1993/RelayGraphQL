/**
 * @flow
 * @relayHash d5f792858c3d49e36cf134cf47a2cb7e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QueriesAuthQueryVariables = {||};
export type QueriesAuthQueryResponse = {|
  +auth_info: ?{|
    +account: ?{|
      +login: string,
      +small_avatar: string,
      +orders_statistics: ?{|
        +rating: ?number
      |},
    |}
  |}
|};
export type QueriesAuthQuery = {|
  variables: QueriesAuthQueryVariables,
  response: QueriesAuthQueryResponse,
|};
*/


/*
query QueriesAuthQuery {
  auth_info {
    account {
      login
      small_avatar
      orders_statistics {
        rating
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "small_avatar",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "orders_statistics",
  "storageKey": null,
  "args": null,
  "concreteType": "user_orders_statistics",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rating",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QueriesAuthQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "auth_info",
        "storageKey": null,
        "args": null,
        "concreteType": "auth_info",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "account",
            "storageKey": null,
            "args": null,
            "concreteType": "account",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QueriesAuthQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "auth_info",
        "storageKey": null,
        "args": null,
        "concreteType": "auth_info",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "account",
            "storageKey": null,
            "args": null,
            "concreteType": "account",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "QueriesAuthQuery",
    "id": null,
    "text": "query QueriesAuthQuery {\n  auth_info {\n    account {\n      login\n      small_avatar\n      orders_statistics {\n        rating\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a59016b0c6d45ff864d3a13148ed65ec';
module.exports = node;
