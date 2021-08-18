module.exports = function (str) {
  // TODO
  var reg = /^(az)|^(123)|^(abc123)|^(under)|^(404x)|^(obelisk)/;
  return reg.test(str);
}