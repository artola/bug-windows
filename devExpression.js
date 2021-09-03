'use strict';

const DevExpressionPlugin = function (api) {
  const t = api.types;

  const DEV_VARIABLE = '__DEV__';
  const DEV_EXPRESSION = t.binaryExpression(
    '!==',
    t.memberExpression(
      t.memberExpression(t.identifier('process'), t.identifier('env'), false),
      t.identifier('NODE_ENV'),
      false,
    ),
    t.stringLiteral('production'),
  );

  return {
    name: 'dev-expression',

    visitor: {
      Identifier: {
        enter: function (path) {
          if (
            path.isIdentifier({name: DEV_VARIABLE}) &&
            !path.scope.hasBinding(DEV_VARIABLE, true)
          ) {
            path.replaceWith(DEV_EXPRESSION);
          }
        },
      },
    },
  };
};

module.exports = DevExpressionPlugin;
