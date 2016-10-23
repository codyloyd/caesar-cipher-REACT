function mod(n, m) {
        return ((n % m) + m) % m;
}

var ceasar = function (string,key) {
  var array = string.split("")
  var translatedArray = array.map(function(char){
    var charCode = char.charCodeAt()
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(mod((charCode + key - 65 ), 26) + 65)
    } else if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(mod((charCode + key - 97), 26) + 97)
    } else {
      return char
    }
  })

  return translatedArray.join("")
}

module.exports = ceasar