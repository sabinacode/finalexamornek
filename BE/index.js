import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

main()
  .then(() => console.log("db connected"))
  .catch(() => console.log("db not connected"));

async function main() {
  await mongoose.connect(
    "mongodb+srv://sebine:sebine@cluster0.cgiblia.mongodb.net/"
  );
}
const userSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
});
const User = mongoose.model("user", userSchema);

app.get("/user", async (req, res) => {
  const user = await User.find();
  res.send(user);       
});
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.send(user);
});
app.post("/user", async (req, res) => {
  const { body } = req;
  const user = await User.create(body);
  res.send(user);
});
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
