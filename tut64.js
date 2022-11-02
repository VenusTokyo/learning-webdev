const fs = require("fs");
let text=fs.readFileSync("text.txt", "utf-8") //reading from file text.txt
console.log(text)
text=text.replace("sample","honey")
console.log(text)

fs.writeFileSync("new.text",text)
//writing in a file ,if a file is not present it will create a new file

