const assert = require('assert');
const testUtil = require('./test-util');

module.exports = eva => {
    // Math functions:
    testUtil.test(eva, `(+ 1 5)`, 6);
    testUtil.test(eva, `(+ (+ 2 3) 5)`, 10);
    testUtil.test(eva, `(+ (* 2 3) 5)`, 11);

    // Comparison:
    testUtil.test(eva, `(> 1 5)`, false);
    testUtil.test(eva, `(< 1 5)`, true);

    testUtil.test(eva, `(>= 5 5)`, true);
    testUtil.test(eva, `(<= 5 5)`, true);
    testUtil.test(eva, `(== 5 5)`, true);
};