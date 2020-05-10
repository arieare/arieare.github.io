$( document ).ready(function() {
    var textcontent = $('#originalString').html();
    // for thailand use no spaces
    var textcontent = textcontent.replace(/\s+/g, '');
    var textlength = textcontent.length;

    var expansion = 0.15; //35%
    console.log("expansion ratio: "+expansion);
    var newtextlength = Math.ceil(textlength + (textlength*expansion));
    console.log("original text length: " + textlength);
    console.log("new text length: " + newtextlength);
    var ratio = newtextlength/textlength;
    console.log("ratio: "+ratio);
    var newtext="";
    if (ratio < 2) {
      var selisih = newtextlength - textlength
      console.log(selisih);
      newtext = textcontent + textcontent.substring(0,(selisih));
      console.log(newtext);
      $('#extendedString').html(newtext);   
    }
    else {
      var a = Math.floor(ratio);
      console.log("floor: "+ a);  
      var b = ratio - a;
      b = textlength * b;
      var c = textcontent.substring(0,(b));
      newtext = repeat(textcontent, a);
      newtext = newtext + c;
      console.log(newtext);
      $('#extendedString').html(newtext);  
    }
    
    
    function repeat(pattern, count) {
    if (count < 1) return '';
    var result = '';
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
}

  console.log($('#originalString').html());
  var pseudoloced;
  //- .on('click', function() {
  pseudoloc.option.extend = 0;
  pseudoloced = pseudoloc.str($('#extendedString').html());
  $('#pseudolocString').html(pseudoloced);
  console.log(pseudoloced);

  var pseudolocalize = function pseudolocalize(arg){
    if(typeof arg === 'string'){
        var elements = document.querySelectorAll(arg);
        for(var i=0, len=elements.length; i<len; i++){
            pseudolocalize(elements[i]);
        }
    } else if(arg.nodeType === 1){
        for(var i=0, len=arg.childNodes.length; i<len; i++){
            pseudolocalize(arg.childNodes[i]);
        }
    } else if(arg.nodeType === 3){
        arg.nodeValue = arg.nodeValue.replace(/(.)/g, '$1$1');
    }
  }
});