/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type heroQueryVariables = {||};
export type heroQueryResponse = {|
  +hero: {|
    +name: string,
    +homePlanet?: ?string,
    +primaryFunction?: string,
  |}
|};
export type heroQuery = {|
  variables: heroQueryVariables,
  response: heroQueryResponse,
|};
*/


/*
query heroQuery {
  hero {
    __typename
    name
    ... on Human {
      homePlanet
    }
    ... on Droid {
      primaryFunction
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "homePlanet",
      "storageKey": null
    }
  ],
  "type": "Human",
  "abstractKey": null
},
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "primaryFunction",
      "storageKey": null
    }
  ],
  "type": "Droid",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "heroQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "hero",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "heroQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "hero",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b6d7ea5441f548b2755e448bcd5bc1d2",
    "id": null,
    "metadata": {},
    "name": "heroQuery",
    "operationKind": "query",
    "text": "query heroQuery {\n  hero {\n    __typename\n    name\n    ... on Human {\n      homePlanet\n    }\n    ... on Droid {\n      primaryFunction\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'da6b50266aeae227d318a6354139aab8';

module.exports = node;
