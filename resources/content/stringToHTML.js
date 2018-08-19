const textToHTML = (text) => {
  let newText = text.replace(/(.+)/g, "<p>$1</p>");
  //newText = newText.replace(/<p>({\[.+\])((?:.|\n)+?)}<\/p>/mg, '$1<p>$2</p>}')

  query = /(.*){\[(.+)\](?:.|\n)+?}(.*)/mg;
  let result;

  while ((result = query.exec(newText)) !== null) {
    let modTxt = result[0];
    let seporator = ""
    if (modTxt.includes("\n")) {
      modTxt = modTxt.replace(/<p>({\[.+\])((?:.|\n)+?)}<\/p>/mg, '$1<p>$2</p>}')
      seporator = "div";
    } else {
      seporator = "span";
    }
    let setClass = "";
    let results = result[2].split(",")
    for (var i = 0; i < results.length; i++) {
      switch (results[i]) {
        case "h":
          modTxt = modTxt.replace(/<(\w+)>/mg, '<$1 class="heading">');
          break;
        case "b":
          setClass += "bold ";
          break;
        case "i":
          setClass += "italics ";
          break;
        case "u":
          setClass += "underline ";
          break;
        case "l":
          seporator = "ul";
          modTxt = modTxt.replace(/p>/mg, 'li>')
          break;
        case "n":
          setClass += "note ";
          break;
        case "p0":
          modTxt = modTxt.replace(/<(\w+)>/mg, '<$1 class="noPad">');
          break;
        default:
          console.log(`Case not found for result`);
      }
    }


    modTxt = modTxt.replace(/{\[.+\]/m, "<" + seporator + " class='" + setClass + "'>");
    modTxt = modTxt.replace("}", "</" + seporator + ">");

    newText = newText.substr(0, result.index) + modTxt + newText.substr(query.lastIndex);
  }

  return newText;
}

const text =
`A black, horned dragonborn who stands at 6 feet tall. He has emerald green eyes that peek out from his dark scaled head. He wears well maintained silver chain mail armour, which has gold highlights and the holy symbol of {[b]Uxen} in the center. He also wields a shield with the same holy symbol embraised onto it, as well as a simple mace in his right hand.
He will often try to avoid violence whenever he can, but understands that it is at times the only way for though who are too far gone down the path of evil.
Those who have spent some time with him will know the deep respect he has for the priest whom he trained under - {[b]Niccolò}.`;

const fs = require("fs");

const fileName = "temp";

let fileContent = textToHTML(text)

fs.writeFile(`./${fileName}.html`, fileContent, (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
