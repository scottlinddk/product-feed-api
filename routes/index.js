const FeedService = require("../services/FeedService");
const ProductService = require("../services/ProductService");
const express = require("express");
const router = express.Router();

router.get("/feed/:feedID", async (req, res) => {
    let responseFeed = await FeedService.getFeed(req.params.feedID);
    const mappedFeed = await ProductService.getMappedProducts(req.params.feedID);
    // console.log(mappedFeed);
    res.send(responseFeed);
});

module.exports = router;
