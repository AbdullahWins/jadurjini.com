const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;
const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${dbUserName}:${dbPassword}@jadurjini.9hl5w5n.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const usersCollection = client.db("jadurjinidb").collection("users");
    const reviewCollection = client.db("jadurjinidb").collection("reviews");

    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = usersCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    // app.get("/reviews", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: ObjectId(id) };
    //   const cursor = reviewCollection.find(query);
    //   const review = await cursor.toArray();
    //   res.send(review);
    // });

    // app.patch("/myReviews/:id", async (req, res) => {
    //   const id = req.params.id;
    //   console.log(id);
    //   const query = { _id: ObjectId(id) };
    //   const review = req.body;
    //   console.log(review[0]);
    //   const updatedReview = {
    //     $set: {
    //       reviewBody: review[0].reviewBody,
    //       reviewServiceRating: review[0].reviewServiceRating,
    //     },
    //   };
    //   const result = await reviewCollection.updateOne(query, updatedReview);
    //   res.send(result);
    // });

    // app.delete("/myReviews/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: ObjectId(id) };
    //   const result = await reviewCollection.deleteOne(query);
    //   res.send(result);
    // });

    // app.post("/addreview", async (req, res) => {
    //   const reviews = req.body;
    //   const result = await reviewCollection.insertOne(reviews);
    //   res.send(result);
    // });
  } finally {
  }
}
run().catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("JadurJini BackEnd!");
});

app.listen(port, () => {
  console.log("server running");
});
