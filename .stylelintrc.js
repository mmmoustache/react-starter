module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          'composes',
        ],
      },
    ],
    'at-rule-no-unknown': [
      true, 
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function',
        ]
      }
    ],
    'at-rule-empty-line-before': [
      'always', 
      {
        ignore: [
          'after-comment', 
          'inside-block', 
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
        ]
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',
        ],
      },
    ],
    'string-quotes': 'single',
  }
};
