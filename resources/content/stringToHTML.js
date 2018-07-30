const textToHTML = (text) => {
  let newText = text.replace(/\n/g, "</p>\n<p>");
  newText = "<p>" + newText + "</p>";
  newText = newText.replace(/<p>({\[.+\])((?:.|\n)+?)}<\/p>/mg, '$1<p>$2</p>}')

  query = /{\[(.+)\](?:.|\n)+?}/mg;
  let result;

  while ((result = query.exec(newText)) !== null) {

    let modTxt = result[0];
    let seporator = "div";
    let setClass = "";
    let results = result[1].split(",")
    for (var i = 0; i < results.length; i++) {
      switch (results[i]) {
        case "h":
          setClass += "heading ";
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
          modTxt = modTxt.replace(/p>/g, "li>");
          break;
        case "n":
          setClass += "note ";
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
`{[b,u]This is a test to see if two classes can be added}
{[l,i,b,u,h,n]This is a test for lists
To see if it will work with them all
another line}`;


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
