var fs=require('fs');
fs.writeFileSync("text.txt","test txt beeeeee");
console.log(fs.readFileSync("text.txt").toString());
