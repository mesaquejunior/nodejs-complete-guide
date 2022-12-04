const path = require("path")

const rootDir = require("./utils/path")
const errorController = require("./controllers/error")

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(rootDir, "views"))

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, "..", "public")))

app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(3000)
