module.exports = function (str) {
  // [] 中的 ^ 代表反向字符, [^A-Z] 表示匹配不是 A-Z 的字符
  // \D 表示 非数字 , \d 表示 数字字符
  return /^\D[^A-Z]/.test(str);
}