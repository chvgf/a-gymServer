const { MongoClient } = require("mongodb");

const { MONGO_ID, MONGO_PASSWORD } = process.env;
const url = `mongodb+srv://${MONGO_ID}:${MONGO_PASSWORD}@cluster0.txxpbd0.mongodb.net/`;
const client = new MongoClient(url);

const connect = async () => {
  try {
    await client.connect(); // MongoDB 서버에 연결
    console.log("몽고디비 연결 성공");
  } catch (err) {
    console.error("몽고디비 연결 에러", err);
  }
};

module.exports = { connect, client };
