/**
 * @flow
 * @relayHash 5a1baf344560296f5af034fb53f3d504
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MutationsRemoveFavorQueryVariables = {|
  orderID: string
|};
export type MutationsRemoveFavorQueryResponse = {|
  +remove_favorit_order: ?{|
    +order: ?{|
      +id: string
    |}
  |}
|};
export type MutationsRemoveFavorQuery = {|
  variables: MutationsRemoveFavorQueryVariables,
  response: MutationsRemoveFavorQueryResponse,
|};
*/


/*
mutation MutationsRemoveFavorQuery(
  $orderID: ID!
) {
  remove_favorit_order(order_id: $orderID) {
    order {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "orderID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "remove_favorit_order",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "order_id",
        "variableName": "orderID"
      }
    ],
    "concreteType": "order_result",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "order",
        "storageKey": null,
        "args": null,
        "concreteType": "order",
        "plural": false,
        "selections": [
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MutationsRemoveFavorQuery",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MutationsRemoveFavorQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "MutationsRemoveFavorQuery",
    "id": null,
    "text": "mutation MutationsRemoveFavorQuery(\n  $orderID: ID!\n) {\n  remove_favorit_order(order_id: $orderID) {\n    order {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '94de8917a8a8078ea522b584152d0160';
module.exports = node;
