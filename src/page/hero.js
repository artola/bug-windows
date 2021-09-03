import {graphql} from 'relay-runtime';

export const hero = graphql`
  query heroQuery {
    hero {
      name
      ... on Human {
        homePlanet
      }
      ... on Droid {
        primaryFunction
      }
    }
  }
`;
