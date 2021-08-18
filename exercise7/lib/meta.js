module.exports = function (str) {
  // . : 表示匹配非换行符之外的字符, 如果要单纯匹配 . 需要进行转义
  return /\.$/.test(str);
}