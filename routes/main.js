const express = require("express");
const { ObjectId } = require("mongodb");

const { client } = require("../database/index");
const db = client.db("agym");

const router = express.Router();

router.get("/content", async (req, res) => {
  try {
    const data = await db.collection("agymTest").find({}).limit(8).toArray();
    const dataSkip = await db.collection("agymTest").find({}).skip(data.length).limit(4).toArray();
    res.json({
      data: [data, dataSkip],
      flag: true,
      message: "테스트게시글",
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
