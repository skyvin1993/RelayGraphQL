/**
 * @flow
 * @relayHash 20f227c8c5d3e08320afc2a2a904d944
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QueriesMessagesQueryVariables = {|
  page: number
|};
export type QueriesMessagesQueryResponse = {|
  +messages: ?{|
    +list: ?$ReadOnlyArray<?{|
      +id: string,
      +mobile_message: string,
    |}>
  |}
|};
export type QueriesMessagesQuery = {|
  variables: QueriesMessagesQueryVariables,
  response: QueriesMessagesQueryResponse,
|};
*/


/*
query QueriesMessagesQuery(
  $page: Int!
) {
  messages(page: $page, per_page: 4) {
    list {
      id
      mobile_message
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "messages",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      },
      {
        "kind": "Literal",
        "name": "per_page",
        "value": 4
      }
    ],
    "concreteType": "messages_list",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "list",
        "storageKey": null,
        "args": null,
        "concreteType": "message",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "mobile_message",
            "args": null,
            "storageKey": null
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
    "name": "QueriesMessagesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "QueriesMessagesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "QueriesMessagesQuery",
    "id": null,
    "text": "query QueriesMessagesQuery(\n  $page: Int!\n) {\n  messages(page: $page, per_page: 4) {\n    list {\n      id\n      mobile_message\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bcd39d4f755bc899316855e8ab756193';
module.exports = node;
