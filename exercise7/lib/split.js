module.exports = function (str) {
  // 匹配一个逗号及紧接其前后所有可能出现的连续的不可见符号。
  return str.split(/\s*,\s*/);
}