const Product = require("../models/product")

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Adding new products",
    path: "/admin/add-product",
    activeAddProduct: true,
    formCSS: true,
    productCSS: true,
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
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    })
  })
}
