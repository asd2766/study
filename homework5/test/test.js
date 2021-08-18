/*
 * @Author: kael 
 * @Date: 2018-02-14 17:35:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-08 20:25:43
 */

const assert = require('assert');
const RegExps = require('..');

describe('正则表达式', () => {

  it('匹配手机号码', () => {
    [
      '13800000000',
      '13615772434',
      '14712341234',
      '15012341234',
      '18768107262',
      '17788172817',
      '13328271827',
      '19941481289',
      '17775030195',
      '15157754236',
      '17816828922',
    ].forEach((mobile) => {
      assert.ok(RegExps.mobile.test(mobile));
    });
    [
      '23800000000',
      '1471234l234',
      '147000000000',
      '150-123-41234',
      '150-1234-1234',
    ].forEach((mobile) => {
      assert.ok(!RegExps.mobile.test(mobile));
    });
  });

  it('匹配 QQ 号', () => {
    [
      '10000',
      '987654321',
      '12345678900',
    ].forEach((qq) => {
      assert.ok(RegExps.qq.test(qq));
    });
    [
      '1000',
      '0987654321',
      '123456789000',
    ].forEach((qq) => {
      assert.ok(!RegExps.qq.test(qq));
    });
  });

  it('匹配数字', () => {
    [
      '5',
      '+5',
      '-5',
      '.5',
      '0.5',
      '1.5',
      '-.5',
      '+.5',
      '10000',
      '10000.',
      '100.00',
    ].forEach((number) => {
      assert.ok(RegExps.number.test(number));
    });
    [
      '.5.5',
      '1.5.5',
    ].forEach((number) => {
      assert.ok(!RegExps.number.test(number));
    });
  });

  it('匹配邮箱', () => {
    [
      '12345@qq.com',
      '12345@163.com',
      'wind123@126.cn',
      'wind123@yahoo.com.cn',
      '123siwening@gmail.com',
    ].forEach((value) => {
      assert.ok(RegExps.email.test(value));
    });
    [
      '12345#qq.com',
      '12345$163.com',
      'wind123.126.cn',
      'wind123@yahoo@com.cn',
      '123siw@123@gmail.com',
    ].forEach((value) => {
      assert.ok(!RegExps.email.test(value));
    });
  });

  it('匹配 url', () => {
    [
      'https://www.qq.com',
      'http://www.baidu.com',
      'https://192.168.2.128:8080/mail/',
    ].forEach((value) => {
      assert.ok(RegExps.url.test(value));
    });
    [
      'http//www.qq.com',
      'http//www.baidu.com',
      'atps://192.168.2.128:8080/mail/',
    ].forEach((value) => {
      assert.ok(!RegExps.url.test(value));
    });
  });

  it('匹配 IPv4', () => {
    [
      '127.0.0.1',
      '198.127.2.187',
      '255.255.255.255',
    ].forEach((value) => {
      assert.ok(RegExps.ipv4.test(value));
    });
    [
      '256.0.0.0',
    ].forEach((value) => {
      assert.ok(!RegExps.ipv4.test(value));
    });
  });

  it('匹配身份证号码', () => {
    [
      '350301198906180060',
      '450324198809231637',
      '142232199211182197',
      '420821199206305032',
      '36082219750711058X',
      '360822198904022764',
      '36082219921102645X',
      '15092619750102405X',
    ].forEach((value) => {
      assert.ok(RegExps.idcard.test(value));
    });
    [
      '350301298906180060',
      '350301298906310060',
      '350301228909350060',
      '35030129890618006Y',
      '3503012989061800666',
    ].forEach((value) => {
      assert.ok(!RegExps.idcard.test(value));
    });
  });

});
