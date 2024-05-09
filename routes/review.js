const express = require("express")
const Product = require("../model/Subject")
const Review = require("../model/Review")
const { validateReview } = require("../middleware/validate")
const router = express.Router()

router.get("/subjects/:id/addreview",validateReview, async (req, res) => {
    const { rating, comment } = req.query
    let id = req.params.id
    let product = await Product.findById(id)
    let review = new Review({ rating, comment })
    product.reviews.push(review)

    await product.save()
    await review.save()

    res.redirect(`/product/${id}`)
})

module.exports = router