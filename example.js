const fs = require("fs");
const parse = require("./xtmlparser");

let template = fs.readFileSync('./example.vue').toString();

fs.writeFileSync('./example.json', JSON.stringify(parse(template), null, 3));
