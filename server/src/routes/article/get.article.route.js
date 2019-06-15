import express from "express";
const router = express.Router();

/* GET article by id */
const getSingleArticle = router.get("/:id", (req, res, next) => {});

export default getSingleArticle;
