var elements = document.getElementsByTagName('*');

var shift = parseInt(Math.random() * 26);

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  
  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];
    
    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var splitText = text.split("");
      for (var k = 0; k <= splitText.length; k++) {
        var char = splitText[k];
        if (char.match(/[a-z]/i)) {
          var code = str.charCodeAt(k);
          if ((code >= 65) && (code <= 90)) {
            char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
          } else if ((code >= 97) && (code <= 122)) {
            char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
          }
        }
        output += char;
        element.replaceChild(document.createTextNode(output), node);
      }
    }
  }
}
