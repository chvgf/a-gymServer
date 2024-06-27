const express = require("express");
const { ObjectId } = require("mongodb");

const { client } = require("../database/index");
const db = client.db("agym");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("관리자 페이지 입니다.");
});

router.post("/testInsert", async (req, res) => {
  const test = await db.collection("agymTest").insertOne({
    title: req.body.title,
    content: req.body.content,
    img: req.body.img,
    convenience: req.body.convenience,
  });
  res.json({
    data: test,
    flag: true,
    message: "테스트게시글",
  });
});

module.exports = router;
