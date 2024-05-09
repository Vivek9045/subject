const express = require("express")
const Product = require("../model/Subject")
const { validateProduct } = require("../middleware/validate")
const isUserLoggedIn = require("../middleware/auth")
const router = express.Router()

router.get("/subject", async (req, res) => {
   let subjects = await Product.find()
   res.render("allSubject", { subjects })
})

router.get("/subject/:id",isUserLoggedIn, async (req, res) => {
   let id = req.params.id
   let subject = await Product.findById(id).populate('reviews')
   console.log(subject);
   res.render("subjectPage", { subject })

})

router.get("/addSubject", isUserLoggedIn,(req, res) => {
   res.render("addSubject")
})

router.post("/addSubject",validateProduct, async (req, res) => {
   const { name, price, img, desc } = req.body
   await Product.create({ name, price, img, desc })
   req.flash('success','product added successfully!')
   res.redirect("/allSubject")
})

module.exports = router