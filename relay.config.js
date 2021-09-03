'use strict';

module.exports = {
  schema: 'star-wars-schema.graphql',
  src: 'src',
  extensions: ['js', 'jsx'],
  include: ['**'],
  verbose: true,
  watchman: false,
  watch: false,
  validate: false,
  quiet: false,
  noFutureProofEnums: true,
  language: 'javascript',
  artifactDirectory: 'src\\__generated__',
  customScalars: {
    Date: 'String',
    DateTime: 'String',
  },
};
