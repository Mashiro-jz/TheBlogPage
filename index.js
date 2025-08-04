import express from "express";
import { randomUUID } from "crypto";

const app = express();
const port = 3000;

const posts = [];

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    posts: posts,
  });
});

app.post("/submit", (req, res) => {
  const post = {
    id: randomUUID(),
    user: req.body.userName,
    content: req.body.postContent,
  };
  if (post.user && post.content) {
    posts.push(post);
  }

  posts.reverse(); // Reverse the posts array to show the latest post first
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const postId = req.body.postId;
  const postIndex = posts.findIndex((post) => post.id === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  }
  res.redirect("/");
});


  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
