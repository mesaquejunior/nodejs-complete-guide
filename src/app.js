const rootDir = require("./utils/path")

const path = require('path')
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(rootDir, "views"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, "..", "public")))

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "I'm sorry! :´(" })
})

app.listen(3000)
