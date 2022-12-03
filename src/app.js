const path = require("path")

const rootDir = require("./utils/path")


const express = require("express")
const bodyParser = require("body-parser")
const { engine } = require('express-handlebars');

const app = express()

app.engine("hbs", engine({
  layoutsDir: 'src/views/layouts/',
  defaultLayout: 'main-layout',
  extname: 'hbs'
}))
app.set("view engine", "hbs")
app.set("views", path.join(rootDir, "views"))

const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, "..", "public")))

app.use("/admin", adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "I'm sorry! :´(" })
})

app.listen(3000)
