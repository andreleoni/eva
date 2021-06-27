const assert = require('assert');

module.exports = eva => {
    assert.strictEqual(eva.eval(['var', 'x', 10]), 10)
    assert.strictEqual(eva.eval('x'), 10)
    assert.strictEqual(eva.eval(['var', 'isUser', 'true']), true);
    assert.strictEqual(eva.eval(['var', 'z', ['+', 2, 5]]), 7);
    assert.strictEqual(eva.eval('z'),  7);
};
