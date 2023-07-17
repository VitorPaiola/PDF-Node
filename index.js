// npm install html-pdf
// npm install ejs 

const pdf = require("html-pdf");
const ejs = require("ejs");

var nomeDoUsuario = "Vitor Paiola"
var curso = "Formação Node.js"
var categoria = "Node.js"

ejs.renderFile("./index.ejs", { nome: nomeDoUsuario, curso: curso, categoria: categoria }, (err, html) => {
    if (err) {
        console.log("Um erro aconteceu :(");
    } else {
        pdf.create(html, {}).toFile("./meupdf.pdf", (err, res) => {
            if (err) {
                console.log("Um erro aconteceu :(");
            } else {
                console.log(res);
            }
        })
    }
})