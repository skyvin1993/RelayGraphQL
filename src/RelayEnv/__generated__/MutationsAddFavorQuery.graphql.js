/**
 * @flow
 * @relayHash 75dda411418f2bc6e45c1fe3141164b6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MutationsAddFavorQueryVariables = {|
  orderID: string
|};
export type MutationsAddFavorQueryResponse = {|
  +add_favorit_order: ?{|
    +order: ?{|
      +id: string
    |}
  |}
|};
export type MutationsAddFavorQuery = {|
  variables: MutationsAddFavorQueryVariables,
  response: MutationsAddFavorQueryResponse,
|};
*/


/*
mutation MutationsAddFavorQuery(
  $orderID: ID!
) {
  add_favorit_order(order_id: $orderID) {
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
    "name": "add_favorit_order",
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
    "name": "MutationsAddFavorQuery",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MutationsAddFavorQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "MutationsAddFavorQuery",
    "id": null,
    "text": "mutation MutationsAddFavorQuery(\n  $orderID: ID!\n) {\n  add_favorit_order(order_id: $orderID) {\n    order {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a85c8cb11e530c2a35216c177c1cf2cd';
module.exports = node;
