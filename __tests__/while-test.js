const assert = require('assert');

/**
 * (while <condition>
 *     <consequent>
 *     <alternate>)
 */
module.exports = eva => {
assert.strictEqual(eva.eval(
    ['begin',
        ['var', 'counter', 0],
        ['var', 'result', 0],

        ['while', ['<', 'counter', 10],
            ['begin',
                ['set', 'result', ['+', 'result', 'counter']],
                ['set', 'counter', ['+', 'counter', 1]],
            ]
        ],

        'result'
    ]),
    45);
};