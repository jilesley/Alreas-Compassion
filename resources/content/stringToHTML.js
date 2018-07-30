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
`If you would like to add anything to this site the best way is to add a file to <a href='https://drive.google.com/drive/folders/1rTwWoohLyyS9a8iVUhIy5YnYK05zM4Ap?usp=sharing'>this google dive</a>
Though please tell me if you do!`;

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
