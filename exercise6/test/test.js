const assert = require('assert')

describe('regex', function () {
  it('可匹配 LITERALLY 开始', function () {
    const anchor_start = require('../lib/anchor_start')
    assert.ok(
      anchor_start(`LITERALLY CAN'T EVEN`),
      `LITERALLY CAN'T EVEN`
    )
    assert.ok(
      !anchor_start(`FIGURATIVELY can't even`),
      `FIGURATIVELY can't even`
    )
    assert.ok(
      !anchor_start(`I am LITERALLY on a roll down a hill right now`),
      `I am LITERALLY on a roll down a hill right now`
    )
    assert.ok(
      !anchor_start(`literaturely`),
      `literaturely`
    )
    assert.ok(
      !anchor_start(`litERALLY whatever`),
      `litERALLY whatever`
    )
    assert.ok(
      anchor_start(`LITERALLY WHATEVER`),
      `LITERALLY WHATEVER`
    )
  })

  it('可匹配 BANANAS 结束', function () {
    const anchor_end = require('../lib/anchor_end')

    assert.ok(
      anchor_end(`THIS SHIITAKE IS BANANAS`),
      `THIS SHIITAKE IS BANANAS`
    )
    assert.ok(
      anchor_end(`BANANAS`),
      `BANANAS`
    )
    assert.ok(
      !anchor_end(`BANANAS ARE GREEN OR YELLOW`),
      `BANANAS ARE GREEN OR YELLOW`
    )
    assert.ok(
      !anchor_end(`NOTHING`),
      `NOTHING`
    )
    assert.ok(
      !anchor_end(`EVERYTHING IS BANANAS.`),
      `EVERYTHING IS BANANAS.`
    )
    assert.ok(
      anchor_end(`EVERYTHING IS BANANAS`),
      `EVERYTHING IS BANANAS`
    )
  })

  it('首字母必须满足下面条件', function () {
    const char_class = require('../lib/char_class')
    assert.ok(
      char_class(`az`),
      `az`
    )
    assert.ok(
      !char_class(`babbage`),
      `babbage`
    )
    assert.ok(
      !char_class(`AAA`),
      `AAA`
    )
    assert.ok(
      char_class(`123`),
      `123`
    )
    assert.ok(
      char_class(`abc123`),
      `abc123`
    )
    assert.ok(
      !char_class(`Q1`),
      `Q1`
    )
    assert.ok(
      char_class(`under`),
      `under`
    )
    assert.ok(
      char_class(`404x`),
      `404x`
    )
    assert.ok(
      char_class(`obelisk`),
      `obelisk`
    )
  })

  it('匹配开头非数字，第二个字符非大写字母', function () {
    const negated_char_class = require('../lib/negated_char_class')
    assert.ok(
      !negated_char_class(`1A`),
      `1A`
    )
    assert.ok(
      negated_char_class(`A1`),
      `A1`
    )
    assert.ok(
      !negated_char_class(`ABC`),
      `ABC`
    )
    assert.ok(
      negated_char_class(`abc`),
      `abc`
    )
    assert.ok(
      !negated_char_class(`555`),
      `555`
    )
    assert.ok(
      !negated_char_class(`5z`),
      `5z`
    )
    assert.ok(
      negated_char_class(`...`),
      `...`
    )
  })
})