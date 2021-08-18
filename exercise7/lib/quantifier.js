module.exports = function (str) {
  return /\d+.(jpg|jpeg)$/.test(str);
}