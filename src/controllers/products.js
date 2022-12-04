const Product = require("../models/product")

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Adding new products",
    path: "/admin/add-product",
  })
}

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect("/")
}

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    })
  })
}
