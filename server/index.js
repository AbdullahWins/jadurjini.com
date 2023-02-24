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
    const salesCollection = client.db("jadurjinidb").collection("sales");
    const productsCollection = client.db("jadurjinidb").collection("products");
    const testProductsCollection = client
      .db("jadurjinidb")
      .collection("testProducts");
    const testShopsCollection = client
      .db("jadurjinidb")
      .collection("testShops");
    const testFoodsCollection = client
      .db("jadurjinidb")
      .collection("testFoods");
    const testCartsCollection = client
      .db("jadurjinidb")
      .collection("testCarts");
    const testOrdersCollection = client
      .db("jadurjinidb")
      .collection("testOrders");

    //separate apis
    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = usersCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/sales", async (req, res) => {
      const query = {};
      const cursor = salesCollection.find(query);
      const sales = await cursor.toArray();
      res.send(sales);
    });
    app.get("/products", async (req, res) => {
      const query = {};
      const cursor = productsCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });

    //users
    app.post("/user", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.get("/user", async (req, res) => {
      const userMail = req.query.email;
      const query = { email: userMail };
      const user = await usersCollection.findOne(query);
      res.send(user);
    });

    app.patch("/user", async (req, res) => {
      const userMail = req.body.user.email;
      const userName = req.body.dbNewUser.name;
      const userPhone = req.body.dbNewUser.phoneNumber;
      const userPassword = req.body.dbNewUser.password;
      console.log(userMail, userName);
      const newvalues = {
        $set: {
          name: userName,
          phoneNumber: userPhone,
          password: userPassword,
        },
      };
      const query = { email: userMail };
      const updatedUser = await usersCollection.updateOne(query, newvalues);
      res.send(updatedUser);
    });

    //cart
    app.get("/testCart/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const product = await testCartsCollection.findOne(query);
      res.send(product);
    });
    //orderw
    app.post("/order", async (req, res) => {
      const order = req.body;
      const result = await testOrdersCollection.insertOne(order);
      res.send(result);
    });

    app.get("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const query = { userId: id };
      const cursor = testOrdersCollection.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });

    app.patch("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const activeOrderValue = req.body.activeOrder;
      console.log(activeOrder);
      const newvalues = {
        $set: {
          activeOrder: activeOrderValue,
        },
      };
      const query = { userId: id };
      const updatedOrder = await testOrdersCollection.updateOne(
        query,
        newvalues
      );
      res.send(updatedOrder);
    });

    app.get("/order", async (req, res) => {
      const query = {};
      const cursor = testOrdersCollection.find(query);
      const order = await cursor.toArray();
      res.send(order);
    });

    //products
    app.get("/testProducts", async (req, res) => {
      const query = {};
      const cursor = testProductsCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });
    app.get("/testCartProducts", async (req, res) => {
      const cartId = req.body;
      console.log(cartId);
      const cart = [];
      const cartInReq = [cartId._id];
      // cartId.map((id) => {
      //   cartInReq.push(ObjectId(id));
      // });
      try {
        const cursor = testProductsCollection.find({
          _id: {
            $in: ObjectId(cartInReq),
          },
        });
        const product = await cursor.toArray();
        cart.push(product);
        res.send(cart);
      } catch {}
    });
    app.get("/testFoods", async (req, res) => {
      const query = {};
      const cursor = testFoodsCollection.find(query);
      const food = await cursor.toArray();
      res.send(food);
    });
    app.get("/testProducts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const product = await testProductsCollection.findOne(query);
      res.send(product);
    });
    app.post("/addproduct", async (req, res) => {
      const product = req.body;
      const result = await testProductsCollection.insertOne(product);
      res.send(result);
    });
    //shop
    app.get("/testShops", async (req, res) => {
      const query = {};
      const cursor = testShopsCollection.find(query);
      const shops = await cursor.toArray();
      res.send(shops);
    });
    app.get("/locateShops/:id", async (req, res) => {
      const id = req.params.id;
      const cursor = testProductsCollection.find({
        shopLocation: { $regex: id },
      });
      const shops = await cursor.toArray();
      res.send(shops);
    });
    app.get("/shops/:shopName", async (req, res) => {
      const shopName = req.params.shopName;
      const query = { shopName: shopName };
      const cursor = testProductsCollection.find(query);
      const shop = await cursor.toArray();
      res.send(shop);
    });
    //category
    app.get("/category/:categoryName", async (req, res) => {
      const categoryName = req.params.categoryName;
      const query = { productCategory: categoryName };
      const cursor = testProductsCollection.find(query);
      const category = await cursor.toArray();
      res.send(category);
    });
    app.get("/subCategory/:subCategoryName", async (req, res) => {
      const subCategoryName = req.params.subCategoryName;
      const query = { productSubCategory: subCategoryName };
      const cursor = testProductsCollection.find(query);
      const subCategory = await cursor.toArray();
      res.send(subCategory);
    });

    // temporary to add fields on
    // app.get("/addNewField", async (req, res) => {
    //   const filter = {};
    //   const options = { upsert: true };
    //   const updatedDoc = {
    //     $set: {
    //       shopImage:
    //         "https://www.mawbiz.com.bd/application/views/module/product_image/IMG_6906_1.JPG",
    //       shopRating: "4.5",
    //     },
    //   };
    //   const result = await testProductsCollection.updateMany(
    //     filter,
    //     updatedDoc,
    //     options
    //   );
    //   res.send(result);
    // });

    // app.get("/reviews", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: ObjectId(id) };
    //   const cursor = reviewCollection.find(query);
    //   const review = await cursor.toArray();
    //   res.send(review);
    // });

    // app.get("/category/:categoryName", async (req, res) => {
    //   const catName = req.params.categoryName;
    //   const query = { productCategory: catName };
    //   const category = await productsCollection.findOne(query);
    //   res.send(category);
    // });

    // app.get("/categories", async (req, res) => {
    //   const query = {};
    //   const cursor = testProductsCollection.find(query);
    //   const categories = await cursor.toArray();
    //   res.send(categories);
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
